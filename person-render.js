/* ===========================================================
   HISAAB — PERSON-RENDER.JS
   Renders a single person profile from ?id= against `people`.
   Self-contained — does NOT load main.js (homepage-only logic).
=========================================================== */

var STATUS_LABEL = {
    alleged: "Alleged",
    investigation: "Under Investigation",
    convicted: "Convicted",
    acquitted: "Acquitted",
    pending: "Pending"
};

var PROMISE_LABEL = {
    "completed": { icon: "&#10003;", label: "Completed" },
    "in-progress": { icon: "&#8230;", label: "In Progress" },
    "not-completed": { icon: "&#10007;", label: "Not Completed" }
};

var container = document.getElementById("person-container");
var params = new URLSearchParams(window.location.search);
var personId = Number(params.get("id"));
var person = people.find(function(p){ return p.id === personId; });

if(!person){
    container.innerHTML =
        '<div style="padding:180px 24px 120px;text-align:center;">' +
            '<h1 style="font-family:var(--display);font-size:32px;color:var(--text-primary);margin-bottom:14px;">Profile Not Found</h1>' +
            '<p style="color:var(--text-muted);margin-bottom:28px;">This person does not exist in the record.</p>' +
            '<a href="index.html" class="btn btn-outline">← Return To Archive</a>' +
        '</div>';
    throw new Error("Person not found");
}

function personStatusInfo(p){
    if(p.hisaabScore.ongoing > 0) return { cls:"status-investigation", label:"Under Investigation" };
    if(p.hisaabScore.convictions > 0) return { cls:"status-convicted", label:"Convicted" };
    if(p.status === "former") return { cls:"status-pending", label:"Former Office Holder" };
    return { cls:"status-alleged", label:"Alleged Misconduct" };
}

function caseStatusInfo(c){
    return { cls:"status-" + c.status, label: STATUS_LABEL[c.status] || c.status };
}

function hero(){
    var s = personStatusInfo(person);
    return '<section class="person-hero"><div class="person-hero-inner">' +
        '<a href="index.html" class="case-back">← Back To Archive</a><br>' +
        '<div class="person-photo-ring"><img src="' + person.photo + '" alt="' + person.name + '" onerror="this.style.display=\'none\'"></div>' +
        '<div class="person-ref">Figure #' + String(person.id).padStart(3,"0") + '</div>' +
        '<h1>' + person.name + '</h1>' +
        '<p class="person-role-line">' + person.role + ' &nbsp;•&nbsp; ' + person.institution + ' &nbsp;•&nbsp; ' + person.tenure + '</p>' +
        '<div class="case-status-badge ' + s.cls + '">' + s.label + '</div>' +
    '</div></section>';
}

function recordTracker(){
    if(!person.record || !person.record.length) return "";
    return '<div class="person-block"><p class="person-block-label">Documented Record</p>' +
        '<div class="record-track">' +
        person.record.map(function(r){
            return '<div class="record-track-item' + (r.highlight ? ' highlight' : '') + '">' +
                '<div class="record-track-year">' + r.year + '</div>' +
                '<div class="record-track-body"><p>' + r.text + '</p><span class="record-status ' + r.cls + '">' + r.tag + '</span></div>' +
            '</div>';
        }).join("") +
        '</div></div>';
}

function summary(){
    if(!person.summary) return "";
    return '<div class="person-block"><p class="person-block-label">Summary</p>' +
        '<p style="font-family:var(--display);font-size:19px;line-height:1.85;color:var(--text-primary);text-align:center;max-width:720px;margin:0 auto;">' + person.summary + '</p>' +
    '</div>';
}

function scorePanel(){
    var h = person.hisaabScore;
    return '<div class="person-block"><p class="person-block-label">Hisaab Score</p>' +
        '<div class="score-panel">' +
            '<div class="score-grid">' +
                '<div class="score-cell"><div class="n">' + h.officesHeld + '</div><div class="l">Offices Held</div></div>' +
                '<div class="score-cell"><div class="n">' + h.investigations + '</div><div class="l">Investigations</div></div>' +
                '<div class="score-cell"><div class="n">' + h.courtCases + '</div><div class="l">Court Cases</div></div>' +
                '<div class="score-cell"><div class="n">' + h.convictions + '</div><div class="l">Convictions</div></div>' +
                '<div class="score-cell"><div class="n">' + h.acquittals + '</div><div class="l">Acquittals</div></div>' +
                '<div class="score-cell"><div class="n">' + h.ongoing + '</div><div class="l">Ongoing</div></div>' +
            '</div>' +
            '<p class="score-summary-line">Not a verdict — a summary of the public record. ' + h.reportsmentioning + ' official report' + (h.reportsmentioning === 1 ? "" : "s") + ' mention' + (h.reportsmentioning === 1 ? "s" : "") + ' this profile.</p>' +
        '</div>' +
    '</div>';
}

function promises(){
    if(!person.promises || !person.promises.length) return "";
    return '<div class="person-block"><p class="person-block-label">Public Promises Tracker</p>' +
        '<div class="promise-list">' +
        person.promises.map(function(pr){
            var meta = PROMISE_LABEL[pr.status] || { icon:"?", label:pr.status };
            return '<div class="promise-row promise-' + pr.status + '">' +
                '<div class="promise-icon">' + meta.icon + '</div>' +
                '<div><div class="promise-text">' + pr.text + '</div><div class="promise-meta">' + pr.date + ' &nbsp;•&nbsp; ' + meta.label + '</div></div>' +
            '</div>';
        }).join("") +
        '</div></div>';
}

function linkedCases(){
    if(!person.cases || !person.cases.length) return "";
    var linked = person.cases.map(function(id){ return hisaabCases.find(function(c){ return c.id === id; }); }).filter(Boolean);
    if(!linked.length) return "";
    return '<div class="person-block"><p class="person-block-label">Cases Involving This Person</p>' +
        '<div class="person-cases-grid">' +
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

function sourcesBlock(){
    if(!person.sources || !person.sources.length) return "";
    return '<div class="person-block"><p class="person-block-label">Sources</p>' +
        '<div class="case-sources-list">' +
        person.sources.map(function(s, i){
            return '<a class="case-source-item" href="' + s.link + '" target="_blank" rel="noopener"><span>' + String(i+1).padStart(2,"0") + '</span>' + s.name + '</a>';
        }).join("") +
        '</div></div>';
}

function ctaBlock(){
    return '<div class="person-block">' +
        '<div class="person-cta">' +
            '<p>Have additional documentation, a correction, or an update on this profile?</p>' +
            '<a href="submit.html" class="btn btn-primary">Submit An Update</a>' +
        '</div>' +
    '</div>';
}

function render(){
    container.innerHTML =
        hero() +
        '<div class="person-body">' +
            summary() +
            recordTracker() +
            scorePanel() +
            promises() +
            linkedCases() +
            sourcesBlock() +
            ctaBlock() +
        '</div>';
}

render();
document.title = person.name + " — HISAAB";