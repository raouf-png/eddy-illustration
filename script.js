/* Eddy Illustration
   Script commun. Aucune dependance, aucun appel reseau sauf le changement de
   langue, qui va chercher la page jumelle du site lui-meme.
   Tout vit dans init(), rejoue quand la langue change sans rechargement. */
(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  var root = document.documentElement;
  var S = { deck: null, moveU: null, onLink: null };   /* l'etat courant, remplace a chaque init */

  function EN() { return root.lang === 'en'; }

  /* ================================================== ce qui ne se branche qu'une fois */
  if (!window.__eddy) {
    window.__eddy = true;

    /* l'entree de page */
    window.requestAnimationFrame(function () { window.requestAnimationFrame(function () { root.classList.remove('is-entering'); }); });
    window.addEventListener('pageshow', function (e) { if (e.persisted) { root.classList.remove('is-leaving'); root.classList.remove('is-entering'); } });

    /* la sortie vers la page suivante */
    document.addEventListener('click', function (e) {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button) { return; }
      var a = e.target.closest ? e.target.closest('a[href]') : null;
      if (!a || a.classList.contains('lang')) { return; }
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) === '#' || /^(mailto:|tel:|https?:|data:)/.test(href) || a.target === '_blank' || a.hasAttribute('download')) { return; }
      if (reduce) { return; }
      e.preventDefault();
      var delay = 240;
      if (a.closest('.bar__n') && S.moveU) {
        [].forEach.call(a.parentNode.querySelectorAll('a'), function (o) { o.classList.toggle('on', o === a); });
        S.moveU(a); delay = 340;
      }
      root.classList.add('is-leaving');
      window.setTimeout(function () { window.location.href = href; }, delay);
    });

    /* la barre se range en descendant et revient en remontant ; sur l'accueil elle se pose en blanc apres la porte */
    var lastY = window.pageYOffset, ticking = false;
    function solid() {
      var bar = document.getElementById('bar'), hero = document.getElementById('hero');
      if (!bar || !hero) { return; }
      bar.classList.toggle('is-solid', window.pageYOffset > hero.offsetHeight - bar.offsetHeight);
    }
    window.addEventListener('scroll', function () {
      if (ticking) { return; }
      ticking = true;
      window.requestAnimationFrame(function () {
        var bar = document.getElementById('bar'), y = window.pageYOffset;
        solid();
        if (bar) {
          if (y > lastY + 6 && y > 120) { bar.classList.add('is-hid'); }
          else if (y < lastY - 6 || y < 60) { bar.classList.remove('is-hid'); }
        }
        lastY = y; ticking = false;
      });
    }, { passive: true });
    S.solid = solid;

    /* les fleches du jeu, si le jeu est a l'ecran, survole ou focalise */
    document.addEventListener('keydown', function (e) {
      var d = S.deck;
      if (!d || d.busy()) { return; }
      var t = e.target;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) { return; }
      if (!d.active()) { return; }
      if (e.key === 'ArrowRight') { e.preventDefault(); d.next(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); d.prev(); }
      else if (e.key === 'Home') { e.preventDefault(); d.first(); }
      else if (e.key === 'End') { e.preventDefault(); d.last(); }
    });
    document.addEventListener('visibilitychange', function () { if (S.deck) { if (document.hidden) { S.deck.stop(); } else { S.deck.play(); } } });
    window.addEventListener('resize', function () {
      root.style.setProperty('--chrome', (document.getElementById('bar') ? document.getElementById('bar').offsetHeight : 0) + 'px');
      if (S.deck) { S.deck.relayout(); }
      if (S.moveU) { S.moveU(S.onLink); }
      if (S.throwCards) { S.throwCards(); }
    });
    window.addEventListener('load', function () {
      root.style.setProperty('--chrome', (document.getElementById('bar') ? document.getElementById('bar').offsetHeight : 0) + 'px');
      if (S.deck) { S.deck.relayout(); }
      if (S.moveU) { S.moveU(S.onLink); }
    });
    window.addEventListener('popstate', function () { window.location.reload(); });
  }

  /* ================================================== init : tout ce qui depend de la page en cours */
  function init() {
    var bar = document.getElementById('bar');
    root.style.setProperty('--chrome', (bar ? bar.offsetHeight : 0) + 'px');
    if (S.solid) { S.solid(); }

    /* la porte : si son image n'a pas ete tiree (page arrivee sans rechargement), on tire */
    var heroData = document.getElementById('hero-data'), heroIm = document.getElementById('hero-im');
    if (heroData && heroIm && !heroIm.getAttribute('src')) {
      try {
        var H = JSON.parse(heroData.textContent), a = H[Math.floor(Math.random() * H.length)], h = document.getElementById('hero');
        heroIm.srcset = a.set; heroIm.src = a.src; heroIm.width = a.w; heroIm.height = a.h; heroIm.alt = (EN() ? 'Illustration by ' : 'Illustration de ') + a.n;
        h.style.setProperty('--c', a.c); h.style.setProperty('--fg', a.fg);
        root.style.setProperty('--fg', a.fg); root.style.setProperty('--fgi', a.fg === '#fff' ? '#0d0d0d' : '#fff');
        document.getElementById('hero-a').href = 'a-' + a.s + '.html'; document.getElementById('hero-n').textContent = a.n;
        heroIm.addEventListener('load', function () { h.classList.add('is-on'); });
      } catch (e) {}
    }

    /* la langue : l'interrupteur du pied change la page en place, sans rechargement quand c'est possible */
    var lt = document.querySelector('.colo__b .lang');
    if (lt) {
      lt.href = lt.getAttribute('href').split('?')[0].split('#')[0] + window.location.search + window.location.hash;
      lt.addEventListener('click', function (e) {
        try { localStorage.setItem('lang', lt.getAttribute('data-lang')); } catch (er) {}
        e.preventDefault(); e.stopPropagation();
        var to = lt.href;
        lt.classList.add('is-switching');
        window.setTimeout(function () { root.classList.add('is-leaving'); }, reduce ? 0 : 260);
        var go = function () { window.location.href = to; };
        if (window.location.protocol === 'file:' || !window.fetch) { window.setTimeout(go, reduce ? 0 : 520); return; }
        fetch(to, { credentials: 'same-origin' }).then(function (r) { if (!r.ok) { throw new Error(r.status); } return r.text(); }).then(function (html) {
          window.setTimeout(function () {
            var doc = new DOMParser().parseFromString(html, 'text/html');
            window.history.pushState({ eddy: 1 }, '', to);
            root.lang = doc.documentElement.lang;
            document.title = doc.title;
            var md = document.querySelector('meta[name="description"]'), nd = doc.querySelector('meta[name="description"]');
            if (md && nd) { md.setAttribute('content', nd.getAttribute('content')); }
            document.body.className = doc.body.className;
            document.body.setAttribute('style', doc.body.getAttribute('style') || '');
            root.classList.add('is-entering');
            document.body.innerHTML = doc.body.innerHTML;
            window.scrollTo(0, 0);
            root.classList.remove('is-leaving');
            init();
            window.requestAnimationFrame(function () { window.requestAnimationFrame(function () { root.classList.remove('is-entering'); }); });
          }, reduce ? 0 : 420);
        }).catch(function () { go(); });
      });
    }

    /* le menu : le soulignement (ecran) ou le bloc noir (telephone) glisse d'une entree a l'autre */
    var nav = document.querySelector('.bar__n');
    S.moveU = null; S.onLink = null;
    if (nav) {
      var u = nav.querySelector('.bar__u');
      if (!u) { u = document.createElement('span'); u.className = 'bar__u'; nav.appendChild(u); }
      S.onLink = nav.querySelector('a.on');
      S.moveU = function (el) {
        if (!el) { u.style.opacity = '0'; return; }
        var r = el.getBoundingClientRect(), nr = nav.getBoundingClientRect();
        u.style.opacity = '1'; u.style.width = r.width + 'px'; u.style.transform = 'translateX(' + (r.left - nr.left) + 'px)';
      };
      S.moveU(S.onLink);
      var cells = function () { return window.matchMedia && window.matchMedia('(max-width: 760px)').matches; };
      [].slice.call(nav.querySelectorAll('a')).forEach(function (a) { a.addEventListener('mouseenter', function () { if (!coarse && !cells()) { S.moveU(a); } }); });
      nav.addEventListener('mouseleave', function () { if (!cells()) { S.moveU(S.onLink); } });
    }

    /* a la une : un artiste au hasard, trois pieces au hasard, jamais l'artiste de la porte */
    var uneData = document.getElementById('une-data'), une = document.getElementById('une');
    if (uneData && une) {
      try {
        var U = JSON.parse(uneData.textContent);
        var ha = document.getElementById('hero-a');
        var heroSlug = ha ? (ha.getAttribute('href') || '').replace(/^a-|\.html$/g, '') : '';
        var pool = U.filter(function (x) { return x.s !== heroSlug && x.p.length >= 3; });
        if (!pool.length) { pool = U; }
        var ua = pool[Math.floor(Math.random() * pool.length)];
        var nm = document.getElementById('une-n'), go2 = document.getElementById('une-go'), bio = document.getElementById('une-bio');
        nm.textContent = ua.n; nm.href = 'a-' + ua.s + '.html'; go2.href = 'a-' + ua.s + '.html';
        if (ua.bio) { bio.textContent = ua.bio; }
        var picks = ua.p.slice().sort(function () { return Math.random() - 0.5; }).slice(0, 3);
        [].slice.call(document.querySelectorAll('#une-w .flat')).forEach(function (f, k) {
          var q = picks[k]; if (!q) { return; }
          var im = f.querySelector('img');
          im.srcset = q.set; im.src = q.src; im.width = q.w; im.height = q.h; im.alt = (EN() ? 'Illustration by ' : 'Illustration de ') + ua.n;
          f.style.backgroundImage = 'linear-gradient(' + ua.tint + ',' + ua.tint + ')';
          if (f.tagName === 'A') { f.href = 'a-' + ua.s + '.html'; f.setAttribute('aria-label', ua.n + (EN() ? ', discover the artist' : ', découvrir l\'artiste')); }
        });
      } catch (e) {}
    }
    /* le travail : chaque cadre tire une piece de son artiste */
    [].slice.call(document.querySelectorAll('.wk[data-alts]')).forEach(function (c) {
      try {
        var alts = JSON.parse(c.getAttribute('data-alts') || '[]');
        if (alts.length > 1) { var q = alts[Math.floor(Math.random() * alts.length)], im = c.querySelector('img'); im.srcset = q.set; im.src = q.src; im.width = q.w; im.height = q.h; }
      } catch (e) {}
    });

    /* apparition au defilement */
    var rv = [].slice.call(document.querySelectorAll('.rv:not(.in)'));
    if (rv.length && 'IntersectionObserver' in window && !reduce) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      rv.forEach(function (el) { io.observe(el); });
    } else { rv.forEach(function (el) { el.classList.add('in'); }); }

    /* la pilule de demande suit la lecture */
    var dem = document.getElementById('dem'), ask = document.getElementById('ask');
    if (dem && ask && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          var past = !e.isIntersecting && e.boundingClientRect.top < 0;
          ask.classList.toggle('is-on', past);
          ask.setAttribute('aria-hidden', past ? 'false' : 'true');
          ask.querySelector('a').tabIndex = past ? 0 : -1;
        });
      }, { threshold: 0 }).observe(dem);
    }

    /* le jeu de cartes */
    S.deck = null;
    var deck = document.getElementById('deck');
    var swipeMode = window.matchMedia && window.matchMedia('(max-width: 760px)').matches;
    if (deck && swipeMode) {
      var hintM = document.getElementById('hint');
      if (hintM) { hintM.textContent = EN() ? 'Swipe, tap to open the profile.' : 'Balayez, touchez pour ouvrir la fiche.'; }
      /* on ouvre sur une carte du milieu, comme a l'ecran */
      var tr = deck.querySelector('.deck__tr'), cs = deck.querySelectorAll('.card');
      if (tr && cs.length) { var mid = cs[Math.floor(cs.length / 2)]; tr.scrollLeft = mid.offsetLeft - (tr.clientWidth - mid.offsetWidth) / 2; }
    }
    if (deck && !swipeMode) {
      var vp = deck.querySelector('.deck__vp'), track = deck.querySelector('.deck__tr'), capsTrack = deck.querySelector('.caps__tr');
      var cards = [].slice.call(deck.querySelectorAll('.card')), caps = [].slice.call(deck.querySelectorAll('.cap'));
      var ender = deck.querySelector('.card__end'), capEnder = deck.querySelector('.cap__end');
      var hint = document.getElementById('hint');
      var n = cards.length, cur = 0, timer = null, inView = true;
      var geo = { open: 300, slat: 60, w: 0 };
      if (hint && coarse) { hint.textContent = EN() ? 'Swipe to see, tap to open the profile.' : 'Balayez pour voir, touchez pour ouvrir la fiche.'; }
      /* a chaque visite, une piece differente pour chaque artiste */
      cards.forEach(function (c) {
        try {
          var alts = JSON.parse(c.getAttribute('data-alts') || '[]');
          if (alts.length > 1) { var a = alts[Math.floor(Math.random() * alts.length)], im = c.querySelector('img'); im.srcset = a.set; im.src = a.src; }
        } catch (e) {}
      });
      function fit() {
        if (!deck.classList.contains('deck--page')) { return; }
        var intro = document.querySelector('.intro');
        var hh = window.innerHeight - (bar ? bar.offsetHeight : 0) - (intro ? intro.offsetHeight : 0);
        deck.style.height = Math.max(380, hh) + 'px';
      }
      function measure() {
        var vw = vp.clientWidth, vh = vp.clientHeight, min, max;
        if (vw < 560) { min = 22; max = 34; } else if (vw < 1000) { min = 34; max = 50; } else { min = 44; max = 62; }
        var open = Math.round(Math.min(vh * 0.8, vw * 0.5, 540));
        open = Math.max(open, 170);
        var slat = Math.round((vw * 1.16 - open) / (n - 1));
        slat = Math.max(min, Math.min(max, slat));
        geo.open = open; geo.slat = slat; geo.w = open + (n - 1) * slat; geo.vw = vw;
      }
      function place() {
        var x = 0, openX = 0;
        for (var i = 0; i < n; i++) {
          cards[i].style.setProperty('--w', geo.open + 'px'); cards[i].style.setProperty('--x', x + 'px'); cards[i].style.zIndex = String(i + 1);
          caps[i].style.setProperty('--w', geo.open + 'px'); caps[i].style.setProperty('--x', x + 'px'); caps[i].style.zIndex = String(i + 1);
          if (i === cur) { openX = x; }
          x += (i === cur ? geo.open : geo.slat);
        }
        [ender, capEnder].forEach(function (e) { if (!e) { return; } e.style.setProperty('--w', geo.open + 'px'); e.style.setProperty('--x', x + 'px'); e.style.zIndex = String(n + 2); });
        var off;
        if (geo.w <= geo.vw) { off = -(geo.vw - geo.w) / 2; }
        else { off = openX + geo.open / 2 - geo.vw / 2; off = Math.max(0, Math.min(geo.w - geo.vw, off)); }
        var t = 'translate3d(' + (-off) + 'px,0,0)';
        track.style.transform = t; capsTrack.style.transform = t;
      }
      function open(i, silent) {
        cur = (i + n) % n;
        for (var k = 0; k < n; k++) {
          cards[k].classList.toggle('is-open', k === cur); caps[k].classList.toggle('is-open', k === cur);
          cards[k].setAttribute('aria-current', k === cur ? 'true' : 'false');
        }
        place();
        if (!silent) { restart(); }
      }
      function play() { if (reduce || !inView) { return; } stop(); timer = window.setInterval(function () { open(cur + 1, true); }, 3400); }
      function stop() { if (timer) { window.clearInterval(timer); timer = null; } }
      function restart() { stop(); play(); }
      cards.forEach(function (c, k) {
        c.addEventListener('mouseenter', function () { stop(); open(k, true); });
        c.addEventListener('focus', function () { stop(); open(k, true); });
        c.addEventListener('click', function (e) { if (k !== cur) { e.preventDefault(); stop(); open(k, true); } });
      });
      caps.forEach(function (c, k) {
        c.addEventListener('mouseenter', function () { stop(); open(k, true); });
        c.addEventListener('click', function () { stop(); open(k, true); });
      });
      deck.addEventListener('mouseleave', play);
      deck.addEventListener('focusout', function (e) { if (!deck.contains(e.relatedTarget)) { play(); } });
      var sx = 0, sy = 0, sw = false;
      vp.addEventListener('touchstart', function (e) { var t = e.changedTouches[0]; sx = t.clientX; sy = t.clientY; sw = true; stop(); }, { passive: true });
      vp.addEventListener('touchend', function (e) {
        if (!sw) { return; } sw = false;
        var t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy;
        if (Math.abs(dx) > 38 && Math.abs(dx) > Math.abs(dy)) { open(cur + (dx < 0 ? 1 : -1), true); }
      }, { passive: true });
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (es) { es.forEach(function (e) { inView = e.isIntersecting; if (inView) { play(); } else { stop(); } }); }, { threshold: 0.35 }).observe(deck);
      }
      S.deck = {
        busy: function () { return false; },
        active: function () { return document.body.contains(deck) && (inView || deck.contains(document.activeElement) || deck.matches(':hover')); },
        next: function () { open(cur + 1); }, prev: function () { open(cur - 1); }, first: function () { open(0); }, last: function () { open(n - 1); },
        play: play, stop: stop, relayout: function () { fit(); measure(); place(); }
      };
      fit(); measure(); open(Math.floor(n / 2), true); play();
    }

    /* la page introuvable : le jeu renverse */
    S.throwCards = null;
    var lost = document.getElementById('lost');
    if (lost) {
      var lcards = [].slice.call(lost.querySelectorAll('.lcard'));
      var colors = JSON.parse(lost.getAttribute('data-colors') || '[]');
      var pick = colors[Math.floor(Math.random() * colors.length)];
      if (pick) { lost.style.setProperty('--c', pick[0]); lost.style.setProperty('--fg', pick[1]); }
      var base = [];
      function throwCards() {
        var W = lost.clientWidth, Hh = lost.clientHeight;
        var cw = lcards[0].offsetWidth, ch = cw * 4 / 3;
        var text = lost.querySelector('.lost__t').getBoundingClientRect(), lb = lost.getBoundingClientRect();
        var order = lcards.map(function (c, i) { return i; }).sort(function () { return Math.random() - 0.5; });
        base = [];
        lcards.forEach(function (c, i) {
          var x, y, tries = 0;
          do { x = Math.random() * (W - cw - 40) + 20; y = Math.random() * (Hh - ch - 40) + 20; tries++; }
          while (tries < 20 && x < (text.right - lb.left) + 10 && y + ch > (text.top - lb.top) - 10);
          var r = (Math.random() * 44 - 22);
          base[i] = { x: x, y: y, r: r };
          c.style.setProperty('--x', x + 'px'); c.style.setProperty('--y', y + 'px'); c.style.setProperty('--r', r.toFixed(1) + 'deg');
          c.style.setProperty('--z', String(order[i] + 1)); c.style.setProperty('--d', (-Math.random() * 7).toFixed(2) + 's');
        });
      }
      S.throwCards = throwCards;
      throwCards();
      window.requestAnimationFrame(function () { lost.classList.add('is-live'); });
      lost.addEventListener('click', function (e) {
        if (e.target.closest('.lcard') || e.target.closest('.lost__t')) { return; }
        lost.classList.add('is-thrown'); throwCards();
        window.setTimeout(function () { lost.classList.remove('is-thrown'); }, 1400);
      });
      var drag = null, topZ = 50;
      lcards.forEach(function (c, i) {
        c.addEventListener('pointerdown', function (e) {
          if (e.button && e.button !== 0) { return; }
          drag = { i: i, sx: e.clientX, sy: e.clientY, ox: base[i].x, oy: base[i].y, moved: false };
          c.setPointerCapture(e.pointerId); c.classList.add('is-drag'); c.style.setProperty('--z', String(++topZ));
        });
        c.addEventListener('pointermove', function (e) {
          if (!drag || drag.i !== i) { return; }
          var dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
          if (Math.abs(dx) > 5 || Math.abs(dy) > 5) { drag.moved = true; }
          base[i].x = drag.ox + dx; base[i].y = drag.oy + dy;
          c.style.setProperty('--x', base[i].x + 'px'); c.style.setProperty('--y', base[i].y + 'px');
        });
        var drop = function () {
          if (!drag || drag.i !== i) { return; }
          c.classList.remove('is-drag');
          if (drag.moved) { c.setAttribute('data-moved', '1'); window.setTimeout(function () { c.removeAttribute('data-moved'); }, 50); }
          drag = null;
        };
        c.addEventListener('pointerup', drop); c.addEventListener('pointercancel', drop);
        c.addEventListener('click', function (e) { if (c.getAttribute('data-moved')) { e.preventDefault(); } });
        c.addEventListener('dragstart', function (e) { e.preventDefault(); });
      });
      if (!coarse && !reduce) {
        lost.addEventListener('mousemove', function (e) {
          if (drag) { return; }
          var lb = lost.getBoundingClientRect();
          var mx = (e.clientX - lb.left) / lb.width - 0.5, my = (e.clientY - lb.top) / lb.height - 0.5;
          lcards.forEach(function (c, i) { var depth = ((i % 5) + 1) * 6; c.style.setProperty('--x', (base[i].x - mx * depth) + 'px'); c.style.setProperty('--y', (base[i].y - my * depth) + 'px'); });
        });
      }
    }

    /* le tri du roster */
    var tiles = document.getElementById('tiles');
    if (tiles) {
      var btns = [].slice.call(document.querySelectorAll('[data-sort]'));
      btns.forEach(function (b) {
        b.addEventListener('click', function () {
          var mode = b.getAttribute('data-sort');
          btns.forEach(function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
          var items = [].slice.call(tiles.children);
          items.sort(function (a, c) {
            if (mode === 'name') { return a.getAttribute('data-name').localeCompare(c.getAttribute('data-name'), EN() ? 'en' : 'fr'); }
            return (+a.getAttribute('data-n')) - (+c.getAttribute('data-n'));
          });
          items.forEach(function (it) { tiles.appendChild(it); it.classList.add('in'); });
        });
      });
    }

    /* ecrire et s'abonner : par courriel tant qu'aucun service n'est branche */
    var rosterData = document.getElementById('roster-data'), names = {};
    if (rosterData) { JSON.parse(rosterData.textContent).forEach(function (a) { names[a.s] = a.n; }); }
    var demande = document.getElementById('demande');
    if (demande) {
      var m = /[?&]artiste=([a-z0-9-]+)/.exec(window.location.search), sel = document.getElementById('f-artiste');
      if (m && sel) { sel.value = m[1]; if (window.location.hash === '#demande') { demande.scrollIntoView(); } }
      demande.addEventListener('submit', function (e) {
        if (demande.getAttribute('action')) { return; }
        e.preventDefault();
        var who = sel && sel.value ? names[sel.value] : '';
        var subject = who ? (EN() ? 'Request for ' : 'Demande pour ') + who : (EN() ? 'Request to the studio' : 'Demande au studio');
        var body = document.getElementById('f-msg').value + '\n\n' + document.getElementById('f-nom').value + '\n' + document.getElementById('f-mail').value;
        window.location.href = 'mailto:' + (demande.getAttribute('data-to') || '') + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        var note = document.getElementById('f-note');
        if (note) { note.textContent = EN() ? 'Your mail app opens with the message ready.' : 'Votre messagerie s\'ouvre avec le message pret.'; }
      });
    }
    var lettre = document.getElementById('lettre');
    if (lettre) {
      lettre.addEventListener('submit', function (e) {
        if (lettre.getAttribute('action')) { return; }
        e.preventDefault();
        var mail = lettre.querySelector('input[type=email]').value;
        window.location.href = 'mailto:' + (lettre.getAttribute('data-to') || '') + '?subject=' + encodeURIComponent(EN() ? 'Newsletter subscription' : 'Abonnement aux nouvelles') + '&body=' + encodeURIComponent((EN() ? 'Please subscribe me to the studio news: ' : 'Merci de m\'abonner aux nouvelles du studio : ') + mail);
      });
    }
  }

  init();
}());
