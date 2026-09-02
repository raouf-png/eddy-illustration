/* Eddy Illustration
   Script commun. Aucune dependance, aucun appel reseau sauf le changement de
   langue, qui va chercher la page jumelle du site lui-meme.
   Tout vit dans init(), rejoue quand la langue change sans rechargement. */
(function () {
  'use strict';
  var I18N = [["Eddy Illustration réunit et représente des illustrateurs et des animateurs. La maison produit leurs images pour la campagne, l'édition et l'écran.", "Eddy Illustration brings together and represents illustrators and animators. The house produces their images for campaigns, publishing and screen."], ["La phrase sur la place d'Eddy Illustration dans le groupe Eddy vient ici. Elle sert aussi d'accroche sur la page d'accueil.", "The line on Eddy Illustration's place in the Eddy group goes here. It also opens the home page."], ["Cette adresse ne mène nulle part. Les artistes, eux, sont bien là. Attrapez-en un, ou cliquez à côté pour les relancer.", "This address leads nowhere. The artists, though, are right here. Grab one, or click beside them to throw them again."], ["Eddy Illustration est la maison d'illustration et d'animation du groupe Eddy, société de production établie à Paris.", "Eddy Illustration is the illustration and animation house of the Eddy group, a production company based in Paris."], ["Les projets viendront ici, six en vitrine puis le catalogue complet. Aucun projet n'est publié pour l'instant.", "Projects will live here, six on display then the full catalogue. No project is published yet."], ["Eddy Illustration, illustration et animation : des illustrateurs et des animateurs représentés par Eddy.", "Eddy Illustration, illustration and animation: illustrators and animators represented by Eddy."], ["Le texte de présentation du projet vient ici, en trois paragraphes, avec les partenaires cités et liés.", "The project text goes here, in three paragraphs, with the partners named and linked."], ["Les projets viendront ici, six en vitrine puis le catalogue, filtrés par rubrique.", "Projects will live here, six on display then the catalogue, filtered by category."], ["Les artistes représentés par Eddy Illustration, en illustration et en animation.", "The artists represented by Eddy Illustration, in illustration and animation."], ["Sorties de projets et nouvelles signatures, par courriel, quelques fois par an.", "Project releases and new signings, by email, a few times a year."], ["La phrase sur la place d'Eddy Illustration dans le groupe Eddy vient ici.", "The line on Eddy Illustration's place in the Eddy group goes here."], ["Les visuels du projet viennent ici, en pleine largeur puis par paires.", "The project visuals go here, full width then in pairs."], ["Les images présentées sur ce site sont la propriété de leurs auteurs.", "The images on this site are the property of their authors."], ["Une demande pour un artiste, un projet, une question : écrivez-nous.", "A request for an artist, a project, a question: write to us."], ["Eddy Illustration représente des illustrateurs et des animateurs.", "Eddy Illustration represents illustrators and animators."], ["Ce site ne dépose aucun cookie et ne charge aucun service tiers.", "This site sets no cookies and loads no third-party service."], ["Les trois lignes sur le studio et le groupe Eddy viennent ici.", "The three lines on the studio and the Eddy group go here."], ["Joindre Eddy Illustration : courriel, adresse et réseaux.", "Reach Eddy Illustration: email, address and social."], ["Eddy Illustration : présentation, services et équipe.", "Eddy Illustration: about, services and team."], ["Survol pour voir, clic pour entrer dans la fiche.", "Hover to see, click to open the profile."], ["Ce site ne collecte aucune donnée personnelle.", "This site collects no personal data."], ["Le texte de présentation du studio vient ici.", "The studio text goes here."], ["Les nouvelles du studio, quelques fois par an", "News from the studio, a few times a year"], ["Mentions légales du site Eddy Illustration.", "Legal notice of the Eddy Illustration website."], [", artiste représenté par Eddy Illustration.", ", artist represented by Eddy Illustration."], ["Gabarit de page projet, Eddy Illustration.", "Project page template, Eddy Illustration."], ["L'adresse de contact du studio vient ici.", "The studio contact address goes here."], ["Sorties de projets, nouvelles signatures", "Project releases, new signings"], ["Balayez, touchez pour ouvrir la fiche.", "Swipe, tap to open the profile."], ["Présentation de l'artiste à écrire.", "Artist's presentation to be written."], ["Votre demande, en quelques lignes.\"", "Your request, in a few lines.\""], ["Les projets d'Eddy Illustration.", "Eddy Illustration projects."], ["Instagram et site à renseigner.", "Instagram and website to be added."], ["Titre de la nouvelle à écrire.", "Headline to be written."], ["Ce que fait Eddy Illustration", "What Eddy Illustration does"], ["Deux lignes sur la nouvelle.", "Two lines about the news."], ["Artistes | Eddy Illustration", "Artists | Eddy Illustration"], ["Projets | Eddy Illustration", "Projects | Eddy Illustration"], ["Un artiste, et les projets", "One artist, and the projects"], ["Sept pièces, sept artistes", "Seven pieces, seven artists"], ["Illustration et animation.", "Illustration and animation."], ["Illustration et animation.", "Illustration and animation."], ["Illustration et animation", "Illustration and animation"], ["Un projet ? Écrivez-nous.", "A project? Write to us."], ["Cette page n'existe pas.", "This page does not exist."], ["Recevoir les nouvelles.", "Receive the news."], ["Un projet, une demande", "A project, a request"], ["Images © leurs auteurs", "Images © their authors"], ["Le site est édité par", "This site is published by"], [", découvrir l'artiste", ", discover the artist"], ["Mockups et campagnes", "Mockups and campaigns"], ["Découvrir l'artiste", "Discover the artist"], ["Retour à l'accueil", "Back to home"], ["Nouvelle signature", "New signing"], ["Page introuvable.", "Page not found."], ["Rester en contact", "Stay in touch"], ["Tous les artistes", "All artists"], ["Page introuvable", "Page not found"], ["Mentions légales", "Legal notice"], ["Tous les projets", "All projects"], ["Sortie de projet", "Project release"], ["vous@exemple.fr\"", "you@example.com\""], ["Illustration de ", "Illustration by "], ["Titre du projet", "Project title"], ["Ordre d'origine", "Original order"], ["Votre courriel", "Your email"], ["Prénom et nom\"", "First and last name\""], ["Votre message", "Your message"], ["Les artistes.", "The artists."], ["Les artistes\"", "The artists\""], ["Demande pour ", "Request for "], ["Trois pièces", "Three pieces"], ["Les artistes", "The artists"], ["Pied de page", "Footer"], ["Rattachement", "The group"], ["Présentation", "About"], ["Portrait de ", "Portrait of "], ["Six projets", "Six projects"], ["Le travail", "The work"], ["En vitrine", "On display"], ["Erreur 404", "Error 404"], ["Vie privée", "Privacy"], ["Actualités", "News"], ["360 degrés", "360 degrees"], ["Votre nom", "Your name"], ["Le roster", "The roster"], ["Le studio", "The studio"], ["Précédent", "Previous"], ["S'abonner", "Subscribe"], ["Hébergeur", "Host"], ["L'équipe", "The team"], ["À la une", "Featured"], ["Artistes", "Artists"], ["Éditeur", "Publisher"], ["Crédits", "Credits"], ["Données", "Data"], ["Envoyer", "Send"], ["Adresse", "Address"], ["Réseaux", "Social"], ["Suivant", "Next"], ["Exemple", "Example"], ["à venir", "to come"], ["Accueil", "Home"], ["Projets", "Projects"], ["Artiste", "Artist"], ["Droits", "Rights"], ["Écrire", "Write"], ["Équipe", "Team"], ["Projet", "Project"], ["A à Z", "A to Z"], ["Année", "Year"], ["Liens", "Links"], ["Plan", "Site map"], ["Pour", "For"], ["Site", "Website"]];
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  var root = document.documentElement;
  var S = { deck: null, moveU: null, onLink: null };   /* l'etat courant, remplace a chaque init */

  function EN() { return root.lang === 'en'; }

  /* ================================================== la traduction en place */
  function esc(x) { return x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function translatePage(to) {
    var from = to === 'en' ? 'fr' : 'en';
    if (root.lang === to) { return; }
    var pairs = I18N.map(function (p) { return to === 'en' ? p : [p[1], p[0]]; });
    pairs.sort(function (a, b) { return b[0].length - a[0].length; });
    var res = pairs.map(function (p) {
      var k = p[0], sb = /^\p{L}/u.test(k) ? '(^|[^\\p{L}])' : '()', eb = /\p{L}$/u.test(k) ? '(?=[^\\p{L}]|$)' : '';
      return [new RegExp(sb + esc(k) + eb, 'gu'), p[1]];
    });
    function tr(t) {
      var o = t;
      res.forEach(function (r) { if (r[0].test(t)) { t = t.replace(r[0], function (m, pre) { return pre + r[1]; }); } r[0].lastIndex = 0; });
      return t;
    }
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null), nodes = [];
    while (w.nextNode()) { nodes.push(w.currentNode); }
    nodes.forEach(function (n) {
      var tag = n.parentNode && n.parentNode.tagName;
      if (!n.nodeValue.trim() || tag === 'SCRIPT' || tag === 'STYLE') { return; }
      var t = tr(n.nodeValue); if (t !== n.nodeValue) { n.nodeValue = t; }
    });
    ['alt', 'aria-label', 'placeholder', 'title'].forEach(function (attr) {
      [].forEach.call(document.querySelectorAll('[' + attr + ']'), function (el) { var v = el.getAttribute(attr), t = tr(v); if (t !== v) { el.setAttribute(attr, t); } });
    });
    [].forEach.call(document.querySelectorAll('a[href^="mailto:"]'), function (a) {
      var h = a.getAttribute('href'); var t = decodeURIComponent(h); var u = tr(t); if (u !== t) { a.setAttribute('href', u.replace(/ /g, '%20')); }
    });
    document.title = tr(document.title);
    var md = document.querySelector('meta[name="description"]'); if (md) { md.setAttribute('content', tr(md.getAttribute('content'))); }
    root.lang = to;
    var hint = document.getElementById('hint');
    if (hint) { hint.textContent = tr(hint.textContent); }
  }

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
        S.moveU(a); delay = 300;
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
      if (S.moveU) { S.moveU(S.onLink, true); }
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

    /* la langue : l'interrupteur traduit la page sur place, mot a mot, sans rien charger */
    var lt = document.querySelector('.colo__b .lang');
    if (lt) {
      lt.href = lt.getAttribute('href').split('?')[0].split('#')[0] + window.location.search + window.location.hash;
      lt.addEventListener('click', function (e) {
        e.preventDefault(); e.stopPropagation();
        var to = lt.getAttribute('data-lang');
        try { sessionStorage.setItem('lang', to); } catch (er) {}
        lt.classList.add('is-switching');
        window.setTimeout(function () {
          translatePage(to);
          lt.classList.remove('is-switching');
          lt.setAttribute('data-on', to); lt.setAttribute('data-lang', to === 'en' ? 'fr' : 'en'); lt.setAttribute('aria-checked', to === 'en' ? 'true' : 'false');
          lt.setAttribute('aria-label', to === 'en' ? 'Français' : 'English');
          var opts = lt.querySelectorAll('.lsw__o'); opts[0].classList.toggle('is-on', to === 'fr'); opts[1].classList.toggle('is-on', to === 'en');
          lt.href = (to === 'en' ? (root.getAttribute('data-root') === 'en' ? '' : '../') : (root.getAttribute('data-root') === 'en' ? 'en/' : '')) ;
          lt.href = lt.getAttribute('data-href-' + (to === 'en' ? 'fr' : 'en')) || '#';
        }, reduce ? 0 : 300);
      });
    }

    /* le menu : le soulignement (ecran) ou le bloc noir (telephone) glisse d'une entree a l'autre */
    var nav = document.querySelector('.bar__n');
    S.moveU = null; S.onLink = null;
    if (nav) {
      var u = nav.querySelector('.bar__u');
      if (!u) { u = document.createElement('span'); u.className = 'bar__u'; nav.appendChild(u); }
      S.onLink = nav.querySelector('a.on');
      S.moveU = function (el, instant) {
        if (!el) { u.style.opacity = '0'; return; }
        var r = el.getBoundingClientRect(), nr = nav.getBoundingClientRect();
        if (instant) { u.style.transition = 'none'; }
        u.style.opacity = '1'; u.style.width = r.width + 'px'; u.style.transform = 'translateX(' + (r.left - nr.left) + 'px)';
        if (instant) { void u.offsetWidth; u.style.transition = ''; }
      };
      S.moveU(S.onLink, true);
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
    var dem = document.getElementById('dem'), ask = document.getElementById('ask'), colo = document.querySelector('.colo');
    if (dem && ask && 'IntersectionObserver' in window) {
      var pastDem = false, footVisible = false;
      var show = function () {
        var on = pastDem && !footVisible;
        ask.classList.toggle('is-on', on);
        ask.setAttribute('aria-hidden', on ? 'false' : 'true');
        ask.querySelector('a').tabIndex = on ? 0 : -1;
      };
      new IntersectionObserver(function (es) { es.forEach(function (e) { pastDem = !e.isIntersecting && e.boundingClientRect.top < 0; }); show(); }, { threshold: 0 }).observe(dem);
      if (colo) { new IntersectionObserver(function (es) { es.forEach(function (e) { footVisible = e.isIntersecting; }); show(); }, { threshold: 0 }).observe(colo); }
    }

    /* le jeu de cartes */
    S.deck = null;
    var deck = document.getElementById('deck');
    var swipeMode = function () { return window.matchMedia && window.matchMedia('(max-width: 760px)').matches; };
    if (deck) {
      var vp = deck.querySelector('.deck__vp'), track = deck.querySelector('.deck__tr'), capsTrack = deck.querySelector('.caps__tr');
      var cards = [].slice.call(deck.querySelectorAll('.card')), caps = [].slice.call(deck.querySelectorAll('.cap'));
      var ender = deck.querySelector('.card__end'), capEnder = deck.querySelector('.cap__end');
      var hint = document.getElementById('hint');
      var n = cards.length, cur = 0, timer = null, inView = true;
      var geo = { open: 300, slat: 60, w: 0 };
      if (hint && (coarse || swipeMode())) { hint.textContent = EN() ? 'Swipe, tap to open the profile.' : 'Balayez, touchez pour ouvrir la fiche.'; }
      /* a chaque visite, une piece differente pour chaque artiste */
      cards.forEach(function (c) {
        try {
          var alts = JSON.parse(c.getAttribute('data-alts') || '[]');
          if (alts.length > 1) { var a = alts[Math.floor(Math.random() * alts.length)], im = c.querySelector('img'); im.srcset = a.set; im.src = a.src; }
        } catch (e) {}
      });
      function fit() {
        if (swipeMode()) {
          /* telephone : la carte ouverte fait 76 % de la largeur, le jeu prend sa hauteur */
          deck.style.height = Math.round(vp.clientWidth * 0.76 * 4 / 3 + 24) + 'px';
          return;
        }
        deck.style.height = '';
        if (!deck.classList.contains('deck--page')) { return; }
        var intro = document.querySelector('.intro');
        var hh = window.innerHeight - (bar ? bar.offsetHeight : 0) - (intro ? intro.offsetHeight : 0);
        deck.style.height = Math.max(380, hh) + 'px';
      }
      function measure() {
        var vw = vp.clientWidth, vh = vp.clientHeight, min, max, open;
        if (swipeMode()) {
          open = Math.round(vw * 0.76); min = 20; max = 28;
        } else {
          if (vw < 560) { min = 22; max = 34; } else if (vw < 1000) { min = 34; max = 50; } else { min = 44; max = 62; }
          open = Math.round(Math.min(vh * 0.8, vw * 0.5, 540));
          open = Math.max(open, 170);
        }
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
