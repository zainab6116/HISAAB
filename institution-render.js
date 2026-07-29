var STATUS_LABEL = {
    alleged: "Alleged",
    investigation: "Under Investigation",
    convicted: "Convicted",
    acquitted: "Acquitted",
    pending: "Pending"
};

var container = document.getElementById("institution-container");
var params = new URLSearchParams(window.location.search);
var institutionId = Number(params.get("id"));
var institution = institutions.find(function(i){ return i.id === institutionId; });

if(!institution){
    container.innerHTML =
        '<div style="padding:180px 24px 120px;text-align:center;">' +
            '<h1 style="font-family:var(--display);font-size:32px;color:var(--text-primary);margin-bottom:14px;">Institution Not Found</h1>' +
            '<p style="color:var(--text-muted);margin-bottom:28px;">This institution does not exist in the record.</p>' +
            '<a href="index.html" class="btn btn-outline">← Return To Archive</a>' +
        '</div>';
    throw new Error("Institution not found");
}
function humanizeKey(key){
    return key
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/[_-]+/g, " ")
        .replace(/^./, function(s){ return s.toUpperCase(); });
}

function block(label, innerHtml){
    if(!innerHtml) return "";
    return '<div class="institution-block">' +
        '<p class="institution-block-label">' + label + '</p>' +
        innerHtml +
    '</div>';
}

function textBlock(label, val){
    if(!val) return "";
    return block(label, '<p class="case-text">' + val + '</p>');
}

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

function autoBlock(label, val){
    if(!val) return "";
    if(Array.isArray(val)) return listBlock(label, val);
    if(typeof val === "string") return textBlock(label, val);
    return "";
}
function hero(){
    var metaParts = [
        institution.category || institution.type,
        institution.established ? "Est. " + institution.established : "",
        institution.headquarters,
        institution.jurisdiction
    ].filter(Boolean);

    return '<section class="institution-hero"><div class="institution-hero-inner">' +
        '<a href="index.html" class="case-back">← Back To Archive</a><br>' +
        (institution.logo
            ? '<div class="institution-icon-ring"><img src="' + institution.logo + '" alt="' + institution.name + ' logo" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;" onerror="this.parentElement.textContent=\'' + institution.name.charAt(0) + '\'"></div>'
            : '<div class="institution-icon-ring">' + institution.name.charAt(0) + '</div>') +
        '<div class="institution-ref">Institution #' + String(institution.id).padStart(3, "0") + '</div>' +
        '<h1>' + institution.name + (institution.shortName ? ' <span style="color:var(--gold-soft);">(' + institution.shortName + ')</span>' : "") + '</h1>' +
        (institution.status ? '<div class="case-status-badge status-pending" style="margin-bottom:14px;">' + institution.status + '</div>' : "") +
        (metaParts.length ? '<p class="institution-type-line">' + metaParts.join(" \u00a0•\u00a0 ") + '</p>' : "") +
    '</div></section>';
}

/* ---------------------------------------------------------
   TIMELINE — institutions use { year, event } instead of the
   case page's { date, title, description }
--------------------------------------------------------- */

function timelineBlock(){
    if(!institution.timeline || !institution.timeline.length) return "";
    var items = institution.timeline.map(function(item){
        var year = item.year || item.date || "";
        var event = item.event || item.description || item.title || "";
        return '<div class="case-tl-item"><div class="case-tl-dot"></div>' +
            (year ? '<div class="case-tl-date">' + year + '</div>' : "") +
            (event ? '<p>' + event + '</p>' : "") +
        '</div>';
    }).join("");
    return block("Timeline", '<div class="case-timeline">' + items + '</div>');
}

/* ---------------------------------------------------------
   RELATED PEOPLE / RELATED CASES — linked record cards
--------------------------------------------------------- */

