/* ===========================================================
   HISAAB — INSTITUTION-RENDER.JS
   Renders a single institution profile from ?id= against `institutions`.
   Self-contained — does NOT load main.js (homepage-only logic).
=========================================================== */

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

function caseStatusInfo(c){
    return { cls:"status-" + c.status, label: STATUS_LABEL[c.status] || c.status };
}

function hero(){
    return '<section class="institution-hero"><div class="institution-hero-inner">' +
        '<a href="index.html" class="case-back">← Back To Archive</a><br>' +
        '<div class="institution-icon-ring">' + institution.name.charAt(0) + '</div>' +
        '<div class="institution-ref">Institution #' + String(institution.id).padStart(3,"0") + '</div>' +
        '<h1>' + institution.name + '</h1>' +
        '<p class="institution-type-line">' + institution.type + '</p>' +
    '</div></section>';
}

function summary(){
    return '<div class="institution-block"><p class="institution-block-label">Overview</p>' +
        '<p class="institution-summary">' + institution.summary + '</p>' +
    '</div>';
}

function linkedCases(){
    if(!institution.cases || !institution.cases.length) return "";
    var linked = institution.cases.map(function(id){ return hisaabCases.find(function(c){ return c.id === id; }); }).filter(Boolean);
    if(!linked.length) return "";
    return '<div class="institution-block"><p class="institution-block-label">Cases Involving This Institution</p>' +
        '<div class="institution-cases-grid">' +
        linked.map(function(c){
            var s = caseStatusInfo(c);
            return '<div class="record-card" onclick="window.location.href=\'case.html?id=' + c.id + '\'">' +
                '<div class="record-photo"><img src="' + c.image + '" alt="' + c.title + '" onerror="this.style.display=\'none\'"></div>' +
                '<div class="record-body">' +
                    '<div class="record-ref">Case #' + String(c.id).padStart(3,"0") + '</div>' +
                    '<div class="record-name">' + c.title + '</div>' +
                    '<div class="record-role">' + c.category + ' • ' + c.dateRange + '</div>' +
                    '<span class="record-status ' + s.cls + '">' + s.label + '</span>' +
                '</div>' +
            '</div>';
        }).join("") +
        '</div></div>';
}

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
            summary() +
            linkedCases() +
            ctaBlock() +
        '</div>';
}

render();
document.title = institution.name + " — HISAAB";