import { appendHubspotContext, submitHubspotForm } from "./forms";
import { trackFormSubmissionSuccess } from "@/utils/posthog";

/* ============================================================
   CX is Broken · site settings. Fill these in before launch.
   ============================================================ */
const hubspotFormId = "17447c3c-7a6e-420a-94e4-fd4be10e7683";
const defaultSiteConfig = {
  /* Report, benchmark and book-a-call details post to the CX is Broken HubSpot form. */
  reportEndpoint: '',
  /* The PDF that downloads once the report form is submitted */
  reportPdfUrl: "/cx-is-broken/downloads/cx-is-broken-why-operational-excellence-is-the-future-of-customer-experience-serve-first-report.pdf",
  /* Kept for older config. Submissions use the HubSpot form above. */
  benchmarkEndpoint: '',
  /* Privacy notice link used by the forms */
  privacyUrl: '#privacy',
  /* Videos (mp4 or webm). Leave a url empty to keep the "Video coming soon" frame */
  videos: {
    vendors: { url: "https://www.youtube.com/shorts/qUvEgW7RjDY", poster: '', title: "Is CX too focused on measurement?" },              /* 9:16 clip in "Overpromise. Underdeliver." */
    operationalExcellence: { url: "https://www.youtube.com/watch?v=c9-M_9Ok45I", poster: '', title: "CX IS BROKEN by Serve First" } /* 16:9 scroll expand clip in "Operational Excellence: the new CX" */
  }
};

