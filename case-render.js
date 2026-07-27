/* ===========================================================
   HISAAB — CASE-RENDER.JS
   Full investigative-dossier renderer for a single case, loaded
   from ?id= against the `hisaabCases` array in data/cases.js.

   Supported fields on a case object — every one is optional
   except `id` and `title`. Any field that's missing or empty is
   simply skipped, so thin entries and fully-loaded dossiers both
   render cleanly with no "undefined" ever showing on the page.

   title, image, category, institution, dateRange, status,
   overview, background, timeline, allegations, officialPosition,
   majorInvestigations, evidence, campaigns, internationalAttention,
   institutions, laws, majorQuestions, majorCases, statistics,
   impact, questions, legacy, whyItMatters, caseStatus, hisaabNote,
   sources, figures

   Self-contained — does NOT load main.js (homepage-only logic).
=========================================================== */

var STATUS_LABEL = {
    alleged: "Alleged",
    investigation: "Under Investigation",
    convicted: "Convicted",
    acquitted: "Acquitted",
    pending: "Pending",
    disputed: "Disputed"
};

var container = document.getElementById("case-container");
var params = new URLSearchParams(window.location.search);
var caseId = Number(params.get("id"));
var thisCase = hisaabCases.find(function(c){ return c.id === caseId; });

if(!thisCase){
    container.innerHTML =
        '<div style="padding:180px 24px 120px;text-align:center;">' +
            '<h1 style="font-family:var(--display);font-size:32px;color:var(--text-primary);margin-bottom:14px;">Case Not Found</h1>' +
            '<p style="color:var(--text-muted);margin-bottom:28px;">This case does not exist in the record.</p>' +
            '<a href="index.html" class="btn btn-outline">← Return To Archive</a>' +
        '</div>';
    throw new Error("Case not found");
}

// backward-compatibility: earlier case entries used `response` and
// `outcome` before the schema settled on `officialPosition` and
// `legacy` — map the old names forward so nothing already written
// stops rendering just because the field name changed.
if(!thisCase.officialPosition && thisCase.response) thisCase.officialPosition = thisCase.response;
if(!thisCase.legacy && thisCase.outcome) thisCase.legacy = thisCase.outcome;

/* ---------------------------------------------------------
   GENERIC HELPERS
--------------------------------------------------------- */

// turns camelCase / snake_case keys into readable Title Case labels
function humanizeKey(key){
    return key
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/[_-]+/g, " ")
        .replace(/^./, function(s){ return s.toUpperCase(); });
}

// wraps a labeled section in the standard case-block shell
function block(label, innerHtml){
    if(!innerHtml) return "";
    return '<div class="case-block">' +
        '<p class="case-block-label">' + label + '</p>' +
        innerHtml +
    '</div>';
}

// a single plain-text paragraph field
function textBlock(label, val){
    if(!val) return "";
    return block(label, '<p class="case-text">' + val + '</p>');
}

// a bulleted list field — accepts an array of strings, an array of
// objects ({title/name/text, description/detail, link}), or a
// single string (rendered as a one-item list)
function listBlock(label, val){
    if(!val) return "";
    var items = Array.isArray(val) ? val : [val];
    if(!items.length) return "";

    var html = items.map(function(item){
        if(typeof item === "string" || typeof item === "number"){
            return '<li>' + item + '</li>';
        }
        if(item && typeof item === "object"){
            var head = item.title || item.name || item.text || "";
            var body = item.description || item.detail || item.summary || "";
            var linkHtml = item.link
                ? ' <a href="' + item.link + '" target="_blank" rel="noopener" style="color:var(--gold-soft);">Source →</a>'
                : "";
            if(head && body) return '<li><strong>' + head + '</strong> — ' + body + linkHtml + '</li>';
            return '<li>' + (head || body) + linkHtml + '</li>';
        }
        return "";
    }).join("");

    return block(label, '<ul>' + html + '</ul>');
}

// auto-detects string vs array and routes to the right renderer —
// used for every free-form field so the schema stays forgiving
// about whether the person filling in data used a string or a list
function autoBlock(label, val){
    if(!val) return "";
    if(Array.isArray(val)) return listBlock(label, val);
    if(typeof val === "string") return textBlock(label, val);
    return "";
}

