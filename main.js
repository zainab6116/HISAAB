/* ===========================================================
   HISAAB — MAIN.JS
   Nav scroll-shrink, search dropdown, stats, entity/record tabs,
   recently-added strip, theme + mobile nav, scroll reveals.
=========================================================== */

var STATUS_LABEL = {
    alleged: "Alleged",
    investigation: "Under Investigation",
    convicted: "Convicted",
    acquitted: "Acquitted",
    pending: "Pending"
};

var currentTab = "people";

/* ---------------- helpers ---------------- */
function personStatusInfo(p){
    if(p.hisaabScore.ongoing > 0) return { cls:"status-investigation", label:"Under Investigation" };
    if(p.hisaabScore.convictions > 0) return { cls:"status-convicted", label:"Convicted" };
    if(p.status === "former") return { cls:"status-pending", label:"Former Office Holder" };
    return { cls:"status-alleged", label:"Alleged Misconduct" };
}
function caseStatusInfo(c){
    return { cls:"status-" + c.status, label: STATUS_LABEL[c.status] || c.status };
}

/* ---------------- nav scroll-shrink ---------------- */
function initNavScroll(){
    var nav = document.getElementById("nav");
    if(!nav) return;
    window.addEventListener("scroll", function(){
        nav.classList.toggle("scrolled", window.scrollY > 40);
    });
}

/* ---------------- search dropdown ---------------- */
function initSearchDrop(){
    var toggle = document.getElementById("searchToggle");
    var drop = document.getElementById("searchDrop");
    var input = document.getElementById("hero-search-input");
    if(!toggle || !drop) return;

    toggle.addEventListener("click", function(){
        drop.classList.toggle("open");
        if(drop.classList.contains("open")) setTimeout(function(){ input.focus(); }, 200);
    });

    input.addEventListener("keydown", function(e){
        if(e.key === "Enter"){
            runSearch(this.value);
            drop.classList.remove("open");
        }
        if(e.key === "Escape"){ drop.classList.remove("open"); }
    });
}

/* ---------------- stats ---------------- */
function loadStats(){
    var totalSources = hisaabCases.reduce(function(sum,c){ return sum + (c.sources ? c.sources.length : 0); }, 0);
    var pending = hisaabCases.filter(function(c){ return c.status === "investigation" || c.status === "pending"; }).length;

    ["stat-people","stat-people-2"].forEach(function(id){ setText(id, people.length); });
    ["stat-cases","stat-cases-2"].forEach(function(id){ setText(id, hisaabCases.length); });
    ["stat-institutions","stat-institutions-2"].forEach(function(id){ setText(id, institutions.length); });
    setText("stat-pending", pending);
    setText("stat-sources", totalSources);

    setText("meta-people", people.length + " profiles");
    setText("meta-cases", hisaabCases.length + " cases");
    setText("meta-institutions", institutions.length + " profiled");
}
function setText(id, val){
    var el = document.getElementById(id);
    if(el) el.textContent = val;
}

/* ---------------- record cards ---------------- */
function makePersonCard(p){
    var s = personStatusInfo(p);
    return '<div class="record-card" onclick="window.location.href=\'person.html?id=' + p.id + '\'">' +
        '<div class="record-photo"><img src="' + p.photo + '" alt="' + p.name + '" onerror="this.style.display=\'none\'"></div>' +
        '<div class="record-body">' +
            '<div class="record-ref">Figure #' + String(p.id).padStart(3,"0") + '</div>' +
            '<div class="record-name">' + p.name + '</div>' +
            '<div class="record-role">' + p.role + ' • ' + p.institution + '</div>' +
            '<span class="record-status ' + s.cls + '">' + s.label + '</span>' +
        '</div>' +
    '</div>';
}
function makeCaseCard(c){
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
}
function makeInstitutionCard(i){
    var roleLine = i.category || i.type || "";
    var linkedCases = i.relatedCases || i.cases || [];
    return '<div class="record-card" onclick="window.location.href=\'institution.html?id=' + i.id + '\'">' +
        '<div class="record-photo"><img src="' + (i.image || "") + '" alt="' + i.name + '" onerror="this.style.display=\'none\'"></div>' +
        '<div class="record-body">' +
            '<div class="record-ref">Institution #' + String(i.id).padStart(3,"0") + '</div>' +
            '<div class="record-name">' + i.name + '</div>' +
            '<div class="record-role">' + roleLine + '</div>' +
            '<span class="record-status status-pending">' + linkedCases.length + ' linked case' + (linkedCases.length === 1 ? "" : "s") + '</span>' +
        '</div>' +
    '</div>';
}

/* ---------------- tabs ---------------- */
function setTab(tab){
    currentTab = tab;
    document.querySelectorAll(".record-tab").forEach(function(btn){ btn.classList.toggle("active", btn.dataset.tab === tab); });
    renderTab();
    document.getElementById("record-browser").scrollIntoView({ behavior:"smooth", block:"start" });
}
function renderTab(){
    var grid = document.getElementById("record-grid");
    var label = document.getElementById("record-label");
    if(currentTab === "people"){
        label.textContent = "Showing All People (" + people.length + ")";
        grid.innerHTML = people.map(makePersonCard).join("");
    } else if(currentTab === "cases"){
        label.textContent = "Showing All Cases (" + hisaabCases.length + ")";
        grid.innerHTML = hisaabCases.map(makeCaseCard).join("");
    } else {
        label.textContent = "Showing All Institutions (" + institutions.length + ")";
        grid.innerHTML = institutions.map(makeInstitutionCard).join("");
    }
}
function initTabs(){
    document.querySelectorAll(".record-tab").forEach(function(btn){
        btn.addEventListener("click", function(){ setTab(btn.dataset.tab); });
    });
}