function runSite() {
  var app = document.getElementById("app");
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fixed = false;

  /* XP: the scroll expand video lives outside The fix window; everywhere else it stays inside the section grid */
  function placeXpand(xp) {
    var x = document.getElementById('xpand'); if (!x) return;
    var sec = document.querySelector('section.opx'), wrap = sec && sec.querySelector('.wrap'); if (!wrap) return;
    if (xp && x.parentNode === wrap) sec.appendChild(x);
    else if (!xp && x.parentNode === sec) wrap.appendChild(x);
  }
  /* FINAL: the benchmark sits straight after the video section (the fix), ahead of Serve First and the CTA.
     Other concepts keep the original order. The contents drawer follows the same order and renumbers. */
  function placeBench(fin) {
    var bench = document.querySelector('main > section.benchmark'), fix = document.querySelector('main > section.opx'),
      cta = document.querySelector('main > section.cta-block'); if (!bench || !fix || !cta) return;
    if (fin && bench.previousElementSibling !== fix) fix.after(bench);
    else if (!fin && bench.previousElementSibling !== cta) cta.after(bench);
    var lis = Array.prototype.slice.call(document.querySelectorAll('#ls-list > li'));
    var lb = lis.filter(function (li) { return /Benchmark/.test(li.textContent); })[0], ls = lis.filter(function (li) { return /Serve First/.test(li.textContent); })[0];
    if (lb && ls) {
      if (fin) ls.before(lb); else ls.after(lb);
      document.querySelectorAll('#ls-list > li .line-sidebar__index').forEach(function (n, i) { n.textContent = String(i + 1).padStart(2, '0'); });
    }
  }
  /* concept switch */
  function pressed(id, v) { var b = document.getElementById(id); if (b) b.setAttribute('aria-pressed', v); }
  function setConcept(c) {
    var brand = c === 'brand', was = app.getAttribute('data-view') === 'brand';
    var xp = c === 'xp', fin = c === 'final';
    app.setAttribute('data-skin', xp ? 'xp' : fin ? 'final' : '');
    pressed('btn-final', fin);
    pressed('btn-xp', xp);
    var picked = c;
    app.setAttribute('data-view', brand ? 'brand' : 'site');
    var bb = document.getElementById('btn-brand'); if (bb) bb.setAttribute('aria-pressed', brand);
    if (brand !== was) window.scrollTo({ top: 0, behavior: 'instant' });
    if (brand || xp || fin) c = 'd';  /* FINAL starts as a copy of D; its own tweaks hang off data-skin="final" */  /* XP is D underneath with a retro OS skin */
    placeXpand(xp);
    placeBench(fin);
    app.setAttribute('data-concept', c);
    pressed('btn-c', c === 'c');
    pressed('btn-d', c === 'd' && !brand && !xp && !fin);
    buildTape(c);
    if (typeof clearSign === 'function') requestAnimationFrame(clearSign);
    if (typeof warp !== 'undefined') warp.toggle(false); /* warp text removed from the hero title by request */
    document.getElementById('gate-sticker').textContent = c === 'c' ? 'Out of order' : 'Still broken';
    jumbles.forEach(function (j) { j.sorted = null; });
    tick();
  }
  var start = 'd';
  if (['#c', '#d', '#xp', '#final'].indexOf(location.hash) > -1) start = location.hash.slice(1);
  /* Branding D is no longer in the nav, so a saved brand view falls back to D */
  if (location.hash === '#brand') start = 'brand';
  /* C, D, XP and Branding D are archived: their code stays, but the site always opens on FINAL (no hash or saved choice can reach them) */
  var ARCHIVED = true;
  if (ARCHIVED) start = 'final';

  /* tape */
  var tapeItems = ['Joined-up journeys', 'Omnichannel', 'Single customer view', 'Experience management', 'Real-time insight', 'Voice of the Customer', 'Journey mapping', 'Personalisation'];
  var tapeItemsC = ['Not responding', 'Update failed', 'Insight not delivered', 'Retry'];
  /* ribbon: React Bits Text Loop (shape wave, curviness 0, ribbonWidth 106, letterSpacing 1) */
  var TL = { unit: '', items: [], gap: '', len: 0, off: 0, last: 0, paused: false, speed: 90, icons: [], cy: 53 };
  function tlLayout() {
    var svg = document.getElementById('tloop'); if (!svg || !TL.unit) return;
    var W = svg.clientWidth || window.innerWidth, RW = 106, H = RW, CY = H / 2;
    var m = document.getElementById('tloop-m'); m.textContent = TL.unit;
    var uw = 0; try { uw = m.getComputedTextLength(); } catch (e) { }
    if (!uw) return;
    var reps = Math.max(1, Math.ceil((W + 640) / uw)), L = reps * uw;
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.style.height = H + 'px';
    var path = document.getElementById('tloop-path');
    path.setAttribute('d', 'M 0 ' + CY + ' L ' + (2 * L) + ' ' + CY); path.setAttribute('stroke-width', RW);
    var txt = new Array(2 * reps + 1).join(TL.unit);
    var tp = document.getElementById("tloop-h"); if (!tp) return;
    tp.textContent = txt; tp.setAttribute("textLength", 2 * L); tp.setAttribute("startOffset", 0);
    /* separator icons sit in the blank gap after each line */
    var centres = [], at = 0, gl = TL.gap.length;
    TL.items.forEach(function (it) {
      at += it.length;
      try { var a = m.getSubStringLength(0, at), b = m.getSubStringLength(0, at + gl); centres.push((a + b) / 2); } catch (e) { }
      at += gl;
    });
    var g = document.getElementById('tloop-icons'); g.innerHTML = ''; TL.icons = [];
    var sz = parseFloat(getComputedStyle(m).fontSize) || 46;
    for (var copy = 0; copy < 2; copy++) for (var r = 0; r < reps; r++) centres.forEach(function (c) {
      var u = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      u.setAttribute('href', '#tl-ico'); u.setAttribute('width', sz); u.setAttribute('height', sz);
      u.setAttribute('x', -sz / 2); u.setAttribute('y', -sz / 2);
      u.setAttribute("transform", "translate(" + (copy * L + r * uw + c).toFixed(1) + " " + CY + ")");
      g.appendChild(u); TL.icons.push(u);
    });
    TL.cy = CY; TL.len = L; TL.off = TL.off % L; tlApply();
  }
  function tlApply() {
    if (!TL.len) return;
    var move = document.getElementById("tloop-move"); if (!move) return;
    move.setAttribute("transform", "translate(" + (-320 + TL.off - TL.len).toFixed(1) + " 0)");
  }
  function tlTick(t) {
    var dt = TL.last ? Math.min(.1, (t - TL.last) / 1000) : 0; TL.last = t;
    if (!TL.paused && TL.len) { TL.off = ((TL.off - TL.speed * dt) % TL.len + TL.len) % TL.len;  /* runs right to left */ tlApply(); }
    requestAnimationFrame(tlTick);
  }
  (function () {
    var box = document.querySelector('.tloop'); if (!box) return;
    box.addEventListener('pointerenter', function () { TL.paused = true; });
    box.addEventListener('pointerleave', function () { TL.paused = false; });
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) requestAnimationFrame(tlTick);
    window.addEventListener('resize', tlLayout);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(tlLayout);
    if (document.fonts && document.fonts.addEventListener) document.fonts.addEventListener('loadingdone', tlLayout);  /* re-measure when a late font arrives */
  })();
  var tapePoints = ['CX is broken. Here\'s why', 'Stop measuring. Start fixing'];
  function buildTape(c) {
    var items = c === 'c' ? tapeItemsC : tapePoints;
    TL.gap = new Array(13).join('\u00A0');  /* 12 spaces: icon centred with room either side */
    TL.items = items.map(function (s) { return c === 'c' ? s : s.toUpperCase(); });  /* C ticker stays in sentence case */
    TL.unit = TL.items.map(function (s) { return s + TL.gap; }).join('');
    requestAnimationFrame(tlLayout);
  }


  /* ransom letters, seeded so the cut is the same every load */
  document.querySelectorAll('.ransom').forEach(function (el) {
    var seed = parseInt(el.dataset.seed || '1', 10);
    function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
    var text = el.textContent; el.setAttribute('aria-label', text); el.textContent = '';
    var lastC = 0;
    for (var i = 0; i < text.length; i++) {
      var ch = text[i], sp = document.createElement('span');
      if (ch === ' ') { sp.className = 'rsp'; el.appendChild(sp); continue; }
      var c = 1 + Math.floor(rnd() * 5); if (c === lastC) c = (c % 5) + 1; lastC = c;
      sp.className = 'rl f' + (1 + Math.floor(rnd() * 4)) + ' c' + c;
      sp.setAttribute('aria-hidden', 'true');
      sp.style.setProperty('--r', ((rnd() * 14) - 7).toFixed(1) + 'deg');
      sp.style.setProperty('--y', ((rnd() * .16) - .08).toFixed(2) + 'em');
      sp.textContent = ch; el.appendChild(sp);
    }
  });

  /* concept C: headline words start out of order and sort on scroll */
  var jumbles = [];
  document.querySelectorAll('.chapter h2').forEach(function (h, hi) {
    var isFault = !!h.closest('[data-fault]');
    h.classList.add('orig');
    var box = document.createElement('div'); box.className = 'h2c'; box.setAttribute('aria-hidden', 'true');
    var words = [];
    h.childNodes.forEach(function (n) {
      if (n.nodeType === 3) { n.textContent.split(/\s+/).forEach(function (t) { if (t) { var w = document.createElement('span'); w.textContent = t; words.push(w); } }); }
      else { var w = document.createElement('span'); w.appendChild(n.cloneNode(true)); words.push(w); }
    });
    var n = words.length, seed = 17 + hi * 13, perm, same = true;
    function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
    if (!isFault) { perm = words.map(function (_, i) { return i; }); same = false; }
    while (same) {
      perm = words.map(function (_, i) { return i; });
      for (var i = n - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)); var t = perm[i]; perm[i] = perm[j]; perm[j] = t; }
      same = perm.every(function (v, i) { return v === i; }) && n > 1;
    }
    words.forEach(function (w, i) { w.className = 'w'; w.dataset.i = i; w.dataset.j = perm[i]; box.appendChild(w); });
    h.parentNode.insertBefore(box, h.nextSibling);
    jumbles.push({ box: box, words: words, sec: h.closest('section'), sorted: null, fault: isFault });
  });
  function arrange(j, sorted) {
    if (j.sorted === sorted) return;
    var first = j.words.map(function (w) { return w.getBoundingClientRect(); });
    j.words.forEach(function (w) {
      w.style.order = sorted ? w.dataset.i : w.dataset.j;
      w.classList.toggle('mis', !sorted && w.dataset.i !== w.dataset.j);
    });
    var animate = j.sorted !== null && !reduce && app.getAttribute('data-concept') === 'c';
    j.sorted = sorted;
    if (!animate) return;
    j.words.forEach(function (w, k) {
      var last = w.getBoundingClientRect();
      var dx = first[k].left - last.left, dy = first[k].top - last.top;
      if (!dx && !dy) return;
      w.style.transition = 'none';
      w.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          w.style.transition = 'transform .6s cubic-bezier(.2,.9,.2,1.15)';
          w.style.transform = '';
        });
      });
    });
  }

  /* concept D: React Bits ScrollReveal on chapter headings (scrubbed by scroll)
     defaults: baseOpacity 0.1, blurStrength 4px, baseRotation 3deg */
  function scrollReveal(j, active) {
    if (!active || reduce) {
      if (j.revealed === false) return;
      j.box.style.transform = '';
      j.words.forEach(function (w) { w.style.opacity = ''; w.style.filter = ''; });
      j.revealed = false; return;
    }
    j.revealed = true;
    var vh = window.innerHeight, r = j.box.getBoundingClientRect();
    var rot = clamp((vh - r.top) / (vh * 0.7));
    j.box.style.transform = 'rotate(' + (3 * (1 - rot)).toFixed(3) + 'deg)';
    var t = clamp((vh * 0.8 - r.top) / Math.max(vh * 0.45, 1));
    var n = j.words.length, stag = 0.35, span = 1 + (n - 1) * stag / n * 2;
    j.words.forEach(function (w) {
      var i = parseInt(w.style.order || w.dataset.i, 10);
      var wi = clamp(t * span - i * (stag / n * 2));
      w.style.opacity = (0.1 + 0.9 * wi).toFixed(3);
      w.style.filter = wi >= 1 ? '' : 'blur(' + (4 * (1 - wi)).toFixed(2) + 'px)';
    });
  }
  var seqOrder = [3, 7, 1, 5, 8, 2, 6, 4];
  var seqEl = document.getElementById('seq');
  /* status cells */
  var cells = document.getElementById('cells');
  for (var i = 0; i < 10; i++) cells.appendChild(document.createElement('i'));

  /* stars */
  var starPath = '<svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="12,1.5 15,8.6 22.6,9.2 16.8,14.2 18.6,21.8 12,17.8 5.4,21.8 7.2,14.2 1.4,9.2 9,8.6" fill="SPEC" stroke="currentColor" stroke-width="1.6" stroke-linejoin="miter"/></svg>';
  var starsEl = document.getElementById('stars');
  for (var s = 0; s < 5; s++) {
    var d = document.createElement('button'); d.type = 'button'; d.className = 'star'; d.dataset.v = s + 1; d.setAttribute('aria-label', 'Rate ' + (s + 1) + ' out of 5'); d.setAttribute('aria-pressed', 'false');
    d.innerHTML = starPath.replace('SPEC', 'none') + '<div class="fill">' + starPath.replace('SPEC', 'currentColor') + '</div>';
    starsEl.appendChild(d);
  }

  /* decrypt effect (stand in for React Bits DecryptedText) */
  var glyphs = '█▓▒#%&01X/';
  function decrypt(el, target, done) {
    if (reduce) { el.textContent = target; done && done(); return; }
    var frame = 0, total = 16;
    (function step() {
      var out = '';
      for (var i = 0; i < target.length; i++) {
        var ch = target[i];
        out += (ch === ' ' || i < (frame / total) * target.length) ? ch : glyphs[Math.floor(Math.random() * glyphs.length)];
      }
      el.textContent = out;
      if (++frame <= total) setTimeout(step, 45); else { el.textContent = target; done && done(); }
    })();
  }
  function openRedact(el) {
    if (el.classList.contains('open')) return;
    el.classList.add('open');
    el.removeAttribute('role'); el.removeAttribute('aria-label');
    el.dataset.busy = '1';
    decrypt(el, el.dataset.value, function () { delete el.dataset.busy; });
  }
  document.querySelectorAll('.redact').forEach(function (el) {
    el.addEventListener('mouseenter', function () { openRedact(el); });
    el.addEventListener('click', function () { openRedact(el); });
    el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openRedact(el); } });
  });

  var hero = document.getElementById('hero');  /* pointer follow on the BROKEN block removed by request */

  /* scroll driven repair */
  var sections = Array.prototype.slice.call(document.querySelectorAll('[data-p]'));
  var pctEl = document.getElementById('status-pct'), labelEl = document.getElementById('status-label'), statusEl = document.getElementById('status');
  function clamp(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function setState(sec, broken) {
    var st = sec.querySelector('[data-state]'); if (!st) return;
    st.textContent = broken ? st.dataset.broken : st.dataset.fixed; st.classList.toggle('ok', !broken);
  }
  function q(sec, name) { return sec.querySelector('[data-el="' + name + '"]'); }

  /* count up (stand in for React Bits CountUp) */
  function countUp(el) {
    if (el.dataset.counted) return; el.dataset.counted = '1';
    var to = parseFloat(el.dataset.to), dec = parseInt(el.dataset.dec || '0', 10), pre = el.dataset.prefix || '', suf = el.dataset.suffix || '';
    if (reduce) { el.textContent = pre + to.toFixed(dec) + suf; return; }
    el.dataset.busy = '1';
    var t0 = null, dur = 1100;
    function step(ts) {
      if (!t0) t0 = ts;
      var k = Math.min(1, (ts - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = pre + (to * e).toFixed(dec) + suf;
      if (k < 1) requestAnimationFrame(step); else delete el.dataset.busy;
    }
    requestAnimationFrame(step);
  }

  function tick() {
    var vh = window.innerHeight;
    sections.forEach(function (sec) {
      var r = sec.getBoundingClientRect();
      var raw = clamp((vh * 0.95 - r.top) / (vh * 0.6));
      var p = sec.classList.contains('settled') ? 1 : raw;
      sec.style.setProperty('--p', p.toFixed(3));
      if (p > 0.55) sec.querySelectorAll('.redact').forEach(openRedact);
      var stk = sec.querySelector('.sticker'); if (stk && sec.dataset.widget !== 'stars') stk.classList.toggle('peeled', p > 0.9);
      var w = sec.dataset.widget, ok;
      if (raw > 0.35) sec.querySelectorAll('[data-to]').forEach(countUp);
      if (w === 'buzz') {
        var bz = sec.querySelectorAll('.buzz s'), nb = bz.length;
        var bp = clamp((vh * 0.75 - sec.querySelector('.buzz').getBoundingClientRect().top) / (vh * 0.35));
        bz.forEach(function (el, i) { el.style.setProperty('--s', clamp(bp * nb - i).toFixed(3)); });
      }
      if (w === 'progress') {
        /* the transformation bar drains from 99% to 0 across the whole section as you scroll */
        var bar = q(sec, 'bar'), br = bar.getBoundingClientRect(), sr = sec.getBoundingClientRect();
        var drain = clamp((vh * 0.8 - br.top) / (vh * 0.5));  /* empties between 80% and 30% of the viewport, so it reads Stopped while still in view */
        var left = Math.round(99 * (1 - drain));
        ok = left <= 0;
        q(sec, 'pct').textContent = ok ? 'Stopped' : left + '%';
        bar.style.setProperty('--w', (99 * (1 - drain)).toFixed(2) + '%');
        q(sec, 'line').textContent = ok ? 'No more trends. Fix the operation.' : 'Installing: the next big trend';
        setState(sec, !ok);
      }
      if (w === 'bars' || w === 'meters') {
        ok = p > 0.6;
        sec.querySelectorAll('.brow').forEach(function (r) {
          r.style.setProperty('--pos', (w === 'meters' || ok) ? 'var(--i)' : 'var(--j)');
          r.style.setProperty('--g', clamp(p * 1.4).toFixed(3));
        });
        setState(sec, w === 'bars' ? !ok : p < 0.9);
      }
      if (w === 'wins') { setState(sec, p < 0.95); }
      if (w === 'trends') {
        var li = sec.querySelectorAll('.trends li'), nl = li.length;
        li.forEach(function (el, i) { el.style.setProperty('--s', clamp(p * 1.3 * nl - i).toFixed(3)); });
        setState(sec, p < 0.77);
      }
      if (w === 'ticket') {
        ok = p > 0.9;
        q(sec, 'fixstep').classList.toggle('done', ok);
        q(sec, 'age').textContent = ok ? 'Resolved same day' : 'Open 12.7 days';
        q(sec, 'note').textContent = ok ? 'Routed to the frontline team who could fix it' : 'More customers affected while it waits';
        setState(sec, !ok);
      }
      if (w === 'chat') {
        /* once the chat is in view, the manager "types" for 10 seconds before the reply lands */
        if (p > 0.85 && !sec._chatTimer) {
          sec._chatTimer = setTimeout(function () {
            sec._chatDone = true;
            q(sec, 'typing').hidden = true; q(sec, 'reply').hidden = false; setState(sec, false);
          }, reduce ? 0 : 10000);
        }
        ok = !!sec._chatDone;
        q(sec, 'typing').hidden = ok;
        q(sec, 'reply').hidden = !ok;
        setState(sec, !ok);
      }
      if (w === 'stars') {
        return;  /* rating is driven by the viewer, not the scroll */
        var rating = 2.5 + 2.5 * p;
        sec.querySelectorAll('.star').forEach(function (st, idx) {
          var f = clamp(rating - idx);
          st.querySelector('.fill').style.setProperty('--w', (f * 100) + '%');
          st.classList.toggle('glitch', p < 1 && f > 0 && f < 1);
        });
        document.getElementById('rating').textContent = rating.toFixed(1);
        ok = p >= 0.98;
        document.getElementById('rating-note').textContent = ok ? 'Root cause fixed in the operation' : 'Measured again · cause unknown';
        setState(sec, !ok);
      }
    });
    var max = document.documentElement.scrollHeight - vh;
    var pct = max > 0 ? Math.round(clamp(window.scrollY / max) * 100) : 0;
    if (!fixed) pct = Math.min(pct, 99);
    else pct = 100;
    pctEl.textContent = pct + '%';
    var on = Math.round(pct / 10);
    cells.querySelectorAll('i').forEach(function (c, idx) { c.classList.toggle('on', idx < on); });
    var c = app.getAttribute('data-concept');
    var labels = { a: ['Repairing CX', 'CX repaired'], b: ['Incident CX2026 · resolving', 'Incident resolved'], c: ['Out of order · engineer called', 'Back in service'], d: ['Out of order · fixing', 'All systems normal'] };
    labelEl.textContent = labels[c][fixed ? 1 : 0];
    var done = 0;
    jumbles.forEach(function (j) {
      var p = parseFloat(j.sec.style.getPropertyValue('--p')) || 0;
      arrange(j, c === 'd' ? true : p > 0.6);  /* D: words stay in order, ScrollReveal only */
      if (j.fault && p > 0.6) done++;
      scrollReveal(j, c === 'd');
    });
    var shown = [1, 2, 3, 4, 5, 6, 7, 8].slice(0, done).concat(seqOrder.filter(function (v) { return v > done; }));
    seqEl.innerHTML = shown.map(function (v, i) { return '<b class="' + (i < done ? 'ok' : '') + '">' + v + '</b>'; }).join('');
    statusEl.classList.toggle('done', fixed);
  }
  var queued = false;
  function onScroll() { if (queued) return; queued = true; requestAnimationFrame(function () { queued = false; tick(); }); }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  function submitToHubspot(fields) {
    var formData = new FormData();
    formData.set("hubspot-form-id", hubspotFormId);
    formData.set("utm_source", window.location.origin + window.location.pathname + " | CX is Broken");
    formData.set("utm_medium", fields.utmMedium);
    ["firstname", "lastname", "company", "email", "notes"].forEach(function (name) {
      if (fields[name]) formData.set(name, fields[name]);
    });
    appendHubspotContext(formData);
    return submitHubspotForm(formData);
  }

  /* gate */
  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var err = document.getElementById('err');
    var firstname = document.getElementById('f-firstname').value.trim();
    var lastname = document.getElementById('f-lastname').value.trim();
    var email = document.getElementById('f-email').value.trim();
    var company = document.getElementById('f-company').value.trim();
    var role = document.getElementById('f-role').value;
    if (!firstname || !lastname || !company) { err.textContent = 'Add your first name, last name and company to unlock the report.'; return; }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { err.textContent = 'That email looks incomplete. Check it and try again.'; return; }
    err.textContent = '';
    var button = e.target.querySelector('button[type="submit"]');
    if (button) button.disabled = true;
    submitToHubspot({
      utmMedium: "Get the report",
      firstname: firstname,
      lastname: lastname,
      company: company,
      email: email,
      notes: role
    }).then(function (submission) {
      if (!submission.success) {
        err.textContent = submission.message;
        if (button) button.disabled = false;
        return;
      }
      trackFormSubmissionSuccess({
        formName: "cx is broken report",
        email: email,
      });
      var C = window.CXB_CONFIG || {};
      if (C.reportPdfUrl) {
        var dl = document.createElement('a'); dl.href = C.reportPdfUrl; dl.download = ''; document.body.appendChild(dl); dl.click(); dl.remove();
      }
      fixed = true;
      document.getElementById('gate').classList.add('fixed');
      document.getElementById('gate-sticker').classList.add('peeled');
      decrypt(document.getElementById('lock-word'), 'FIXABLE');
      document.getElementById('form').hidden = true;
      document.getElementById('done').hidden = false;
      tick();
    });
  });

  /* concept D: Warp Text on the hero title (port of React Bits WarpText, plain WebGL2) */
  var warp = (function () {
    var h1 = document.querySelector('#hero h1');
    var PAD = 56, cv = null, gl, prog, tex, raf = 0, on = false, U = {};
    var t0 = performance.now(), ptr = { x: .5, y: .5, tx: .5, ty: .5, a: 0, at: 0 };
    var VS = '#version 300 es\nin vec2 position;\nout vec2 vUv;\nvoid main(){ vUv = position*0.5+0.5; gl_Position = vec4(position,0.0,1.0); }';
    var FS = ['#version 300 es', 'precision highp float;',
      'uniform sampler2D uTex; uniform vec2 uRes; uniform vec2 uPointer; uniform float uActive; uniform float uTime;',
      'uniform float uWarpStrength; uniform float uWarpScale; uniform float uSpeed; uniform float uInfluence; uniform float uPStrength; uniform float uRefraction; uniform float uRipple; uniform float uMotion;',
      'in vec2 vUv; out vec4 fragColor;',
      'float hash(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }',
      'float noise(vec2 p){ vec2 i=floor(p); vec2 f=fract(p); vec2 u=f*f*(3.0-2.0*f); float a=hash(i), b=hash(i+vec2(1,0)), c=hash(i+vec2(0,1)), d=hash(i+vec2(1,1)); return mix(mix(a,b,u.x),mix(c,d,u.x),u.y); }',
      'float fbm(vec2 p){ float v=0.0, a=0.5; for(int i=0;i<4;i++){ v+=a*noise(p); p*=2.02; a*=0.5; } return v; }',
      'vec4 samp(vec2 uv){ if(uv.x<0.0||uv.x>1.0||uv.y<0.0||uv.y>1.0) return vec4(0.0); return texture(uTex,uv); }',
      'void main(){',
      ' vec2 uv=vUv; float aspect=uRes.x/max(uRes.y,1.0); float time=uTime*uSpeed; float scale=max(uWarpScale,0.001);',
      ' vec2 drift=vec2(time*0.055,-time*0.045);',
      ' float n1=fbm(uv*scale*3.1+drift); float n2=fbm((uv+19.17)*scale*3.4-drift.yx);',
      ' vec2 ambient=(vec2(n1,n2)-0.5)*uWarpStrength*0.045*uMotion;',
      ' vec2 pd=uv-uPointer; vec2 ad=vec2(pd.x*aspect,pd.y); float dist=length(ad); float radius=max(uInfluence,0.001);',
      ' float t=clamp(dist/radius,0.0,1.0); float lens=smoothstep(radius,0.0,dist)*uActive; float bulge=t*(1.0-t)*(1.0-t)*6.75*uActive;',
      ' vec2 dir=dist>0.0001?vec2(ad.x/aspect,ad.y)/dist:vec2(0.0);',
      ' float rw=sin(dist*28.0-time*4.2)*0.5+0.5; float rr=(rw-0.5)*uRipple;',
      ' vec2 pw=-dir*bulge*uPStrength*0.045; pw+=dir*rr*bulge*uPStrength*0.016;',
      ' vec2 disp=uv+ambient+pw; vec2 sd=ambient+pw; float sl=length(sd); sd=sl>0.00001?sd/sl:vec2(0.7071);',
      ' vec2 split=sd*uRefraction*0.16*(0.35+lens*1.65);',
      ' vec4 base=samp(disp); vec4 sr=samp(disp+split); vec4 sb=samp(disp-split);',
      ' vec3 col=vec3(sr.r,base.g,sb.b)+lens*base.a*0.055; float a=max(max(sr.a,base.a),sb.a);',
      ' fragColor=vec4(col,a);',
      '}'].join('\n');

    function sh(type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(s); return s; }
    function init() {
      cv = document.createElement('canvas'); cv.className = 'warp-canvas'; cv.setAttribute('aria-hidden', 'true');
      gl = cv.getContext('webgl2', { alpha: true, premultipliedAlpha: false, antialias: true });
      if (!gl) { cv = null; return false; }
      try {
        prog = gl.createProgram();
        gl.attachShader(prog, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS));
        gl.linkProgram(prog); gl.useProgram(prog);
      } catch (e) { cv = null; return false; }
      var buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      var loc = gl.getAttribLocation(prog, 'position'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      ['uTex', 'uRes', 'uPointer', 'uActive', 'uTime', 'uWarpStrength', 'uWarpScale', 'uSpeed', 'uInfluence', 'uPStrength', 'uRefraction', 'uRipple', 'uMotion'].forEach(function (n) { U[n] = gl.getUniformLocation(prog, n); });
      /* React Bits defaults */
      gl.uniform1f(U.uWarpStrength, .08); gl.uniform1f(U.uWarpScale, 1.7); gl.uniform1f(U.uSpeed, .55);
      gl.uniform1f(U.uInfluence, .42); gl.uniform1f(U.uPStrength, .38); gl.uniform1f(U.uRefraction, .018);
      gl.uniform1f(U.uRipple, 1); gl.uniform1f(U.uMotion, reduce ? 0 : 1); gl.uniform1i(U.uTex, 0);
      tex = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, tex);
      [gl.TEXTURE_MIN_FILTER, gl.TEXTURE_MAG_FILTER].forEach(function (p) { gl.texParameteri(gl.TEXTURE_2D, p, gl.LINEAR); });
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      cv.addEventListener('pointermove', function (e) {
        if (e.pointerType === 'touch') return;
        var r = cv.getBoundingClientRect();
        ptr.tx = (e.clientX - r.left) / r.width; ptr.ty = 1 - (e.clientY - r.top) / r.height; ptr.at = 1;
      });
      cv.addEventListener('pointerleave', function () { ptr.at = 0; });
      return true;
    }
    function font(cs) { return cs.fontStyle + ' ' + cs.fontWeight + ' ' + cs.fontSize + ' ' + cs.fontFamily; }
    function raster() {
      if (!on) return;
      var W = h1.offsetWidth + PAD * 2, H = h1.offsetHeight + PAD * 2, dpr = Math.min(window.devicePixelRatio || 1, 2);
      var c2 = document.createElement('canvas'); c2.width = Math.round(W * dpr); c2.height = Math.round(H * dpr);
      var x = c2.getContext('2d'); x.scale(dpr, dpr); x.textBaseline = 'middle';
      /* CX IS */
      var cx = h1.querySelector('.cxis .ransom'), cs = getComputedStyle(cx);
      x.font = font(cs); x.fillStyle = cs.color; if ('letterSpacing' in x) x.letterSpacing = cs.letterSpacing === 'normal' ? '0px' : cs.letterSpacing;
      var holder = h1.querySelector('.cxis');
      x.fillText('CX IS', holder.offsetLeft + PAD, holder.offsetTop + PAD + holder.offsetHeight / 2);
      /* BROKEN bar, tilted like the DOM version */
      var b = h1.querySelector('.bar'), bs = getComputedStyle(b);
      var bx = b.offsetLeft + PAD, by = b.offsetTop + PAD, bw = b.offsetWidth, bh = b.offsetHeight;
      x.save(); x.translate(bx, by + bh / 2); x.rotate(3 * Math.PI / 180);
      x.fillStyle = bs.backgroundColor; x.fillRect(0, -bh / 2, bw, bh);
      x.fillStyle = bs.color; x.font = font(bs);
      x.fillText('BROKEN', parseFloat(bs.paddingLeft), (parseFloat(bs.paddingTop) - parseFloat(bs.paddingBottom)) / 2);
      x.restore();
      cv.width = c2.width; cv.height = c2.height;
      gl.viewport(0, 0, cv.width, cv.height);
      gl.uniform2f(U.uRes, cv.width, cv.height);
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, c2);
    }
    function loop(now) {
      raf = requestAnimationFrame(loop);
      var r = h1.getBoundingClientRect();
      if (r.bottom < -PAD || r.top > window.innerHeight) return;
      var el = (now - t0) * 0.001;
      var ix = .5 + Math.sin(el * .33) * .12, iy = .5 + Math.cos(el * .27) * .1;
      var tx = ptr.at ? ptr.tx : ix, ty = ptr.at ? ptr.ty : iy, damp = ptr.at ? .12 : .035;
      ptr.x += (tx - ptr.x) * damp; ptr.y += (ty - ptr.y) * damp;
      ptr.a += ((ptr.at ? 1 : .18) - ptr.a) * .06;
      gl.uniform2f(U.uPointer, ptr.x, ptr.y);
      gl.uniform1f(U.uActive, reduce ? ptr.a * .35 : ptr.a);
      gl.uniform1f(U.uTime, reduce ? 0 : el);
      gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
    function toggle(want) {
      if (want === on) { if (on) raster(); return; }
      if (want) {
        if (!cv && !init()) return;
        on = true; h1.appendChild(cv); h1.classList.add('warping');
        raster();
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(raster);
        raf = requestAnimationFrame(loop);
      } else {
        on = false; if (raf) cancelAnimationFrame(raf); raf = 0;
        h1.classList.remove('warping'); if (cv && cv.parentNode) cv.parentNode.removeChild(cv);
      }
    }
    var rt = 0;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(raster, 120); });
    return { toggle: toggle };
  })();


  /* contents drawer with React Bits Line Sidebar behaviour (proximity radius 100, smooth falloff, 100ms smoothing) */
  var menu = (function () {
    var btn = document.getElementById('menu-btn'), drawer = document.getElementById('drawer'), scrim = document.getElementById('scrim');
    var list = document.getElementById('ls-list');
    var labels = ['Intro', 'Promises', 'Problems', 'Workload', 'Platforms', 'Trends', 'Vendors', 'Action', 'Frontline', 'Diagnosis', 'The fix', 'Serve First', 'Benchmark', 'Get the report'];
    var targets = Array.prototype.slice.call(document.querySelectorAll('main > section.chapter:not(.cta-block), #gate'));
    var items = [], tgt = [], cur = [], active = -1, raf = null, last = 0, open = false, hovering = false;
    function isFinal() { return app.getAttribute('data-skin') === 'final'; }
    labels.forEach(function (label, i) {
      var li = document.createElement('li');
      li.className = 'line-sidebar__item'; li.tabIndex = 0; li.style.setProperty('--k', i);
      li.innerHTML = '<span class="line-sidebar__marker" aria-hidden="true"></span><span class="line-sidebar__label"><span class="line-sidebar__index">' + String(i + 1).padStart(2, '0') + '</span><span class="line-sidebar__text">' + label + '</span></span>';
      function go() {
        var t = targets[i]; if (!t) return;
        setOpen(false);
        var y = t.getBoundingClientRect().top + window.scrollY - 56;
        window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
      }
      li.addEventListener('click', go);
      li.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
      list.appendChild(li); items.push(li); tgt.push(0); cur.push(0);
    });
    function smooth(p) { return p * p * (3 - 2 * p); }
    function frame(now) {
      var dt = Math.min((now - last) / 1000, .05); last = now;
      var fin = isFinal(), k = 1 - Math.exp(-dt / (fin ? .2 : .1)), moving = false;  /* FINAL eases in and out more slowly */
      items.forEach(function (el, i) {
        var target = Math.max(tgt[i], active === i && !(fin && hovering) ? 1 : 0);  /* FINAL: the current section steps back while you hover another */
        var next = cur[i] + (target - cur[i]) * k;
        var settled = Math.abs(target - next) < .0015;
        cur[i] = settled ? target : next;
        el.style.setProperty('--effect', cur[i].toFixed(4));
        if (!settled) moving = true;
      });
      raf = moving ? requestAnimationFrame(frame) : null;
    }
    function loop() { if (raf) cancelAnimationFrame(raf); last = performance.now(); raf = requestAnimationFrame(frame); }
    list.addEventListener('pointermove', function (e) {
      var top = list.getBoundingClientRect().top, y = e.clientY - top;
      if (isFinal()) {
        /* FINAL: only the item under the cursor lights up, nothing around it */
        var gap = parseFloat(getComputedStyle(list).rowGap) || 0, hit = -1;
        items.forEach(function (el, i) { if (Math.abs(y - (el.offsetTop + el.offsetHeight / 2)) <= (el.offsetHeight + gap) / 2) hit = i; });
        hovering = true;
        items.forEach(function (el, i) { tgt[i] = i === hit ? 1 : 0; });
      } else items.forEach(function (el, i) { tgt[i] = smooth(Math.max(0, 1 - Math.abs(y - (el.offsetTop + el.offsetHeight / 2)) / 100)); });
      loop();
    });
    list.addEventListener('pointerleave', function () { hovering = false; tgt = tgt.map(function () { return 0; }); loop(); });
    function setOpen(v) {
      open = v;
      app.classList.toggle('menu-open', v);
      btn.setAttribute('aria-expanded', v); btn.setAttribute('aria-label', v ? 'Close contents' : 'Open contents');
      drawer.inert = !v;
      if (v) setTimeout(function () { (items[Math.max(active, 0)] || items[0]).focus({ preventScroll: true }); }, 350);
    }
    btn.addEventListener('click', function () { setOpen(!open); });
    scrim.addEventListener('click', function () { setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && open) { setOpen(false); btn.focus(); } });
    function track() {
      var vh = window.innerHeight, idx = -1;
      var best = -Infinity;  /* the passed section nearest the reading line, so it works whatever order the sections are in */
      targets.forEach(function (t, i) { var tp = t.getBoundingClientRect().top; if (tp < vh * 0.4 && tp > best) { best = tp; idx = i; } });
      if (idx !== active) {
        active = idx;
        items.forEach(function (el, i) { if (i === idx) el.setAttribute('aria-current', 'true'); else el.removeAttribute('aria-current'); });
        loop();
      }
    }
    return { track: track };
  })();
  window.addEventListener('scroll', function () { menu.track(); }, { passive: true });
  menu.track();



  /* "How does your CX stack up" benchmark tool, built to the Wildfire developer brief */
  (function () {
    var root = document.getElementById('bench'); if (!root) return;

    /* ---- config ---- */
    var SHOW_RESULTS = true;                /* area scores use the brief's worked example until real survey counts arrive */
    var benchConfig = window.CXB_CONFIG || {};
    var privacyUrl = benchConfig.privacyUrl || '';
    var LEAD_CAPTURE = true; /* email step posts to the CX is Broken HubSpot form */
    var PRIVACY_URL = privacyUrl || '#privacy';
    var STORE_KEY = 'cxb-progress', STORE_DAYS = 30;

    var RATINGS = ['Excellent', 'Good', 'Average', 'Poor', 'Very poor', "Don't know", "We don't currently use a CX platform"];
    var SCORE = { 'Excellent': 100, 'Good': 75, 'Average': 50, 'Poor': 25, 'Very poor': 10 };
    var NO_PLATFORM = "We don't currently use a CX platform", DONT_KNOW = "Don't know";

    /* Survey benchmark counts per area (Excellent, Good, Average, Poor, Very poor).
       PLACEHOLDER: every area uses the brief's worked example until the agency supplies the real counts. */
    var EXAMPLE = [26, 95, 96, 17, 11];
    var AREAS = [
      {
        id: 'insight', name: 'Insight into action', ask: 'turning customer insight into immediate action?', phrase: 'turning customer insight into immediate action', counts: EXAMPLE,
        title: 'Shorten the route from insight to action',
        todo: 'Trace one recurring issue from feedback through to the action taken, remove an avoidable handoff and agree a response deadline with the team involved, then review whether the change reduced customer impact.',
        sf: 'Serve First turns customer, operational and market signals into tasks and workflows so teams can act on what needs attention.'
      },
      {
        id: 'ownership', name: 'Clear ownership', ask: 'automatically assigning customer issues to the right person?', phrase: 'automatically assigning customer issues to the right person', counts: EXAMPLE,
        title: 'Give every issue a clear owner',
        todo: 'Pick one issue type, name who owns it at each stage and set a simple rule for how new issues are assigned, then check a month later how many still arrived without an owner.',
        sf: 'Serve First routes issues to exactly the right people, with progress tracked through to completion.'
      },
      {
        id: 'frontline', name: 'Frontline capability', ask: 'enabling frontline employees to resolve issues without escalation?', phrase: 'enabling frontline employees to resolve issues without escalation', counts: EXAMPLE,
        title: 'Let the frontline fix more on the spot',
        todo: 'List the three issues frontline staff escalate most often, agree which they can resolve themselves and what they need to do it, then track how many get fixed without escalation.',
        sf: 'Serve First puts insight and tasks in front of the people closest to customers so they can act while it still counts.'
      },
      {
        id: 'connected', name: 'Connected operations', ask: 'connecting customer insight across every department?', phrase: 'connecting customer insight across every department', counts: EXAMPLE,
        title: 'Connect insight across departments',
        todo: 'Choose one customer problem that crosses teams, share the same view of it with every department involved and agree who acts on which part.',
        sf: 'Serve First connects customer, operational and market signals in one place so every team works from the same picture.'
      },
      {
        id: 'resolution', name: 'Resolution visibility', ask: 'tracking every customer issue through to resolution?', phrase: 'tracking every customer issue through to resolution', counts: EXAMPLE,
        title: 'Track every issue to a verified close',
        todo: 'Take a sample of recently closed issues, check how many were actually resolved for the customer, reopen the ones that were not and add a closure check to your process.',
        sf: 'Serve First tracks tasks through to completion so you can see what was fixed, not just what was logged.'
      },
      {
        id: 'prevention', name: 'Prevention', ask: 'preventing customer issues before they happen?', phrase: 'preventing customer issues before they happen', counts: EXAMPLE,
        title: 'Stop the same problems coming back',
        todo: 'Find the three issues that recur most often, trace each one to its root cause in the operation and fix one of those causes before adding anything new to measure.',
        sf: 'Serve First surfaces the themes that matter so teams can fix root causes and stop the same problems returning.'
      }
    ];
    AREAS.forEach(function (a) {
      var w = [100, 75, 50, 25, 10], tot = 0, n = 0;
      a.counts.forEach(function (c, i) { tot += c * w[i]; n += c; });
      a.bench = Math.round(tot / n);
    });

    var Q1 = ['Turning customer insight into action', 'Empowering frontline employees to resolve customer issues', 'Getting other departments to take ownership of customer experience', 'Limited budget or resources', 'Too many disconnected tools or platforms', 'Proving the ROI of customer experience', 'Ineffective customer experience platforms', 'Breaking down organisational silos', 'None of the above'];
    var Q1_AREA = { 'Turning customer insight into action': 'insight', 'Empowering frontline employees to resolve customer issues': 'frontline', 'Getting other departments to take ownership of customer experience': 'connected', 'Too many disconnected tools or platforms': 'connected', 'Breaking down organisational silos': 'connected' };
    var Q2 = ['1 day or less', '2 to 3 days', '4 to 6 days', '1 to 2 weeks', '2 to 3 weeks', '3 to 4 weeks', '1 to 2 months', '2 to 3 months', '3 to 6 months', 'More than 6 months', 'It is rarely or never fully resolved', "Don't know / not applicable"];
    var Q3 = ['Responding to customer issues and complaints', 'Managing customer experience platforms and technology', 'Analysing customer insight and reporting', 'Supporting frontline teams', 'Collecting customer feedback', 'Driving operational improvements across the business', 'Demonstrating the value and ROI of customer experience', 'Other', "Don't know / not applicable"];
    var Q10 = ['Turn insight into action faster', 'Give every issue a clear owner', 'Help frontline teams resolve more issues', 'Connect teams and departments', 'Make sure issues are resolved', 'Prevent recurring customer problems', 'None of the above'];
    var Q10_AREA = { 'Turn insight into action faster': 'insight', 'Give every issue a clear owner': 'ownership', 'Help frontline teams resolve more issues': 'frontline', 'Connect teams and departments': 'connected', 'Make sure issues are resolved': 'resolution', 'Prevent recurring customer problems': 'prevention' };
    var RARELY = 'It is rarely or never fully resolved';

    var QS = [
      { type: 'multi', title: 'Which CX challenges does your organisation currently face?', hint: 'Select all that apply.', opts: Q1, none: 'None of the above' },
      { type: 'single', title: 'When your CX platform identifies an issue that requires action from frontline staff, how long does it typically take before the issue is resolved and no longer affects the customer experience?', opts: Q2 },
      { type: 'single', title: 'Thinking about your customer experience team, where does most of its time go today?', opts: Q3 }
    ];
    AREAS.forEach(function (a) { QS.push({ type: 'single', rating: a.id, intro: 'Thinking about your current customer experience platform or platforms, how would you rate them at…', title: '…' + a.ask, opts: RATINGS }); });
    QS.push({ type: 'multi', max: 3, title: 'What would you most like to improve over the next six months?', hint: 'Choose up to three.', opts: Q10, none: 'None of the above' });

    /* ---- state ---- */
    var state = { step: 'landing', answers: {} };
    function sanitiseAnswers(answers) {
      var clean = {};
      for (var i = 0; i < 10; i++) {
        var value = answers && answers[i];
        if (Array.isArray(value)) clean[i] = value.filter(function (item) { return typeof item === 'string'; });
        else if (typeof value === 'string') clean[i] = value;
      }
      return clean;
    }
    function progressStep(step) { return typeof step === 'number' && step >= 0 && step <= 9; }
    function readSave() {
      try { return JSON.parse(localStorage.getItem(STORE_KEY) || 'null'); } catch (e) { return null; }
    }
    function save() {
      if (!progressStep(state.step)) return;
      try {
        var existing = readSave();
        var fresh = !existing || typeof existing.t !== 'number' || Date.now() - existing.t >= STORE_DAYS * 864e5;
        localStorage.setItem(STORE_KEY, JSON.stringify({
          t: fresh ? Date.now() : existing.t,
          step: state.step,
          answers: sanitiseAnswers(state.answers)
        }));
      } catch (e) { }
    }
    function load() {
      try {
        var d = readSave();
        if (!d || typeof d.t !== 'number' || !d.answers || Date.now() - d.t >= STORE_DAYS * 864e5 || !progressStep(d.step)) {
          if (d) localStorage.removeItem(STORE_KEY);
          return null;
        }
        d.answers = sanitiseAnswers(d.answers);
        return d;
      } catch (e) { }
      return null;
    }
    function clearSave() { try { localStorage.removeItem(STORE_KEY); } catch (e) { } }
    var saved = load();

    function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
    function answered(i) { var a = state.answers[i]; return Array.isArray(a) ? a.length > 0 : !!a; }

    /* ---- rendering ---- */
    function render(focus) {
      var s = state.step, html = '';
      if (s === 'landing') html = landing();
      else if (typeof s === 'number') html = question(s);
      else if (s === 'lead') html = lead();
      else if (s === 'loading') html = loading();
      else if (s === 'results') html = results();
      else if (s === 'thanks') html = thanks();
      root.innerHTML = html;
      root.setAttribute('data-step', typeof s === 'number' ? 'question' : s);
      rollify(root);
      if (focus) { var f = root.querySelector('[data-focus]') || root.querySelector('h3, h4'); if (f) { f.setAttribute('tabindex', '-1'); f.focus({ preventScroll: true }); } }
      save();
    }
    function landing() {
      var resume = saved && typeof saved.step === 'number' ? '<button type="button" class="bq-link" data-act="resume">Continue where you left off · Question ' + (saved.step + 1) + ' of 10</button>' : '';
      return '<div class="cxb-landing bq-screen">' +
        '<span class="mono cxb-eyebrow">The CX is broken benchmark</span>' +
        '<h3 class="cxb-title cxb-wide" data-focus>How does your CX stack&nbsp;up</h3>' +
        '<p class="cxb-body cxb-wide">Compare how your organisation turns customer insight into action with findings from 250 UK CX professionals. Find your strengths, see where progress stalls and get three practical steps to improve the way your business operates.</p>' +
        '<p class="mono cxb-meta">10 questions · About 3 minutes · Free personalised results</p>' +
        '<div class="cxb-row"><button type="button" class="btn" data-act="start">See how you compare</button>' + resume + '</div>' +
        '<p class="mono small cxb-foot">Based on Serve First\'s CX is Broken research.</p></div>';
    }
    function question(i) {
      var q = QS[i], a = state.answers[i], multi = q.type === 'multi';
      var sel = multi ? (a || []) : a;
      var opts = q.opts.map(function (o) {
        var on = multi ? sel.indexOf(o) > -1 : sel === o;
        return '<button type="button" class="opt" data-opt="' + esc(o) + '" aria-pressed="' + on + '">' + esc(o) + '</button>';
      }).join('');
      var counter = q.max ? '<p class="mono cxb-count" aria-live="polite">' + (sel ? sel.filter(function (x) { return x !== q.none; }).length : 0) + ' of ' + q.max + ' selected</p>' : '';
      return '<div class="cxb-q bq-screen">' +
        '<div class="cxb-top mono"><span>Question ' + (i + 1) + ' of 10</span><button type="button" class="bq-link" data-act="restart">Start again</button></div>' +
        '<div class="bq-progress" aria-hidden="true"><b style="--w:' + ((i + 1) / 10 * 100) + '%"></b></div>' +
        (q.intro ? '<p class="cxb-intro">' + esc(q.intro) + '</p>' : '') +
        '<h4 class="q" data-focus>' + esc(q.title) + '</h4>' +
        (q.hint ? '<p class="mono cxb-hint">' + esc(q.hint) + '</p>' : '') +
        '<div class="opts' + (q.opts.length > 7 ? ' two' : '') + '" role="group" aria-label="Answers">' + opts + '</div>' + counter +
        '<div class="cxb-nav"><button type="button" class="bq-link" data-act="back">Back</button>' +
        '<button type="button" class="btn" data-act="next"' + (answered(i) ? '' : ' disabled') + '>' + (i === 9 ? 'See my results' : 'Next') + '</button></div></div>';
    }
    function lead() {
      return '<form class="cxb-lead bq-screen" id="cxb-lead" novalidate data-hs-do-not-collect="true">' +
        '<h3 class="cxb-title" data-focus>Your CX comparison is ready</h3>' +
        '<p class="cxb-body">See how your answers compare with 250 UK CX professionals and get your three next steps. If you\'d like Serve First to follow up about your results, leave your work email below.</p>' +
        '<p class="cxb-note">We save these answers to see how organisations compare. They are not attached to your name or email.</p>' +
        '<div class="field"><label for="cxb-email">Work email</label><input id="cxb-email" type="email" autocomplete="email"></div>' +
        '<label class="check" for="cxb-consent"><input id="cxb-consent" type="checkbox"> <span>I\'d like Serve First to contact me about my results.</span></label>' +
        '<p class="err" id="cxb-err" role="alert"></p>' +
        '<div class="cxb-row"><button type="submit" class="btn">Continue</button><button type="button" class="bq-link" data-act="skip">No thanks, show my results</button></div>' +
        '<p class="mono small"><a class="cxb-a" href="' + PRIVACY_URL + '">Privacy notice</a></p></form>';
    }
    function thanks() {
      return '<div class="cxb-thanks bq-screen">' +
        '<span class="mono cxb-eyebrow">Submitted</span>' +
        '<h3 class="cxb-title" data-focus>Thanks, your answers are in</h3>' +
        '<p class="cxb-body">We\'re putting your comparison with 250 UK CX professionals together. Your personalised results and three next steps will appear here.</p>' +
        '<div class="cxb-foot-row"><button type="button" class="bq-link" data-act="review">Review my answers</button>' +
        '<button type="button" class="bq-link" data-act="restart">Start again</button></div></div>';
    }
    function loading() {
      return '<div class="cxb-loading bq-screen"><div class="cxb-spin" aria-hidden="true"><i></i><i></i><i></i></div><h3 class="cxb-title" data-focus role="status">Creating your personalised comparison…</h3></div>';
    }

    /* ---- scoring ---- */
    function areaResult(a, i) {
      var r = state.answers[3 + i], sc = SCORE[r];
      return { area: a, rating: r, score: sc === undefined ? null : sc, diff: sc === undefined ? null : sc - a.bench };
    }
    function priority(r) {
      if (r === 'Very poor') return 0; if (r === 'Poor') return 1; if (r === 'Average') return 2;
      if (r === 'Good' || r === 'Excellent') return 4; return 3;
    }
    function results() {
      var res = AREAS.map(areaResult);
      var q1 = state.answers[0] || [], q2 = state.answers[1], q3 = state.answers[2], q10 = state.answers[9] || [];
      var q10Areas = q10.map(function (x) { return Q10_AREA[x]; }), q1Areas = q1.map(function (x) { return Q1_AREA[x]; });
      var rated = res.filter(function (r) { return r.score !== null; });
      var poor = rated.filter(function (r) { return r.rating === 'Poor' || r.rating === 'Very poor'; });

      /* summary */
      var headHtml, body;
      if (!rated.length) {
        headHtml = 'Start with a clearer picture of how issues get resolved';
        body = 'You weren\'t able to rate any of the six areas, so there\'s nothing to compare yet. The first step is finding out how an issue moves from feedback to a fix in your business.';
      } else if (rated.every(function (r) { return r.score >= 75; })) {
        headHtml = 'Build on the strengths you already have';
        body = 'Every area you rated came out as good or excellent. The actions below focus on keeping that standard and making sure issues are fixed, not just seen.';
      } else if (!poor.length) {
        headHtml = 'You have a foundation to build on';
        body = 'None of the areas you rated came out as poor. The biggest gains now sit in the areas rated average, where insight is captured but not always acted on.';
      } else {
        var worst = poor.slice().sort(function (x, y) { return priority(x.rating) - priority(y.rating) || AREAS.indexOf(x.area) - AREAS.indexOf(y.area); })[0];
        headHtml = 'Your clearest opportunity is<br>' + esc(worst.area.name.toLowerCase());
        body = 'You rated your platforms poor or very poor at: ' + poor.map(function (r) { return r.area.name.toLowerCase(); }).join(', ') + '. These are the places where customer problems are most likely to be spotted but not fixed.';
      }
      var notes = '';
      var unscored = res.filter(function (r) { return r.score === null; });
      if (unscored.length && rated.length) {
        var labels = []; unscored.forEach(function (r) { if (labels.indexOf(r.rating) < 0) labels.push('\u201C' + r.rating + '\u201D'); });
        notes += '<p class="cxb-note">' + unscored.length + ' of the six areas could not be compared, because you selected ' + labels.join(' or ') + '. They are not counted as strengths or as weaknesses.</p>';
      }
      var resGood = res[4].rating === 'Good' || res[4].rating === 'Excellent';
      if (resGood && q2 === RARELY) {
        notes += '<p class="cxb-note">You rated tracking highly and also said issues are rarely or never fully resolved. Visibility and completion are different things, so it is worth checking closure evidence, reopened issues and repeat problems.</p>';
      }

      /* six areas */
      var cards = res.map(function (r) {
        var cmp = r.score === null ? '' : (r.diff > 0 ? r.diff + ' points ahead of the survey benchmark' : r.diff === 0 ? 'In line with the survey benchmark' : Math.abs(r.diff) + ' points behind the survey benchmark');
        return '<div class="cxb-area' + (r.score === null ? ' none' : '') + '"><span class="mono">' + esc(r.area.name) + '</span>' +
          (r.score === null ? '<b>Not scored</b>' : '<b>' + r.score + ' <small>/100</small></b>') +
          '<span class="cxb-cmp">' + (cmp || '&nbsp;') + '</span>' +
          (r.score === null ? '' : '<span class="cxb-bar" aria-hidden="true"><i style="--v:' + r.score + '"></i><em style="--v:' + r.area.bench + '"></em></span>') + '</div>';
      }).join('');

      /* next three actions */
      var order = res.slice().sort(function (x, y) {
        return priority(x.rating) - priority(y.rating) ||
          (q10Areas.indexOf(y.area.id) > -1) - (q10Areas.indexOf(x.area.id) > -1) ||
          (q1Areas.indexOf(y.area.id) > -1) - (q1Areas.indexOf(x.area.id) > -1) ||
          AREAS.indexOf(x.area) - AREAS.indexOf(y.area);
      }).slice(0, 3);
      var delayUsed = false;
      var actions = order.map(function (r, k) {
        var a = r.area, word = r.rating ? r.rating.toLowerCase() : '';
        var ctx;
        if (r.rating === NO_PLATFORM) ctx = 'You don\'t currently use a CX platform, so ' + a.phrase + ' depends on how your teams work today.';
        else if (r.score === null) ctx = 'You weren\'t sure how well your platforms handle ' + a.phrase + ', so start by finding out.';
        else if (r.score >= 75) ctx = 'You rated your platforms ' + word + ' at ' + a.phrase + ', so this is about protecting and extending a strength.';
        else ctx = 'You rated your platforms ' + word + ' at ' + a.phrase + ', so this is worth reviewing next.';
        var todo = a.todo;
        if (q2 === RARELY && !delayUsed && ['insight', 'ownership', 'resolution'].indexOf(a.id) > -1) {
          todo = 'Investigate where the delay sits between an issue being identified and its closure being verified.'; delayUsed = true;
        }
        if (k === 2) {
          var extra = [];
          if (q1.indexOf('Proving the ROI of customer experience') > -1) extra.push('Record a simple before and after measure, such as time to resolution or recurrence rate.');
          if (q1.indexOf('Limited budget or resources') > -1) extra.push('Run this as a pilot with one issue type or one team, within the resources you already have.');
          if (extra.length) todo = extra.join(' ');
        }
        var opsNote = (q3 === 'Driving operational improvements across the business' && (a.id === 'prevention' || a.id === 'connected'))
          ? '<p class="cxb-note">Your team already spends most of its time on operational improvement, so treat this as strengthening work that is under way rather than starting from scratch.</p>' : '';
        return '<div class="cxb-action"><span class="cxb-num">0' + (k + 1) + '</span><h5>' + esc(a.title) + '</h5><p>' + esc(ctx + ' ' + todo + ' ' + a.sf) + '</p>' + opsNote + '</div>';
      }).join('');

      return '<div class="cxb-results bq-screen">' +
        '<span class="mono cxb-eyebrow">Your results</span>' +
        '<h3 class="cxb-title" data-focus>Here\'s how your CX stacks up</h3>' +
        '<div class="cxb-summary"><h4>' + headHtml + '</h4><p>' + esc(body) + '</p>' + notes + '</div>' +
        '<h4 class="cxb-h">Your six areas</h4><div class="cxb-areas">' + cards + '</div>' +
        '<p class="mono small cxb-bench-key">Survey benchmark marked on each bar</p>' +
        '<h4 class="cxb-h">Your next three actions</h4><div class="cxb-actions">' + actions + '</div>' +
        '<div class="cxb-upgrade"><div><span class="mono cxb-eyebrow">It\'s time to upgrade</span><h4>Move to an Operational Excellence platform</h4>' +
        '<p>Better customer experience starts with how your business operates. Serve First connects customer, operational and market signals, helps teams identify what needs attention, and turns insight into tasks and workflows for the people who can put things right. See how operational excellence could help you make progress on the priorities in your results.</p></div>' +
        '<form id="cxb-book" novalidate data-hs-do-not-collect="true"><div class="field"><label for="cxb-bfirst">First name</label><input id="cxb-bfirst" autocomplete="given-name"></div>' +
        '<div class="field"><label for="cxb-blast">Last name</label><input id="cxb-blast" autocomplete="family-name"></div>' +
        '<div class="field"><label for="cxb-bco">Company</label><input id="cxb-bco" autocomplete="organization"></div>' +
        '<div class="field"><label for="cxb-bemail">Work email</label><input id="cxb-bemail" type="email" autocomplete="email"></div>' +
        '<p class="err" id="cxb-berr" role="alert"></p><button type="submit" class="btn">Book a call</button></form>' +
        '<p class="cxb-ok" id="cxb-ok" hidden role="status">Thanks, your request has been received. One of our team will be in touch.</p></div>' +
        '<p class="cxb-note">We save these answers to see how organisations compare. They are not attached to your name or email.</p>' +
        '<div class="cxb-foot-row"><button type="button" class="bq-link" data-act="review">Review my answers</button>' +
        '<button type="button" class="bq-link" data-act="print">Print / save results</button>' +
        '<button type="button" class="bq-link" data-act="restart">Start again</button></div></div>';
    }

    /* ---- interaction ---- */
    function go(step) { state.step = step; render(true); if (typeof step !== 'number' || step === 0) root.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); }
    function finishQuestions() { go(LEAD_CAPTURE ? 'lead' : 'loading'); if (!LEAD_CAPTURE) showLoading(); }
    function storeBenchmarkAnswers() {
      fetch("/api/cx-is-broken/benchmark-answers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: sanitiseAnswers(state.answers) })
      }).catch(function () { });
    }
    function showLoading() {
      storeBenchmarkAnswers();
      if (!SHOW_RESULTS) { clearSave(); saved = null; go('thanks'); return; }
      state.step = 'loading'; render(true);
      setTimeout(function () { clearSave(); saved = null; state.step = 'results'; render(true); }, reduce ? 300 : 4500);
    }
    function restart() { state = { step: 'landing', answers: {} }; saved = null; clearSave(); render(true); }

    root.addEventListener('click', function (e) {
      var opt = e.target.closest('.opt'), act = e.target.closest('[data-act]');
      if (opt && typeof state.step === 'number') {
        var i = state.step, q = QS[i], v = opt.dataset.opt;
        if (q.type === 'multi') {
          var cur = (state.answers[i] || []).slice();
          if (v === q.none) cur = cur.indexOf(v) > -1 ? [] : [v];
          else {
            cur = cur.filter(function (x) { return x !== q.none; });
            var at = cur.indexOf(v);
            if (at > -1) cur.splice(at, 1);
            else if (!q.max || cur.length < q.max) cur.push(v);
          }
          state.answers[i] = cur;
        } else {
          state.answers[i] = v;
          /* Q4 "no platform" pre-fills Q5 to Q9 (still editable) */
          if (i === 3 && v === NO_PLATFORM) { for (var k = 4; k <= 8; k++) { if (!state.answers[k]) state.answers[k] = NO_PLATFORM; } }
        }
        /* update the current screen in place so it doesn't redraw and replay its entrance animation */
        var sel2 = state.answers[i];
        root.querySelectorAll('.opt').forEach(function (btn) {
          var o = btn.dataset.opt, on2 = q.type === 'multi' ? (sel2 || []).indexOf(o) > -1 : sel2 === o;
          btn.setAttribute('aria-pressed', on2);
        });
        var cnt = root.querySelector('.cxb-count');
        if (cnt) cnt.textContent = (sel2 || []).filter(function (x) { return x !== q.none; }).length + ' of ' + q.max + ' selected';
        var nx = root.querySelector('[data-act="next"]'); if (nx) nx.disabled = !answered(i);
        save();
        return;
      }
      if (!act) return;
      var a = act.dataset.act;
      if (a === 'start') go(0);
      else if (a === 'resume') { state.answers = saved.answers || {}; go(saved.step); }
      else if (a === 'next') { if (!answered(state.step)) return; if (state.step < 9) go(state.step + 1); else finishQuestions(); }
      else if (a === 'back') { go(state.step === 0 ? 'landing' : state.step - 1); }
      else if (a === 'restart') restart();
      else if (a === 'skip') showLoading();
      else if (a === 'print') window.print();
      else if (a === 'review') go(0);
    });
    root.addEventListener('submit', function (e) {
      e.preventDefault();
      if (e.target.id === 'cxb-lead') {
        var em = document.getElementById('cxb-email').value.trim();
        var leadErr = document.getElementById('cxb-err');
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)) { leadErr.textContent = 'Enter a work email, or choose "No thanks, show my results".'; return; }
        leadErr.textContent = '';
        var leadButton = e.target.querySelector('button[type="submit"]');
        if (leadButton) leadButton.disabled = true;
        submitToHubspot({
          utmMedium: "Benchmark",
          email: em,
          notes: document.getElementById('cxb-consent').checked ? "Follow-up requested" : ""
        }).then(function (submission) {
          if (!submission.success) {
            leadErr.textContent = submission.message;
            if (leadButton) leadButton.disabled = false;
            return;
          }
          trackFormSubmissionSuccess({
            formName: "cx is broken benchmark",
            email: em,
          });
          showLoading();   /* the email is never stored in the browser */
        });
      }
      if (e.target.id === 'cxb-book') {
        var firstname = document.getElementById('cxb-bfirst').value.trim(), lastname = document.getElementById('cxb-blast').value.trim(), c = document.getElementById('cxb-bco').value.trim(), m = document.getElementById('cxb-bemail').value.trim();
        var err = document.getElementById('cxb-berr');
        var bookForm = e.target;
        if (!firstname || !lastname || !c) { err.textContent = 'Add your first name, last name and company so we know who to call.'; return; }
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(m)) { err.textContent = 'That email looks incomplete. Check it and try again.'; return; }
        err.textContent = '';
        var bookButton = bookForm.querySelector('button[type="submit"]');
        if (bookButton) bookButton.disabled = true;
        submitToHubspot({
          utmMedium: "Book a call",
          firstname: firstname,
          lastname: lastname,
          company: c,
          email: m
        }).then(function (submission) {
          if (!submission.success) {
            err.textContent = submission.message;
            if (bookButton) bookButton.disabled = false;
            return;
          }
          trackFormSubmissionSuccess({
            formName: "cx is broken book a call",
            email: m,
          });
          bookForm.hidden = true;
          document.getElementById('cxb-ok').hidden = false;
          bookForm.closest('.cxb-upgrade').classList.add('booked');
        });
      }
    });
    function rollify(scope) {
      scope.querySelectorAll('.btn').forEach(rollLabel);
    }
    render(false);
  })();

  /* rolling text: split each CTA label into letters with a duplicate underneath (animated in D only) */
  function rollLabel(el) {
    if (el.querySelector(".roll-word")) return;
    var label = el.querySelector(".roll") ? (el.getAttribute("aria-label") || "") : el.textContent.trim();
    if (!label) return;
    el.setAttribute('aria-label', label);
    var roll = document.createElement('span'); roll.className = 'roll'; roll.setAttribute('aria-hidden', 'true');
    var rollWord = null;
    Array.from(label).forEach(function (c, i) {
      var ch = document.createElement('span'); ch.className = 'ch'; ch.style.setProperty('--i', i);
      var t = c === ' ' ? '\u00a0' : c;
      ch.innerHTML = '<span></span><span></span>';
      ch.children[0].textContent = t; ch.children[1].textContent = t;
      if (c === " ") { roll.appendChild(ch); rollWord = null; return; }
      if (!rollWord) { rollWord = document.createElement("span"); rollWord.className = "roll-word"; roll.appendChild(rollWord); }
      rollWord.appendChild(ch);
    });
    el.textContent = ''; el.appendChild(roll);
  }
  document.querySelectorAll('.btn, .submit').forEach(rollLabel);



  /* intro lead paragraph: React Bits ScrambledText on hover (radius 100, duration 1.2s, chars ".:") */
  (function () {
    var p = document.querySelector('.manifesto p.lead'); if (!p) return;
    var RADIUS = 100, DURATION = 1.2, CHARS = '.:';
    var sr = document.createElement('span'); sr.className = 'sr-only'; sr.textContent = p.textContent;
    var vis = document.createElement('span'); vis.setAttribute('aria-hidden', 'true');
    function build(src, dest) {
      Array.from(src.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          n.textContent.split(/(\s+)/).forEach(function (tok) {
            if (!tok) return;
            if (/^\s+$/.test(tok)) { dest.appendChild(document.createTextNode(' ')); return; }
            var w = document.createElement('span'); w.className = 'scw';
            Array.from(tok).forEach(function (c) { var sp = document.createElement('span'); sp.className = 'sc'; sp.textContent = c; sp.dataset.content = c; w.appendChild(sp); });
            dest.appendChild(w);
          });
        } else if (n.nodeType === 1) {
          var clone = n.cloneNode(false); build(n, clone); dest.appendChild(clone);
        }
      });
    }
    build(p, vis);
    p.textContent = ''; p.appendChild(sr); p.appendChild(vis);
    var chars = Array.prototype.slice.call(vis.querySelectorAll('.sc')), locked = false;
    function lock() {
      if (locked) return;
      chars.forEach(function (sp) { sp.style.width = ''; });
      var ws = chars.map(function (sp) { return sp.getBoundingClientRect().width; });
      chars.forEach(function (sp, i) { sp.style.width = ws[i] + 'px'; });
      locked = true;
    }
    window.addEventListener('resize', function () { locked = false; chars.forEach(function (sp) { sp.style.width = ''; }); });
    function scramble(sp, dur) {
      var id = (sp._sid || 0) + 1; sp._sid = id;
      var end = performance.now() + dur * 1000, last = 0;
      (function step(now) {
        if (sp._sid !== id) return;
        if (now >= end) { sp.textContent = sp.dataset.content; return; }
        if (now - last > 60) { last = now; sp.textContent = CHARS[Math.floor(Math.random() * CHARS.length)]; }
        requestAnimationFrame(step);
      })(performance.now());
    }
    p.addEventListener('pointerenter', lock);
    p.addEventListener('pointermove', function (e) {
      if (reduce) return;
      lock();
      chars.forEach(function (sp) {
        var r = sp.getBoundingClientRect();
        if (r.bottom < e.clientY - RADIUS || r.top > e.clientY + RADIUS) return;
        var d = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
        if (d < RADIUS) scramble(sp, DURATION * (1 - d / RADIUS));
      });
    });
  })();


  /* star rating: the viewer picks a score and gets a response */
  var userRating = 0;
  (function () {
    var box = document.getElementById('stars'); if (!box) return;
    var sec = box.closest('section'), stars = Array.prototype.slice.call(box.querySelectorAll('.star'));
    var msgs = {
      1: "Ouch. That's logged, scored and added to next month's report. Whatever caused it will still be there tomorrow.",
      2: "Thanks. Your 2 just nudged the average down a fraction. Nobody has been asked to fix what caused it.",
      3: "Right in the middle. The kind of score that gets measured forever and fixed never.",
      4: "Nearly there. Something still went wrong, and a score on its own can't say what.",
      5: "Glad it went well. Now imagine the 1 star moments getting fixed as fast as they get measured."
    };
    function paint(v) {
      stars.forEach(function (st, i) {
        st.querySelector('.fill').style.setProperty('--w', (i < v ? 100 : 0) + '%');
        st.classList.remove('glitch');
      });
    }
    stars.forEach(function (st) {
      var v = parseInt(st.dataset.v, 10);
      st.addEventListener('mouseenter', function () { paint(v); });
      st.addEventListener('focus', function () { paint(v); });
      st.addEventListener('click', function () {
        userRating = v;
        stars.forEach(function (o) { o.setAttribute('aria-pressed', o === st ? 'true' : 'false'); });
        paint(v);
        var num = document.getElementById('rating'); num.textContent = v.toFixed(1); num.classList.remove('unrated');
        var note = document.getElementById('rating-note'); note.hidden = false; note.textContent = 'Your rating · ' + v + ' of 5';
        var msg = document.getElementById('rate-msg'); msg.hidden = false; msg.textContent = msgs[v];
        var state = sec.querySelector('[data-state]'); state.textContent = 'Measured'; state.classList.remove('ok');
        var stk = sec.querySelector('.sticker'); if (stk) stk.classList.remove('peeled');
      });
    });
    box.addEventListener('mouseleave', function () { paint(userRating); });
  })();



  /* turning point section: liquid blob trail (reference: up.com.au "Better with mates").
     Metaball field in WebGL: the inside is painted in the section colour on a difference-blend canvas, so it inverts
     background and text; a second canvas draws the glossy liquid rim in yellow, pink and white. */
  (function () {
    var sec = document.querySelector('section.split'); if (!sec || reduce) return;
    var MAXP = 48;
    var VS = '#version 300 es\nin vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
    var FS = ['#version 300 es', 'precision highp float;',
      'uniform vec3 uP[' + MAXP + '];uniform vec3 uV[' + MAXP + '];uniform int uN;uniform vec2 uRes;uniform vec3 uCol;uniform int uMode;uniform float uT;uniform float uDpr;',
      'out vec4 o;',
      'float field(vec2 q){float f=0.;for(int i=0;i<' + MAXP + ';i++){if(i>=uN)break;vec2 d=q-uP[i].xy;vec3 v=uV[i];float a=dot(d,v.xy);vec2 pp=d-a*v.xy;float sl=1.+v.z,sw=1.+.12*v.z;float dd=a*a/(sl*sl)+dot(pp,pp)*sw*sw;float th=atan(d.y,d.x),fi=float(i)*.37;dd*=1.+.075*sin(3.*th+uT*.9+fi)+.045*sin(5.*th-uT*1.3+fi*1.7);float r=uP[i].z;f+=r*r/(dd+1.);}return f;}',
      'void main(){',
      ' vec2 q=vec2(gl_FragCoord.x,uRes.y-gl_FragCoord.y)/uDpr;',
      ' float f=field(q);',
      ' float inside=smoothstep(.97,1.03,f);',
      ' if(uMode==0){o=vec4(uCol*inside,inside);return;}',
      ' float band=smoothstep(.76,.79,f)*(1.-inside);',
      ' vec2 uv=q/uRes*uDpr;',
      ' float t=fract(uv.x*.9+uv.y*.6+uT*.12+f*.9);',
      ' vec3 Y=vec3(.992,.973,.416),P=vec3(.925,.22,.565),W=vec3(1.);',
      ' vec3 c=t<.45?mix(Y,P,smoothstep(0.,.45,t)):(t<.8?mix(P,W,smoothstep(.45,.8,t)):mix(W,Y,smoothstep(.8,1.,t)));',
      ' float hi=smoothstep(.79,.82,f)*(1.-smoothstep(.82,.88,f));',
      ' float lip=smoothstep(.93,.97,f)*(1.-inside);',
      ' c=mix(c,W,max(hi*.85,lip*.9));',
      ' o=vec4(c*band,band);',
      '}'].join('\n');
    function layer(blend) {
      var cv = document.createElement('canvas'); cv.className = 'ripple-cv'; cv.setAttribute('aria-hidden', 'true');
      cv.style.mixBlendMode = blend; sec.appendChild(cv);
      var gl = cv.getContext('webgl2', { alpha: true, premultipliedAlpha: true, antialias: false, preserveDrawingBuffer: true });
      if (!gl) return null;
      function sh(t, src) { var x = gl.createShader(t); gl.shaderSource(x, src); gl.compileShader(x); if (!gl.getShaderParameter(x, gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(x); return x; }
      var pr = gl.createProgram(); gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(pr); gl.useProgram(pr);
      var buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      var loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      var U = {};['uP', 'uV', 'uN', 'uRes', 'uCol', 'uMode', 'uT', 'uDpr'].forEach(function (n) { U[n] = gl.getUniformLocation(pr, n); });
      return { cv: cv, gl: gl, U: U };
    }
    var L;
    try { L = [layer('difference'), layer('normal')]; } catch (e) { return; }
    if (!L[0] || !L[1]) return;
    /* XP skin: a true colour swap inside the blob. The blob is painted black, then the section's words are redrawn
       in pink on a 2D canvas masked by the blob, so under the cursor the pink window turns black and the white words turn pink. */
    var tcv = document.createElement('canvas'); tcv.className = 'ripple-cv'; tcv.setAttribute('aria-hidden', 'true'); tcv.style.mixBlendMode = 'normal';
    sec.appendChild(tcv); var tctx = tcv.getContext('2d'); tcv.classList.add("split-under");
    var wcv = document.createElement("canvas"); wcv.className = "ripple-cv split-over"; wcv.setAttribute("aria-hidden", "true"); wcv.style.mixBlendMode = "normal";
    sec.appendChild(wcv); var wctx = wcv.getContext("2d");
    var gcv = document.createElement("canvas"), gctx = gcv.getContext("2d"), ycv = document.createElement("canvas"), yctx = ycv.getContext("2d");
    var words = [];
    (function collect() {
      var wrap = sec.querySelector(".split-alt") || sec.querySelector('.wrap'); if (!wrap) return;
      var tw = document.createTreeWalker(wrap, NodeFilter.SHOW_TEXT, { acceptNode: function (n) { return n.parentNode.closest('.xp-tb') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; } });
      var n; while ((n = tw.nextNode())) {
        var re = /\S+/g, m; while ((m = re.exec(n.data))) { var rg = document.createRange(); rg.setStart(n, m.index); rg.setEnd(n, m.index + m[0].length); words.push({ r: rg, t: m[0], el: n.parentNode }); }
      }
    })();
    function isXP() { return app.getAttribute('data-skin') === 'xp'; }
    function fitAlt() {
      var alt = sec.querySelector(".split-alt"), real = sec.querySelector(".wrap:not(.split-alt)"); if (!alt || !real) return;
      var aw = alt.querySelector(".words"), rw = real.querySelector(".words"), ap = alt.querySelector("p"), rp = real.querySelector("p");
      aw.style.marginTop = ""; ap.style.marginTop = "";
      aw.querySelectorAll(".word").forEach(function (x) { x.style.fontSize = ""; });
      var rf = parseFloat(getComputedStyle(rw.querySelector(".word")).fontSize);
      var natural = function (el) { var w = 0; el.querySelectorAll(".word").forEach(function (x) { w += x.scrollWidth; }); return w; };
      var k = natural(rw) / Math.max(1, natural(aw));
      aw.querySelectorAll(".word").forEach(function (x) { x.style.fontSize = (rf * k) + "px"; });
      var rr = rw.getBoundingClientRect(), ar = aw.getBoundingClientRect();
      aw.style.marginTop = ((rr.top + rr.height / 2) - (ar.top + ar.height / 2)) + "px";
      var rpr = rp.getBoundingClientRect(), apr = ap.getBoundingClientRect();
      ap.style.marginTop = (parseFloat(getComputedStyle(ap).marginTop) + rpr.top - apr.top) + "px";
    }
    fitAlt(); window.addEventListener("resize", fitAlt); if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitAlt);
    if (window.ResizeObserver) new ResizeObserver(fitAlt).observe(sec.querySelector(".wrap"));
    function drawWords(c, colour) {
      var so = sec.getBoundingClientRect();
      c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, c.canvas.width, c.canvas.height);
      c.setTransform(dpr, 0, 0, dpr, 0, 0); c.fillStyle = colour; c.textBaseline = "alphabetic";
      words.forEach(function (w) {
        var cs = getComputedStyle(w.el), rects = w.r.getClientRects(); if (!rects.length) return;
        c.font = cs.fontStyle + " " + cs.fontWeight + " " + cs.fontSize + " " + cs.fontFamily;
        if ("letterSpacing" in c) c.letterSpacing = cs.letterSpacing === "normal" ? "0px" : cs.letterSpacing;
        var mt = c.measureText(w.t), rc = rects[0];
        c.fillText(w.t, rc.left - so.left, rc.top - so.top + (mt.fontBoundingBoxAscent || parseFloat(cs.fontSize) * .8));
      });
    }
    var dpr = Math.min(window.devicePixelRatio || 1, 1.5), W = 0, H = 0;
    function size() {
      var r = sec.getBoundingClientRect(); W = r.width; H = r.height;
      L.forEach(function (l) { l.cv.width = Math.round(W * dpr); l.cv.height = Math.round(H * dpr); l.gl.viewport(0, 0, l.cv.width, l.cv.height); });
      tcv.width = Math.round(W * dpr); tcv.height = Math.round(H * dpr);
      [wcv, gcv, ycv].forEach(function (c) { c.width = tcv.width; c.height = tcv.height; });
    }
    size(); new ResizeObserver(size).observe(sec);
    var mouse = null, lead = null, pts = [], raf = 0, LIFE = 1.4, lastT = 0, dir = { x: 1, y: 0 }, stretch = 0;
    sec.addEventListener('pointermove', function (e) {
      var r = sec.getBoundingClientRect(); mouse = { x: e.clientX - r.left, y: e.clientY - r.top };
      if (!lead) lead = { x: mouse.x, y: mouse.y };
      if (!raf) raf = requestAnimationFrame(frame);
    });
    sec.addEventListener('pointerleave', function () { mouse = null; });
    function frame(now) {
      var dt = Math.min((now - (lastT || now)) / 1000, .05); lastT = now;
      if (mouse) {
        var px = lead.x, py = lead.y, k = 1 - Math.exp(-dt * 9);
        lead.x += (mouse.x - lead.x) * k; lead.y += (mouse.y - lead.y) * k;
        var sp = Math.hypot(lead.x - px, lead.y - py) / Math.max(dt * 60, .001);
        /* lay points along the lead's path every 14px so the trail looks the same at any frame rate */
        var lp = pts[pts.length - 1], r0 = Math.min(230, 80 + sp * 8);
        var mvx = lead.x - px, mvy = lead.y - py, ml = Math.hypot(mvx, mvy) || 1;
        if (ml > .3) dir = { x: mvx / ml, y: mvy / ml };
        stretch += (Math.min(.55, sp * .035) - stretch) * (1 - Math.exp(-dt * 8));
        if (!lp) { pts.push({ x: lead.x, y: lead.y, r: r0, t: now, dx: dir.x, dy: dir.y, s: stretch }); }
        else {
          var dx = lead.x - lp.x, dy = lead.y - lp.y, dist = Math.hypot(dx, dy), n = Math.floor(dist / 7);
          for (var j = 1; j <= n; j++) pts.push({ x: lp.x + dx * j / n, y: lp.y + dy * j / n, r: r0, t: now - (n - j) * 4, dx: dir.x, dy: dir.y, s: stretch });
          if (!n) { lp.t = now; lp.r = Math.max(lp.r * .97, 80); lp.s = stretch; lp.dx = dir.x; lp.dy = dir.y; }
        }
      }
      pts = pts.filter(function (p) { return (now - p.t) / 1000 < LIFE; });
      if (pts.length > MAXP) pts = pts.slice(pts.length - MAXP);
      var arr = new Float32Array(MAXP * 3), varr = new Float32Array(MAXP * 3);
      pts.forEach(function (p, i) {
        var k = 1 - (now - p.t) / 1000 / LIFE;
        arr[i * 3] = p.x; arr[i * 3 + 1] = p.y; arr[i * 3 + 2] = p.r * Math.pow(Math.max(k, 0), .6) * .155;
        varr[i * 3] = p.dx || 1; varr[i * 3 + 1] = p.dy || 0; varr[i * 3 + 2] = (p.s || 0) * Math.max(k, 0);
      });
      var bg = getComputedStyle(sec).backgroundColor.match(/\d+/g).map(Number);
      var xp = isXP();
      L[0].cv.style.mixBlendMode = xp ? 'normal' : 'difference';
      L[0].cv.style.opacity = xp ? "" : "0";
      if (xp) bg = [10, 10, 10];  /* XP: the blob turns the window dark, with the words in pink */
      /* in XP keep everything inside the window frame */
      var clip = '';
      if (xp) {
        var sr = sec.getBoundingClientRect(), wr = sec.querySelector('.wrap').getBoundingClientRect();
        clip = 'inset(' + (wr.top - sr.top + 32) + 'px ' + (sr.right - wr.right + 2) + 'px ' + (sr.bottom - wr.bottom + 2) + 'px ' + (wr.left - sr.left + 2) + 'px)';
      }
      L[0].cv.style.clipPath = L[1].cv.style.clipPath = tcv.style.clipPath = clip;
      L.forEach(function (l, m) {
        var gl = l.gl, U = l.U;
        gl.uniform3fv(U.uP, arr); gl.uniform3fv(U.uV, varr); gl.uniform1i(U.uN, pts.length);
        gl.uniform2f(U.uRes, l.cv.width, l.cv.height); gl.uniform1f(U.uDpr, dpr);
        gl.uniform3f(U.uCol, bg[0] / 255, bg[1] / 255, bg[2] / 255);
        gl.uniform1i(U.uMode, m); gl.uniform1f(U.uT, now / 1000);
        gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT); gl.drawArrays(gl.TRIANGLES, 0, 3);
      });
      tctx.setTransform(1, 0, 0, 1, 0, 0); tctx.globalCompositeOperation = 'source-over'; tctx.clearRect(0, 0, tcv.width, tcv.height);
      wctx.setTransform(1, 0, 0, 1, 0, 0); wctx.globalCompositeOperation = "source-over"; wctx.clearRect(0, 0, wcv.width, wcv.height);
      var dsrc = sec.querySelector(":scope > .dither-cv");
      if (!xp && pts.length && dsrc) {
        tctx.fillStyle = "#0A0A0A"; tctx.fillRect(0, 0, tcv.width, tcv.height);
        tctx.globalAlpha = .55; tctx.drawImage(dsrc, 0, 0, tcv.width, tcv.height); tctx.globalAlpha = 1;
        tctx.globalCompositeOperation = "destination-in"; tctx.drawImage(L[0].cv, 0, 0);
        drawWords(gctx, "#FFFFFF"); drawWords(yctx, "#FDF86A");
        var gw = wcv.width, gh = wcv.height, o = 1.5 * dpr;
        var gt = (now % 3200) / 3200, jolt = gt > .9 && gt < .95;
        wctx.globalAlpha = .75; wctx.drawImage(ycv, o * (jolt ? 4 : 1), 0);
        wctx.globalAlpha = .8; wctx.drawImage(gcv, -o * (jolt ? 4 : 1), 0);
        wctx.globalAlpha = 1; wctx.drawImage(gcv, 0, 0);
        if (jolt) {
          var seed = Math.floor(now / 60);
          for (var b = 0; b < 4; b++) {
            var rnd = Math.sin(seed * 12.9898 + b * 78.233) * 43758.5453; rnd -= Math.floor(rnd);
            var by = Math.floor(rnd * gh), bh = Math.floor(gh * (.04 + .08 * ((rnd * 7) % 1))), dx = (rnd > .5 ? 1 : -1) * (6 + 10 * rnd) * dpr;
            wctx.clearRect(0, by, gw, bh); wctx.drawImage(gcv, 0, by, gw, bh, dx, by, gw, bh);
          }
        }
        wctx.globalAlpha = 1; wctx.globalCompositeOperation = "destination-in"; wctx.drawImage(L[0].cv, 0, 0);
      }
      if (xp && pts.length) {
        var so = sec.getBoundingClientRect();
        tctx.setTransform(dpr, 0, 0, dpr, 0, 0); tctx.fillStyle = '#EC3890';
        words.forEach(function (w) {
          var cs = getComputedStyle(w.el), rects = w.r.getClientRects(); if (!rects.length) return;
          tctx.font = cs.fontStyle + ' ' + cs.fontWeight + ' ' + cs.fontSize + ' ' + cs.fontFamily;
          if ('letterSpacing' in tctx) tctx.letterSpacing = cs.letterSpacing === 'normal' ? '0px' : cs.letterSpacing;
          var mt = tctx.measureText(w.t), rc = rects[0];
          tctx.textBaseline = 'alphabetic';
          tctx.fillText(w.t, rc.left - so.left, rc.top - so.top + (mt.fontBoundingBoxAscent || parseFloat(cs.fontSize) * .8));
        });
        tctx.setTransform(1, 0, 0, 1, 0, 0); tctx.globalCompositeOperation = 'destination-in'; tctx.drawImage(L[0].cv, 0, 0);
      }
      raf = (pts.length || mouse) ? requestAnimationFrame(frame) : 0; if (!raf) lastT = 0;
    }
  })();


  /* scroll expand: the Operational Excellence video grows from a centred frame to full screen as you scroll */
  (function () {
    var box = document.getElementById('xpand'); if (!box) return;
    var fr = box.querySelector('.xpand-frame');
    function upd() {
      var r = box.getBoundingClientRect(), vh = window.innerHeight, vw = document.documentElement.clientWidth;
      /* FINAL on mobile: the frame starts as a full width 16:9 band pinned to the top (no empty screen around it),
         then grows to fill the screen as you scroll, and lets go as soon as it is full */
      var mob = app.getAttribute('data-skin') === 'final' && vw <= 860;
      box.classList.toggle('xp-mob', mob);
      if (mob) {
        var pm = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - vh))), em = pm < .5 ? 2 * pm * pm : 1 - Math.pow(-2 * pm + 2, 2) / 2;
        var g = 16 * (1 - em), wm = vw - 2 * g, h0 = (vw - 32) * .5625;
        fr.style.setProperty('--xw', wm.toFixed(1) + 'px'); fr.style.setProperty('--xh', (h0 + (vh - h0) * em).toFixed(1) + 'px');
        fr.style.setProperty('--xb', (1 - em).toFixed(2) + 'px'); fr.style.setProperty('--xs', (1 + em * .6).toFixed(3));
        fr.style.marginTop = ((56 + 16) * (1 - em)).toFixed(1) + 'px';  /* clears the header bar until it fills the screen */
        return;
      }
      fr.style.marginTop = '';
      var p = Math.min(1, Math.max(0, -r.top / Math.max(1, (r.height - vh) * .75)));
      var e = p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      var w0 = Math.min(760, vw * .72), h0 = w0 * .5625;
      fr.style.setProperty('--xw', (w0 + (vw - w0) * e).toFixed(1) + 'px');
      fr.style.setProperty('--xh', (h0 + (vh - h0) * e).toFixed(1) + 'px');
      fr.style.setProperty('--xb', (3 * (1 - e)).toFixed(2) + 'px');
      fr.style.setProperty('--xs', (1 + e * .6).toFixed(3));
    }
    window.addEventListener('scroll', upd, { passive: true }); window.addEventListener('resize', upd); upd();
    new MutationObserver(upd).observe(app, { attributes: true, attributeFilter: ['data-skin'] });
  })();


  /* Serve First CTA section: port of React Bits Dither (defaults: waveSpeed .05, waveFrequency 3, waveAmplitude .3,
     waveColor .5 grey, colorNum 4, pixelSize 2, mouse interaction on, mouseRadius 1) */
  document.querySelectorAll("section.sfx, #hero, .dither-demo, section.split").forEach(function (sec) {
    var cv = document.createElement('canvas'); cv.className = 'dither-cv'; cv.setAttribute('aria-hidden', 'true');
    sec.insertBefore(cv, sec.firstChild);
    var isSplit = sec.classList.contains("split");
    var gl = cv.getContext("webgl2", { antialias: false, alpha: false, preserveDrawingBuffer: isSplit }); if (!gl) { cv.remove(); return; }
    var VS = '#version 300 es\nin vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
    var FS = `#version 300 es
precision highp float;
uniform vec2 resolution;uniform float time;uniform vec2 mousePos;uniform int mouseOn;uniform int tint;uniform vec3 glow;uniform float brushR;
const float waveSpeed=.05,waveFrequency=3.,waveAmplitude=.3,mouseRadius=.264,colorNum=4.,pixelSize=2.;
const vec3 waveColor=vec3(.5),backgroundColor=vec3(0.);
out vec4 o;
vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}
vec2 fade(vec2 t){return t*t*t*(t*(t*6.-15.)+10.);}
float cnoise(vec2 P){vec4 Pi=floor(P.xyxy)+vec4(0.,0.,1.,1.);vec4 Pf=fract(P.xyxy)-vec4(0.,0.,1.,1.);Pi=mod289(Pi);
 vec4 ix=Pi.xzxz,iy=Pi.yyww,fx=Pf.xzxz,fy=Pf.yyww;vec4 i=permute(permute(ix)+iy);vec4 gx=fract(i*(1./41.))*2.-1.;vec4 gy=abs(gx)-.5;vec4 tx=floor(gx+.5);gx=gx-tx;
 vec2 g00=vec2(gx.x,gy.x),g10=vec2(gx.y,gy.y),g01=vec2(gx.z,gy.z),g11=vec2(gx.w,gy.w);
 vec4 norm=taylorInvSqrt(vec4(dot(g00,g00),dot(g01,g01),dot(g10,g10),dot(g11,g11)));g00*=norm.x;g01*=norm.y;g10*=norm.z;g11*=norm.w;
 float n00=dot(g00,vec2(fx.x,fy.x)),n10=dot(g10,vec2(fx.y,fy.y)),n01=dot(g01,vec2(fx.z,fy.z)),n11=dot(g11,vec2(fx.w,fy.w));
 vec2 fxy=fade(Pf.xy);vec2 nx=mix(vec2(n00,n01),vec2(n10,n11),fxy.x);return 2.3*mix(nx.x,nx.y,fxy.y);}
float fbm(vec2 p){float v=0.,a=1.,f=waveFrequency;for(int i=0;i<4;i++){v+=a*abs(cnoise(p));p*=f;a*=waveAmplitude;}return v;}
float pattern(vec2 p){vec2 p2=p-time*waveSpeed;return fbm(p+fbm(p2));}
const float bayer[64]=float[64](0.,48.,12.,60.,3.,51.,15.,63.,32.,16.,44.,28.,35.,19.,47.,31.,8.,56.,4.,52.,11.,59.,7.,55.,40.,24.,36.,20.,43.,27.,39.,23.,2.,50.,14.,62.,1.,49.,13.,61.,34.,18.,46.,30.,33.,17.,45.,29.,10.,58.,6.,54.,9.,57.,5.,53.,42.,26.,38.,22.,41.,25.,37.,21.);
void main(){
 vec2 fc=floor(gl_FragCoord.xy/pixelSize)*pixelSize+pixelSize*.5;
 vec2 uv=fc/resolution-.5;uv.x*=resolution.x/resolution.y;
 float f=pattern(uv);
 float b=0.,dd=1.;
 if(tint==1){
  /* FINAL: the same soft round glow as concept C's hero (160px radius, linear falloff, fades in with cursor speed) */
  vec2 q=vec2(fc.x,resolution.y-fc.y);dd=length(q-glow.xy)/brushR;
  b=glow.z*(1.-clamp(dd,0.,1.));
  f+=.18*b;
 } else if(mouseOn==1){vec2 m=(mousePos/resolution-.5)*vec2(1.,-1.);m.x*=resolution.x/resolution.y;f-=.5*(1.-smoothstep(0.,mouseRadius,length(uv-m)));}
 vec3 col=mix(backgroundColor,waveColor,clamp(f,0.,1.));
 vec2 sc=floor(gl_FragCoord.xy/pixelSize);int x=int(mod(sc.x,8.)),y=int(mod(sc.y,8.));
 float th=bayer[y*8+x]/64.-.25;float st=1./(colorNum-1.);col+=th*st;
 float lum=dot(col,vec3(.2126,.7152,.0722));float bias=mix(.2,0.,smoothstep(.45,.8,lum));col=clamp(col-bias,0.,1.);
 vec3 lv=floor(col*(colorNum-1.)+.5)/(colorNum-1.);
 if(tint==1){
  /* XP style colour mix: each dither pixel steps to one colour by strength (grey, light grey, yellow, pink),
     jittered by the bayer threshold so the colours scatter through each other instead of blending */
  /* scattered colour: each dither pixel randomly picks up colour, more often toward the centre and never at the rim,
     so the brush thins out into the background with no hard edge. Mostly pink: just over half at the rim, about three quarters in the middle */
  float r1=fract(sin(dot(sc,vec2(12.9898,78.233)))*43758.5453),r2=fract(sin(dot(sc,vec2(39.346,11.135)))*24634.6345);
  vec3 base=lv*.55;
  float lit=step(.01,lv.r),pc=smoothstep(0.,.75,b);
  vec3 tc=r2<.55+.2*smoothstep(.1,.8,b)?vec3(.925,.22,.565):vec3(.992,.973,.416);
  o=vec4(lit>0.&&r1<pc?mix(base,tc,.35+.65*pc):base,1.);return;
 }
 o=vec4(lv,1.);
}`;
    function sh(t, src) { var x = gl.createShader(t); gl.shaderSource(x, src); gl.compileShader(x); if (!gl.getShaderParameter(x, gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(x); return x; }
    try {
      var pr = gl.createProgram(); gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(pr); gl.useProgram(pr);
    } catch (e) { cv.remove(); return; }
    var buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    var uRes = gl.getUniformLocation(pr, 'resolution'), uT = gl.getUniformLocation(pr, 'time'), uM = gl.getUniformLocation(pr, 'mousePos'), uOn = gl.getUniformLocation(pr, 'mouseOn');
    var uTint = gl.getUniformLocation(pr, 'tint'), uTr = gl.getUniformLocation(pr, 'glow'), uBR = gl.getUniformLocation(pr, 'brushR');
    var gm = { x: -9999, y: -9999, px: 0, py: 0, speed: 0, last: 0 }, eng = 0, isHero = sec.id === 'hero' || sec.classList.contains('cta-block');
    function tinted() { return isHero && app.getAttribute('data-skin') === 'final'; }
    var dpr = Math.min(window.devicePixelRatio || 1, 1.5), mouse = [0, 0], on = 0, raf = 0, visible = false, t0 = performance.now();
    function size() { var r = sec.getBoundingClientRect(); cv.width = Math.round(r.width * dpr); cv.height = Math.round(r.height * dpr); gl.viewport(0, 0, cv.width, cv.height); draw(performance.now()); }
    sec.addEventListener('pointermove', function (e) {
      var r = sec.getBoundingClientRect(); mouse = [(e.clientX - r.left) * dpr, (e.clientY - r.top) * dpr]; on = 1;
      /* FINAL: the brush switches off while the cursor is on the secondary hero button */
      if (e.target.closest && e.target.closest('.btn-ghost')) { gm.x = gm.y = -9999; return; }
      gm.x = mouse[0]; gm.y = mouse[1];
    });
    sec.addEventListener('pointerleave', function () { on = 0; gm.x = gm.y = -9999; });
    function draw(now) {
      gl.uniform2f(uRes, cv.width, cv.height); gl.uniform1f(uT, reduce ? 0 : (now - t0) / 1000);
      gl.uniform2f(uM, mouse[0], mouse[1]); gl.uniform1i(uOn, isSplit ? 0 : on);
      var tn = tinted(); gl.uniform1i(uTint, tn ? 1 : 0);
      if (tn) {
        /* concept C's glow: energy rises with cursor speed and eases off when it rests */
        if (now - gm.last > 20) { var gdx = gm.x - gm.px, gdy = gm.y - gm.py, gd = gm.x < -999 ? 0 : Math.hypot(gdx, gdy) / dpr; gm.speed += (gd - gm.speed) * .5; gm.px = gm.x; gm.py = gm.y; gm.last = now; }
        eng += (Math.min(gm.speed / 5, 1) - eng) * .06;
        gl.uniform3f(uTr, gm.x, gm.y, gm.x < -999 ? 0 : eng); gl.uniform1f(uBR, 160 * dpr);
      }
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
    function loop(now) { draw(now); raf = (visible && !reduce) ? requestAnimationFrame(loop) : 0; }
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; if (visible && !raf) raf = requestAnimationFrame(loop); }).observe(sec);
    new ResizeObserver(size).observe(sec); size();
  });


  /* report lockup: once hovered, BROKEN stays pink and straight for 30s, then eases back */
  ['lock-word', 'hero-word', 'bd-word'].forEach(function (id) {
    var el = document.getElementById(id); if (!el) return;
    var hold = 0, rel = 0;
    function grab() {
      clearTimeout(hold); clearTimeout(rel);
      el.classList.remove('releasing'); el.classList.add('held');
      hold = setTimeout(function () {
        el.classList.add('releasing'); el.classList.remove('held');
        rel = setTimeout(function () { el.classList.remove('releasing'); }, 3100);
      }, 30000);
    }
    el.addEventListener('pointerenter', grab);
    el.addEventListener('focus', grab);
  });


  /* benchmark inputs: stop the pulse once something is typed */
  document.addEventListener('input', function (e) { var t = e.target; if (t.matches && t.matches('.cxb .field input')) t.classList.toggle('has-val', t.value.trim() !== ''); });


  /* videos: swap each "coming soon" frame for the real clip once its url is set in CXB_CONFIG.videos */
  (function () {
    var V = (window.CXB_CONFIG || {}).videos || {};
    document.querySelectorAll('[data-video]').forEach(function (fr) {
      var c = V[fr.getAttribute('data-video')]; if (!c || !c.url) return;
      var youtubeMatch = c.url.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/);
      if (youtubeMatch) {
        var frameEmbed = document.createElement("iframe");
        frameEmbed.src = "https://www.youtube-nocookie.com/embed/" + youtubeMatch[1] + "?rel=0";
        frameEmbed.title = c.title || "Video";
        frameEmbed.loading = "lazy";
        frameEmbed.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        frameEmbed.referrerPolicy = "strict-origin-when-cross-origin";
        frameEmbed.allowFullscreen = true;
        frameEmbed.style.cssText = "position:absolute;inset:0;width:100%;height:100%;border:0";
        fr.removeAttribute("aria-label");
        fr.style.position = "relative"; fr.innerHTML = ""; fr.appendChild(frameEmbed);
        return;
      }
      var v = document.createElement('video');
      v.src = c.url; if (c.poster) v.poster = c.poster;
      v.muted = true; v.loop = true; v.playsInline = true; v.preload = 'metadata'; v.setAttribute('playsinline', '');
      v.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover';
      fr.style.position = 'relative'; fr.innerHTML = ''; fr.appendChild(v);
      new IntersectionObserver(function (en) { if (en[0].isIntersecting) v.play().catch(function () { }); else v.pause(); }, { threshold: .25 }).observe(fr);
    });
  })();
  setConcept("final");
}

