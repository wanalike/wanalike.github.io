/*
 * Hardcoded by KoS_ — WanaLike Creative Tech Ecosystem
 * Copyright © 2025-2026 KoS_ / WanaLike. All rights reserved.
 * Source signature: please do not copy, clone or reuse this code without permission.
 */

(function wanalikeProjectsPage(){
  const screenshots = {
    chess: 'https://wanalike.com/assets/img/screenshots/wanachess-home.webp',
    fm: 'https://wanalike.com/assets/img/screenshots/fm-home.webp',
    board: 'https://wanalike.com/assets/img/screenshots/board-home.webp'
  };

  const projectsHtml = `
    <section class="section section-page projects-page fade-in">
      <div class="section-title reveal-block is-visible">
        <span><i class="fa-solid fa-diagram-project"></i> PROJECTS</span>
        <h2>Produits WanaLike</h2>
        <p class="section-lead">Une cartographie claire des produits publics, des runtimes applicatifs et des briques qui composent l’écosystème WanaLike.</p>
      </div>

      <section class="projects-command-center reveal-block is-visible">
        <div class="projects-command-copy">
          <span><i class="fa-solid fa-satellite"></i> COMMAND CENTER</span>
          <h3>Chaque projet a son rôle. Le hub garde la vision globale.</h3>
          <p>WanaLike.com n’est pas censé cloner les apps : il présente, oriente, crédibilise et donne accès aux bons produits sans casser l’identité de chacun.</p>
        </div>
        <div class="projects-status-board">
          <div><strong>04</strong><em>routes publiques</em></div>
          <div><strong>v1</strong><em>CDN assets</em></div>
          <div><strong>RT</strong><em>realtime layer</em></div>
          <div><strong>AI</strong><em>assistive systems</em></div>
        </div>
      </section>

      <section class="project-showcase reveal-block is-visible">
        <a href="https://wanachess.wanalike.com" target="_blank" class="project-feature project-chess has-preview">
          <img class="project-preview" src="${screenshots.chess}" alt="WanaChess preview" loading="lazy" />
          <div class="project-content">
            <small>01 / GAME / REALTIME</small>
            <i class="fa-solid fa-chess-knight"></i>
            <h3>WanaChess</h3>
            <p>Jeu d’échecs web, IA, WanaCoach, Discord Activity, runtime temps réel et couche IRC/WebSocket.</p>
            <span>wanachess.wanalike.com <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
          </div>
        </a>

        <a href="https://fm.wanalike.com" target="_blank" class="project-feature project-radio has-preview">
          <img class="project-preview" src="${screenshots.fm}" alt="WanaFM preview" loading="lazy" />
          <div class="project-content">
            <small>02 / RADIO / STREAMING</small>
            <i class="fa-solid fa-radio"></i>
            <h3>WanaFM</h3>
            <p>Radio web, automation audio, bots, dashboards, statistiques d’audience et identité synthwave.</p>
            <span>fm.wanalike.com <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
          </div>
        </a>

        <a href="https://board.wanalike.com" target="_blank" class="project-feature project-board has-preview">
          <img class="project-preview" src="${screenshots.board}" alt="WanaBoard preview" loading="lazy" />
          <div class="project-content">
            <small>03 / OPS / ROADMAP</small>
            <i class="fa-solid fa-table-columns"></i>
            <h3>WanaBoard</h3>
            <p>Roadmap, backlog, post-it board, suivi produit et espace de pilotage interne pour l’écosystème.</p>
            <span>board.wanalike.com <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
          </div>
        </a>

        <a href="https://cdn.wanalike.com" target="_blank" class="project-feature project-cdn">
          <div class="project-content">
            <small>04 / SHARED / ASSETS</small>
            <i class="fa-solid fa-cloud"></i>
            <h3>WanaLike CDN</h3>
            <p>Logos, favicons, CSS, JS, signatures développeur, commentaires source et assets partagés versionnés.</p>
            <span>cdn.wanalike.com <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
          </div>
        </a>
      </section>

      <section class="projects-roadmap reveal-block is-visible">
        <div><span>NOW</span><strong>Hub public</strong><em>Navigation, branding, pages projet, stack, CDN.</em></div>
        <div><span>NEXT</span><strong>Widgets publics</strong><em>Status, radio, chess stats, embeds et composants réutilisables.</em></div>
        <div><span>LATER</span><strong>Control center</strong><em>Monitoring, dashboards admin, routing intelligent et assistants IA.</em></div>
      </section>
    </section>`;

  function enhanceNavbar(){
    document.querySelectorAll('.nav-links a, .mobile-panel a').forEach((link) => {
      if (link.getAttribute('href') === '#projects') {
        link.innerHTML = '<i class="fa-solid fa-layer-group"></i> Projets';
      }
    });
  }

  function renderProjects(){
    if (location.hash !== '#projects') return;
    setTimeout(() => {
      const app = document.getElementById('app');
      if (!app) return;
      app.innerHTML = projectsHtml;
      app.classList.add('page-visible');
    }, 140);
  }

  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(enhanceNavbar, 180);
    renderProjects();
  });
  window.addEventListener('hashchange', () => {
    setTimeout(enhanceNavbar, 120);
    renderProjects();
  });
})();