function relatedPeopleBlock(){
    var ids = institution.relatedPeople;
    if(!ids || !ids.length) return "";
    var linked = ids.map(function(id){ return people.find(function(p){ return p.id === id; }); }).filter(Boolean);
    if(!linked.length) return "";

    var cards = linked.map(function(p){
        return '<div class="record-card" onclick="window.location.href=\'person.html?id=' + p.id + '\'">' +
            '<div class="record-photo"><img src="' + (p.photo || "") + '" alt="' + p.name + '" onerror="this.style.display=\'none\'"></div>' +
            '<div class="record-body">' +
                '<div class="record-ref">Figure #' + String(p.id).padStart(3, "0") + '</div>' +
                '<div class="record-name">' + p.name + '</div>' +
                '<div class="record-role">' + (p.role || "") + '</div>' +
            '</div>' +
        '</div>';
    }).join("");

    return block("Related People", '<div class="institution-cases-grid">' + cards + '</div>');
}

function relatedCasesBlock(){
    var ids = institution.relatedCases || institution.cases;
    if(!ids || !ids.length) return "";
    var linked = ids.map(function(id){ return hisaabCases.find(function(c){ return c.id === id; }); }).filter(Boolean);
    if(!linked.length) return "";

    var cards = linked.map(function(c){
        var statusCls = c.status ? "status-" + c.status : "status-pending";
        var statusLabel = STATUS_LABEL[c.status] || c.status || "";
        return '<div class="record-card" onclick="window.location.href=\'case.html?id=' + c.id + '\'">' +
            '<div class="record-photo"><img src="' + (c.image || "") + '" alt="' + c.title + '" onerror="this.style.display=\'none\'"></div>' +
            '<div class="record-body">' +
                '<div class="record-ref">Case #' + String(c.id).padStart(3, "0") + '</div>' +
                '<div class="record-name">' + c.title + '</div>' +
                '<div class="record-role">' + (c.category || "") + '</div>' +
                (statusLabel ? '<span class="record-status ' + statusCls + '">' + statusLabel + '</span>' : "") +
            '</div>' +
        '</div>';
    }).join("");

    return block("Related Cases", '<div class="institution-cases-grid">' + cards + '</div>');
}

/* ---------------------------------------------------------
   SOURCES
--------------------------------------------------------- */

function sourcesBlock(){
    if(!institution.sources || !institution.sources.length) return "";
    var items = institution.sources.map(function(s, i){
        var name = s.name || s.title || "Untitled Source";
        var link = s.link || s.url || "#";
        return '<a class="case-source-item" href="' + link + '" target="_blank" rel="noopener">' +
            '<span>' + String(i + 1).padStart(2, "0") + '</span>' + name +
        '</a>';
    }).join("");
    return block("Sources", '<div class="case-sources-list">' + items + '</div>');
}

/* ---------------------------------------------------------
   HISAAB NOTE
--------------------------------------------------------- */

function hisaabNoteBlock(){
    if(!institution.hisaabNote) return "";
    return '<div class="institution-block"><div class="hisaab-note"><p>' + institution.hisaabNote + '</p></div></div>';
}

/* ---------------------------------------------------------
   CTA
--------------------------------------------------------- */

function ctaBlock(){
    return '<div class="institution-block">' +
        '<div class="institution-cta">' +
            '<p>Have additional documentation, a correction, or an update on this institution?</p>' +
            '<a href="submit.html" class="btn btn-primary">Submit An Update</a>' +
        '</div>' +
    '</div>';
}
function render(){
    container.innerHTML =
        hero() +
        '<div class="institution-body">' +

            textBlock("Overview", institution.overview || institution.summary) +

            autoBlock("Mission", institution.mission) +
            autoBlock("Responsibilities", institution.responsibilities) +
            autoBlock("Powers", institution.powers) +

            timelineBlock() +

            autoBlock("Major Cases", institution.majorCases) +
            relatedCasesBlock() +
            relatedPeopleBlock() +

            autoBlock("Major Controversies", institution.majorControversies) +
            autoBlock("Shortcomings", institution.shortcomings) +
            autoBlock("Public Expectations", institution.publicExpectations) +
            autoBlock("Linked Institutions", institution.linkedInstitutions) +
            autoBlock("By The Numbers", institution.statistics) +
            autoBlock("Public Questions", institution.publicQuestions) +
            autoBlock("Reforms Suggested", institution.reformsSuggested) +

            sourcesBlock() +
            hisaabNoteBlock() +
            ctaBlock() +

        '</div>';
}

render();
document.title = institution.name + " — HISAAB";