function createLifecycle() {

  const listeners = []
  const observers = []
  const timeoutIds = new Set()
  const frameIds = new Set()
  let alive = true

  const originalAddEventListener = EventTarget.prototype.addEventListener
  const originalRemoveEventListener = EventTarget.prototype.removeEventListener
  const originalRequestAnimationFrame = window.requestAnimationFrame
  const originalCancelAnimationFrame = window.cancelAnimationFrame
  const originalSetTimeout = window.setTimeout
  const originalClearTimeout = window.clearTimeout
  const OriginalResizeObserver = window.ResizeObserver
  const OriginalIntersectionObserver = window.IntersectionObserver
  const OriginalMutationObserver = window.MutationObserver

  EventTarget.prototype.addEventListener = function (type, listener, options) {

    originalAddEventListener.call(this, type, listener, options)
    listeners.push({
      target: this,
      type,
      listener,
      options,
    })

  }

  EventTarget.prototype.removeEventListener = function (type, listener, options) {

    originalRemoveEventListener.call(this, type, listener, options)

    const index = listeners.findIndex((item) => {

      return item.target === this && item.type === type && item.listener === listener

    })

    if (index >= 0) {

      listeners.splice(index, 1)

    }

  }

  window.requestAnimationFrame = (callback) => {

    if (!alive) {

      return 0

    }

    const id = originalRequestAnimationFrame((time) => {

      frameIds.delete(id)

      if (alive) {

        callback(time)

      }

    })

    frameIds.add(id)

    return id

  }

  window.cancelAnimationFrame = (id) => {

    frameIds.delete(id)
    originalCancelAnimationFrame(id)

  }

  window.setTimeout = (callback, delay, ...args) => {

    if (!alive) {

      return 0

    }

    const id = originalSetTimeout(() => {

      timeoutIds.delete(id)

      if (alive) {

        callback(...args)

      }

    }, delay)

    timeoutIds.add(id)

    return id

  }

  window.clearTimeout = (id) => {

    timeoutIds.delete(id)
    originalClearTimeout(id)

  }

  window.ResizeObserver = class extends OriginalResizeObserver {

    constructor(callback) {

      super(callback)
      observers.push(this)

    }

  }

  window.IntersectionObserver = class extends OriginalIntersectionObserver {

    constructor(callback, options) {

      super(callback, options)
      observers.push(this)

    }

  }

  window.MutationObserver = class extends OriginalMutationObserver {

    constructor(callback) {

      super(callback)
      observers.push(this)

    }

  }

  function releasePatches() {

    EventTarget.prototype.addEventListener = originalAddEventListener
    EventTarget.prototype.removeEventListener = originalRemoveEventListener
    window.ResizeObserver = OriginalResizeObserver
    window.IntersectionObserver = OriginalIntersectionObserver
    window.MutationObserver = OriginalMutationObserver

  }

  function stop() {

    if (!alive) {

      return

    }

    alive = false

    listeners.forEach((item) => {

      originalRemoveEventListener.call(item.target, item.type, item.listener, item.options)

    })

    listeners.length = 0
    observers.forEach((observer) => {

      observer.disconnect()

    })

    frameIds.forEach((id) => {

      originalCancelAnimationFrame(id)

    })

    frameIds.clear()

    timeoutIds.forEach((id) => {

      originalClearTimeout(id)

    })

    timeoutIds.clear()
    window.requestAnimationFrame = originalRequestAnimationFrame
    window.cancelAnimationFrame = originalCancelAnimationFrame
    window.setTimeout = originalSetTimeout
    window.clearTimeout = originalClearTimeout
    releasePatches()

  }

  return {
    releasePatches,
    stop,
  }

}

export function startSite() {

  const lifecycle = createLifecycle()

  window.CXB_CONFIG = window.CXB_CONFIG || defaultSiteConfig

  try {

    runSite()

  } finally {

    lifecycle.releasePatches()

  }

  return () => {

    lifecycle.stop()

  }

}