// key/value snapshot grid — accepts either a plain object
// ({ key: value, ... }) or an array of { label, value } objects.
// Reuses the same score-grid/score-cell styling as the person
// profile page's Hisaab Score panel, so it stays visually consistent
// without needing new CSS.
function statGrid(label, data){
    if(!data) return "";
    var pairs = [];

    function pickValue(d){
        if(d.value !== undefined) return d.value;
        if(d.count !== undefined) return d.count;
        if(d.amount !== undefined) return d.amount;
        if(d.number !== undefined) return d.number;
        return "";
    }

    if(Array.isArray(data)){
        pairs = data.map(function(d){
            return { label: d.label || d.name || "", value: pickValue(d) };
        });
    } else if(typeof data === "object"){
        pairs = Object.keys(data).map(function(key){
            return { label: humanizeKey(key), value: data[key] };
        });
    }

    pairs = pairs.filter(function(p){ return p.value !== "" && p.value !== undefined && p.value !== null; });
    if(!pairs.length) return "";

    var cells = pairs.map(function(p){
        return '<div class="score-cell"><div class="n">' + p.value + '</div><div class="l">' + p.label + '</div></div>';
    }).join("");

    return block(label, '<div class="score-grid">' + cells + '</div>');
}

/* ---------------------------------------------------------
   CASE STATUS AT A GLANCE
   `caseStatus` mixes three different shapes of data — short
   facts (status/opened/lastUpdated/resolved), a list
   (investigatingBodies), and long-form prose (currentState,
   officialPosition, humanRightsPosition, convictions). Feeding
   all of that through the numbers-in-a-box statGrid crams full
   paragraphs into tiny stat cells, which is what was looking
   broken — so this renders each shape appropriately instead.
--------------------------------------------------------- */

function caseStatusBlock(){
    var cs = thisCase.caseStatus;
    if(!cs || typeof cs !== "object") return "";

    var glanceFields = [
        { label: "Status", value: cs.status },
        { label: "Opened", value: cs.opened },
        { label: "Resolved", value: cs.resolved === true ? "Yes" : cs.resolved === false ? "No" : cs.resolved },
        { label: "Last Updated", value: cs.lastUpdated }
    ].filter(function(f){ return f.value !== undefined && f.value !== null && f.value !== ""; });

    var glanceHtml = glanceFields.length
        ? '<div class="score-grid case-status-grid">' + glanceFields.map(function(f){
            return '<div class="score-cell"><div class="n">' + f.value + '</div><div class="l">' + f.label + '</div></div>';
        }).join("") + '</div>'
        : "";

    var bodiesHtml = "";
    if(Array.isArray(cs.investigatingBodies) && cs.investigatingBodies.length){
        bodiesHtml = '<p class="case-status-subhead">Investigating Bodies</p>' +
            '<div class="case-status-tags">' +
            cs.investigatingBodies.map(function(b){ return '<span class="case-status-tag">' + b + '</span>'; }).join("") +
            '</div>';
    }

    var proseFields = [
        { label: "Current State", value: cs.currentState },
        { label: "Official Position", value: cs.officialPosition },
        { label: "Human Rights Groups' Position", value: cs.humanRightsPosition },
        { label: "Convictions / Accountability", value: cs.convictions }
    ].filter(function(f){ return !!f.value; });

    var proseHtml = proseFields.map(function(f){
        return '<div class="case-status-row">' +
            '<p class="case-status-row-label">' + f.label + '</p>' +
            '<p class="case-text">' + f.value + '</p>' +
        '</div>';
    }).join("");

    var inner = glanceHtml + bodiesHtml + proseHtml;
    if(!inner) return "";

    return block("Case Status At A Glance", '<div class="case-status-panel">' + inner + '</div>');
}

/* ---------------------------------------------------------
   HERO
--------------------------------------------------------- */

function hero(){
    var statusCls = thisCase.status ? "status-" + thisCase.status : "status-pending";
    var statusLabel = STATUS_LABEL[thisCase.status] || thisCase.status || "";

    var metaParts = [thisCase.category, thisCase.institution, thisCase.dateRange].filter(Boolean);

    var imageHtml = thisCase.image
        ? '<div class="case-hero-photo"><img src="' + thisCase.image + '" alt="' + thisCase.title + '" ' +
            'onerror="this.parentElement.style.display=\'none\'"></div>'
        : "";

    return '<section class="case-hero"><div class="case-hero-inner">' +
        '<a href="index.html" class="case-back">← Back To Archive</a>' +
        imageHtml +
        '<div class="case-ref">Case #' + String(thisCase.id).padStart(3, "0") + '</div>' +
        '<h1>' + thisCase.title + '</h1>' +
        (statusLabel ? '<div class="case-status-badge ' + statusCls + '">' + statusLabel + '</div>' : "") +
        (metaParts.length ? '<p class="case-meta-line">' + metaParts.join(" \u00a0•\u00a0 ") + '</p>' : "") +
    '</div></section>';
}

/* ---------------------------------------------------------
   TIMELINE
--------------------------------------------------------- */

