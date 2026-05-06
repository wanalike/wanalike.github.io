const routes = {
  home: `
    <section class="hero hero-home">
      <div class="hero-copy fade-in">
        <span class="eyebrow">HUB • APPS • INFRA • API</span>

        <h1>
          Le hub central de <span>l’écosystème WanaLike.</span>
        </h1>

        <p>
          WanaLike réunit les plateformes publiques, les outils temps réel,
          les services radio, les projets web et les interfaces communautaires
          dans une architecture claire : un portail, plusieurs produits autonomes.
        </p>

        <div class="hero-actions">
          <a class="btn primary" href="#projects">Explorer l’écosystème</a>
          <a class="btn secondary" href="https://github.com/wanalike" target="_blank">GitHub</a>
        </div>
      </div>

      <aside class="hero-panel fade-in">
        <div class="panel-line">
          <span>Architecture cible</span>
          <strong>Un portail public, plusieurs produits autonomes.</strong>
          <p>Le hub présente chaque service avec du contenu éditorial propre, puis renvoie vers le sous-domaine applicatif correspondant.</p>
        </div>

        <div class="signal-grid">
          <div><span>GAME</span><strong>WanaChess</strong></div>
          <div><span>RADIO</span><strong>WanaFM</strong></div>
          <div><span>OPS</span><strong>WanaBoard</strong></div>
          <div><span>API</span><strong>Public widgets</strong></div>
        </div>
      </aside>
    </section>

    <section class="ecosystem-strip" id="projects">
      <div class="section-title compact">
        <span>ÉCOSYSTÈME</span>
        <h2>Des produits séparés, une identité commune.</h2>
      </div>

      <div class="product-lanes">
        <a class="product-lane" href="https://wanachess.wanalike.com" target="_blank">
          <small>01 / Game</small>
          <strong>WanaChess</strong>
          <p>Jeu web, IA, WanaCoach, Discord Activity et couche temps réel IRC/WebSocket.</p>
          <em>/wanachess → wanachess.wanalike.com</em>
        </a>

        <a class="product-lane featured" href="https://fm.wanalike.com" target="_blank">
          <small>02 / Radio</small>
          <strong>WanaFM</strong>
          <p>Radio live, automation, bots et futures statistiques multi-plateformes.</p>
          <em>/fm → fm.wanalike.com</em>
        </a>

        <a class="product-lane" href="https://board.wanalike.com" target="_blank">
          <small>03 / Board</small>
          <strong>WanaBoard</strong>
          <p>Organisation, roadmap, post-it board et suivi produit de l’écosystème.</p>
          <em>/board → board.wanalike.com</em>
        </a>
      </div>
    </section>

    <section class="section editorial-section">
      <div class="editorial-copy">
        <span>IDENTITÉ</span>
        <h2>Pas une collection de sites. Une base produit.</h2>
      </div>

      <div class="editorial-text">
        <p>
          L’objectif n’est pas d’empiler des pages vitrines clonées. Le front WanaLike doit servir de cockpit public : contexte, crédibilité, navigation, accès direct, documentation et passerelles vers les services actifs.
        </p>
        <p>
          La direction visuelle part donc sur une interface plus dense, plus éditoriale, moins “cards SaaS générées”. On garde le verre, le glow et le bleu WanaLike, mais on ajoute de la structure, du rythme et des zones produit identifiables.
        </p>
      </div>
    </section>
  `,

  projects: `
    <section class="section section-page fade-in">
      <div class="section-title">
        <span>PROJETS</span>
        <h2>Cartographie WanaLike</h2>
      </div>
      <div class="product-lanes vertical">
        <a class="product-lane" href="https://wanachess.wanalike.com" target="_blank"><small>GAME</small><strong>WanaChess</strong><p>Jeu web temps réel et IA.</p></a>
        <a class="product-lane" href="https://fm.wanalike.com" target="_blank"><small>RADIO</small><strong>WanaFM</strong><p>Streaming, bots et automation.</p></a>
        <a class="product-lane" href="https://board.wanalike.com" target="_blank"><small>OPS</small><strong>WanaBoard</strong><p>Roadmap et organisation.</p></a>
      </div>
    </section>
  `,

  stack: `
    <section class="section section-page fade-in">
      <div class="section-title">
        <span>STACK</span>
        <h2>Infra, web, temps réel.</h2>
      </div>
      <div class="stack-grid">
        <span>PHP</span><span>Python</span><span>Vue.js</span><span>Node.js</span><span>Linux</span><span>WebSockets</span><span>IRC</span><span>NGINX</span><span>AI Systems</span>
      </div>
    </section>
  `
};

function renderNavbar() {
  document.getElementById('navbar-root').innerHTML = `
    <header class="topbar">
      <nav class="navbar">
        <a class="brand" href="#home">
          <img class="brand-logo" src="assets/img/logo-wanalike.svg" alt="WanaLike logo" />
          <span>WanaLike</span>
        </a>

        <div class="nav-links">
          <a href="#home">Accueil</a>
          <a href="#projects">Écosystème</a>
          <a href="#stack">Stack</a>
          <a href="https://github.com/wanalike" target="_blank">GitHub</a>
        </div>

        <a class="nav-cta" href="#projects">Explorer</a>
      </nav>
    </header>
  `;
}

function renderFooter() {
  document.getElementById('footer-root').innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-head">
          <img class="footer-logo" src="assets/img/logo-wanalike.svg" alt="WanaLike logo" />
          <div><h3>WanaLike</h3><p>Creative Tech Ecosystem</p></div>
        </div>

        <p class="footer-intro">Hub central pour apps web, IA, outils communautaires, contenus, radio, jeux et expériences interactives.</p>

        <div class="footer-columns">
          <div><strong>Navigation</strong><a href="#home">Accueil</a><a href="#projects">Écosystème</a><a href="#stack">Stack</a></div>
          <div><strong>Apps</strong><a href="https://wanachess.wanalike.com" target="_blank">WanaChess</a><a href="https://fm.wanalike.com" target="_blank">WanaFM</a><a href="https://board.wanalike.com" target="_blank">WanaBoard</a></div>
          <div><strong>Réseau</strong><a href="https://github.com/wanalike" target="_blank">GitHub</a><a href="https://wanalike.com" target="_blank">WanaLike.com</a></div>
        </div>

        <div class="footer-bottom">© 2025-2026 WanaLike — Hub de l’écosystème WanaLike.</div>
      </div>
    </footer>
  `;
}

function renderRoute() {
  const hash = location.hash.replace('#', '') || 'home';
  const app = document.getElementById('app');
  app.classList.remove('page-visible');
  setTimeout(() => {
    app.innerHTML = routes[hash] || routes.home;
    app.classList.add('page-visible');
  }, 80);
}

window.addEventListener('hashchange', renderRoute);
window.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
  renderRoute();
});
