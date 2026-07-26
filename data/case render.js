/* ===========================================================
   HISAAB — CASE-RENDER.JS
   Renders a single case file from ?id= against hisaabCases.
   Self-contained — does NOT load main.js (homepage-only logic).
=========================================================== */

var STATUS_LABEL = {
    alleged: "Alleged",
    investigation: "Under Investigation",
    convicted: "Convicted",
    acquitted: "Acquitted",
    pending: "Pending"
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

function hero(){
    return '<section class="case-hero"><div class="case-hero-inner">' +
        '<a href="index.html" class="case-back">← Back To Archive</a>' +
        '<div class="case-ref">Case #' + String(thisCase.id).padStart(3,"0") + '</div>' +
        '<h1>' + thisCase.title + '</h1>' +
        '<div class="case-status-badge status-' + thisCase.status + '">' + (STATUS_LABEL[thisCase.status] || thisCase.status) + '</div>' +
        '<p class="case-meta-line">' + thisCase.category + ' &nbsp;•&nbsp; ' + thisCase.institution + ' &nbsp;•&nbsp; ' + thisCase.dateRange + '</p>' +
    '</div></section>';
}

function overview(){
    return '<div class="case-block">' +
        '<p class="case-block-label">Overview</p>' +
        '<p class="case-overview">' + thisCase.overview + '</p>' +
    '</div>';
}

function timeline(){
    if(!thisCase.timeline || !thisCase.timeline.length) return "";
    return '<div class="case-block">' +
        '<p class="case-block-label">Timeline</p>' +
        '<div class="case-timeline">' +
        thisCase.timeline.map(function(item){
            return '<div class="case-tl-item"><div class="case-tl-dot"></div>' +
                '<div class="case-tl-date">' + item.date + '</div>' +
                '<h3>' + item.title + '</h3>' +
                '<p>' + item.description + '</p>' +
            '</div>';
        }).join("") +
        '</div></div>';
}

function linkedFigures(){
    if(!thisCase.figures || !thisCase.figures.length) return "";
    var linked = thisCase.figures.map(function(id){ return people.find(function(p){ return p.id === id; }); }).filter(Boolean);
    if(!linked.length) return "";
    return '<div class="case-block">' +
        '<p class="case-block-label">People Named In This Case</p>' +
        '<div class="case-figures-grid">' +
        linked.map(function(p){
            return '<div class="case-figure-card" onclick="window.location.href=\'person.html?id=' + p.id + '\'">' +
                '<div class="case-figure-photo"><img src="' + p.photo + '" alt="' + p.name + '" onerror="this.style.display=\'none\'"></div>' +
                '<div><div class="case-figure-name">' + p.name + '</div><div class="case-figure-role">' + p.role + '</div></div>' +
            '</div>';
        }).join("") +
        '</div></div>';
}

function sources(){
    if(!thisCase.sources || !thisCase.sources.length) return "";
    return '<div class="case-block">' +
        '<p class="case-block-label">Sources</p>' +
        '<div class="case-sources-list">' +
        thisCase.sources.map(function(s, i){
            return '<a class="case-source-item" href="' + s.link + '" target="_blank" rel="noopener"><span>' + String(i+1).padStart(2,"0") + '</span>' + s.name + '</a>';
        }).join("") +
        '</div></div>';
}

function ctaBlock(){
    return '<div class="case-block">' +
        '<div class="case-cta">' +
            '<p>Have additional documentation or a correction for this case?</p>' +
            '<a href="submit.html" class="btn btn-primary">Submit An Update</a>' +
        '</div>' +
    '</div>';
}

function render(){
    container.innerHTML =
        hero() +
        '<div class="case-body">' +
            overview() +
            timeline() +
            linkedFigures() +
            sources() +
            ctaBlock() +
        '</div>';
}

render();
document.title = thisCase.title + " — HISAAB";