function timelineBlock(){
    if(!thisCase.timeline || !thisCase.timeline.length) return "";
    var items = thisCase.timeline.map(function(item){
        var date = item.date || "";
        var title = item.title || "";
        var description = item.description || item.detail || "";
        return '<div class="case-tl-item"><div class="case-tl-dot"></div>' +
            (date ? '<div class="case-tl-date">' + date + '</div>' : "") +
            (title ? '<h3>' + title + '</h3>' : "") +
            (description ? '<p>' + description + '</p>' : "") +
        '</div>';
    }).join("");
    return block("Timeline", '<div class="case-timeline">' + items + '</div>');
}

/* ---------------------------------------------------------
   PEOPLE NAMED IN THIS CASE
--------------------------------------------------------- */

function figuresBlock(){
    if(!thisCase.figures || !thisCase.figures.length) return "";
    var linked = thisCase.figures
        .map(function(id){ return people.find(function(p){ return p.id === id; }); })
        .filter(Boolean);
    if(!linked.length) return "";

    var cards = linked.map(function(p){
        var name = p.name || "Unnamed";
        var role = p.role || p.title || "";
        var photo = p.photo || "";
        return '<div class="case-figure-card" onclick="window.location.href=\'person.html?id=' + p.id + '\'">' +
            (photo ? '<div class="case-figure-photo"><img src="' + photo + '" alt="' + name + '" onerror="this.parentElement.style.display=\'none\'"></div>' : "") +
            '<div><div class="case-figure-name">' + name + '</div>' + (role ? '<div class="case-figure-role">' + role + '</div>' : "") + '</div>' +
        '</div>';
    }).join("");

    return block("People Named In This Case", '<div class="case-figures-grid">' + cards + '</div>');
}

/* ---------------------------------------------------------
   SOURCES
--------------------------------------------------------- */

function sourcesBlock(){
    if(!thisCase.sources || !thisCase.sources.length) return "";
    var items = thisCase.sources.map(function(s, i){
        var name = s.name || s.title || "Untitled Source";
        var link = s.link || s.url || "#";
        return '<a class="case-source-item" href="' + link + '" target="_blank" rel="noopener">' +
            '<span>' + String(i + 1).padStart(2, "0") + '</span>' + name +
        '</a>';
    }).join("");
    return block("Sources", '<div class="case-sources-list">' + items + '</div>');
}

/* ---------------------------------------------------------
   HISAAB NOTE (closing editorial line)
--------------------------------------------------------- */

function hisaabNoteBlock(){
    if(!thisCase.hisaabNote) return "";
    return '<div class="case-block"><div class="hisaab-note"><p>' + thisCase.hisaabNote + '</p></div></div>';
}

/* ---------------------------------------------------------
   CTA
--------------------------------------------------------- */

function ctaBlock(){
    return '<div class="case-block">' +
        '<div class="case-cta">' +
            '<p>Have additional documentation or a correction for this case?</p>' +
            '<a href="submit.html" class="btn btn-primary">Submit An Update</a>' +
        '</div>' +
    '</div>';
}

/* ---------------------------------------------------------
   FULL RENDER — investigative-dossier order.
   Every block checks its own data, so a thin case entry and a
   fully-loaded one both render correctly with no gaps or errors.
--------------------------------------------------------- */

function render(){
    container.innerHTML =
        hero() +
        '<div class="case-body">' +

            textBlock("Overview", thisCase.overview) +
            autoBlock("Background", thisCase.background) +

            autoBlock("The Allegations", thisCase.allegations) +
            autoBlock("Official Position", thisCase.officialPosition) +

            timelineBlock() +

            autoBlock("Major Investigations", thisCase.majorInvestigations) +
            autoBlock("Evidence Referenced", thisCase.evidence) +

            statGrid("By The Numbers", thisCase.statistics) +

            autoBlock("Institutions Involved", thisCase.institutions) +
            autoBlock("Relevant Laws & Policies", thisCase.laws) +
            autoBlock("Related Major Cases", thisCase.majorCases) +

            autoBlock("Public Campaigns", thisCase.campaigns) +
            autoBlock("International Attention", thisCase.internationalAttention) +

            figuresBlock() +

            caseStatusBlock() +

            autoBlock("Major Questions", thisCase.majorQuestions) +
            autoBlock("Questions That Remain", thisCase.questions) +

            textBlock("Impact", thisCase.impact) +
            textBlock("Why It Matters", thisCase.whyItMatters) +
            textBlock("Legacy", thisCase.legacy) +

            sourcesBlock() +
            hisaabNoteBlock() +
            ctaBlock() +

        '</div>';
}

render();
document.title = thisCase.title + " — HISAAB";