/* ---------------- recently added strip ---------------- */
function loadRecentStrip(){
    var items = [];
    people.forEach(function(p){
        items.push({ tag:p.institution, title:p.name, sub:p.role, ref:"person.html?id=" + p.id, sortKey:p.id, label:"PERSON" });
    });
    hisaabCases.forEach(function(c){
        items.push({ tag:c.category, title:c.title, sub:c.dateRange, ref:"case.html?id=" + c.id, sortKey:c.id + 100, label:"CASE" });
    });
    institutions.forEach(function(i){
        var blurb = i.overview || i.summary || "";
        items.push({ tag:(i.category || i.type || ""), title:i.name, sub:blurb.slice(0,60) + "…", ref:"institution.html?id=" + i.id, sortKey:i.id + 200, label:"INSTITUTION" });
    });
    items.sort(function(a,b){ return b.sortKey - a.sortKey; });

    document.getElementById("recent-strip").innerHTML = items.slice(0,8).map(function(item){
        return '<div class="tl-card" onclick="window.location.href=\'' + item.ref + '\'">' +
            '<span class="tl-date">' + item.label + '</span>' +
            '<h3>' + item.title + '</h3>' +
            '<p>' + item.sub + '</p>' +
            '<span class="tl-tag">' + item.tag + '</span>' +
        '</div>';
    }).join("");
}

/* ---------------- search ---------------- */
function runSearch(q){
    q = (q || "").trim().toLowerCase();
    if(q === "") return;

    var pMatch = people.filter(function(p){ return p.name.toLowerCase().includes(q) || p.role.toLowerCase().includes(q) || p.institution.toLowerCase().includes(q); });
    var cMatch = hisaabCases.filter(function(c){ return c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q) || c.institution.toLowerCase().includes(q) || (STATUS_LABEL[c.status]||"").toLowerCase().includes(q); });
    var iMatch = institutions.filter(function(i){ return i.name.toLowerCase().includes(q) || (i.category || i.type || "").toLowerCase().includes(q); });

    var best = "people", grid, label;
    if(cMatch.length >= pMatch.length && cMatch.length >= iMatch.length) best = "cases";
    if(iMatch.length >= pMatch.length && iMatch.length >= cMatch.length && iMatch.length > 0) best = "institutions";

    currentTab = best;
    document.querySelectorAll(".record-tab").forEach(function(b){ b.classList.toggle("active", b.dataset.tab === best); });

    if(best === "people"){ grid = pMatch.map(makePersonCard).join(""); label = pMatch.length; }
    else if(best === "cases"){ grid = cMatch.map(makeCaseCard).join(""); label = cMatch.length; }
    else { grid = iMatch.map(makeInstitutionCard).join(""); label = iMatch.length; }

    document.getElementById("record-grid").innerHTML = grid || '<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-muted);"><h3 style="color:var(--text-primary);margin-bottom:8px;">No matches found</h3><p>Try another keyword.</p></div>';
    document.getElementById("record-label").textContent = label + ' RESULT' + (label !== 1 ? "S" : "") + ' FOR "' + q.toUpperCase() + '"';
    document.getElementById("record-browser").scrollIntoView({ behavior:"smooth", block:"start" });
}

/* ---------------- theme ---------------- */
function initTheme(){
    var toggleBtn = document.getElementById("themeToggle");
    if(!toggleBtn) return;
    var saved = localStorage.getItem("hisaab-theme");
    if(saved === "light"){ document.body.classList.add("light-mode"); toggleBtn.innerHTML = "&#9728;&#65039;"; }
    toggleBtn.addEventListener("click", function(){
        document.body.classList.toggle("light-mode");
        var isLight = document.body.classList.contains("light-mode");
        toggleBtn.innerHTML = isLight ? "&#9728;&#65039;" : "&#127769;";
        localStorage.setItem("hisaab-theme", isLight ? "light" : "dark");
    });
}

/* ---------------- mobile nav ---------------- */
function initNavToggle(){
    var btn = document.getElementById("navToggle");
    var nav = document.getElementById("site-nav");
    if(!btn || !nav) return;
    btn.addEventListener("click", function(){
        var open = nav.style.display === "flex";
        nav.style.display = open ? "none" : "flex";
        nav.style.cssText += "position:absolute;top:100%;left:0;right:0;flex-direction:column;gap:0;background:rgba(10,10,10,.97);border-bottom:1px solid var(--line);padding:6px 0;list-style:none;";
        nav.querySelectorAll("a").forEach(function(a){ a.style.padding = "14px 22px"; a.style.display = "block"; });
    });
}

/* ---------------- reveal ---------------- */
function setupReveals(){
    var elements = document.querySelectorAll(".reveal:not(.in)");
    var observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){ entry.target.classList.add("in"); observer.unobserve(entry.target); }
        });
    }, { threshold:0.15 });
    elements.forEach(function(el){ observer.observe(el); });
}

/* ---------------- init ---------------- */
window.addEventListener("DOMContentLoaded", function(){
    initNavScroll();
    initSearchDrop();
    initTheme();
    initNavToggle();
    loadStats();
    initTabs();
    renderTab();
    loadRecentStrip();
    setupReveals();
});