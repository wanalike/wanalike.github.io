const routes = {
  home: `
    <section class="hero hero-home">
      <div class="hero-content fade-in">
        <span class="badge">Realtime • AI • Infrastructure • Ecosystem</span>

        <h1>
          Building the <span>Realtime Web Ecosystem</span>
        </h1>

        <p>
          WanaLike develops autonomous realtime platforms, collaborative systems,
          streaming infrastructure and AI-powered technologies designed for the modern web.
        </p>

        <div class="hero-actions">
          <a class="btn primary" href="https://github.com/wanalike" target="_blank">Explore GitHub</a>
          <a class="btn secondary" href="#projects">View Projects</a>
        </div>
      </div>
    </section>

    <section class="section" id="projects">
      <div class="section-title">
        <span>CORE PROJECTS</span>
        <h2>Realtime Platforms & Systems</h2>
      </div>

      <div class="project-grid">
        <article class="project-card glass-card">
          <div class="project-top">
            <div class="status online"></div>
            <span>Realtime Collaboration</span>
          </div>
          <h3>WanaBoard</h3>
          <p>Collaborative scrum and realtime workflow platform built for modern teams.</p>
        </article>

        <article class="project-card glass-card">
          <div class="project-top">
            <div class="status online"></div>
            <span>Gaming Ecosystem</span>
          </div>
          <h3>WanaChess</h3>
          <p>Realtime multiplayer chess ecosystem integrating Discord Activity and AI systems.</p>
        </article>

        <article class="project-card glass-card">
          <div class="project-top">
            <div class="status beta"></div>
            <span>Streaming Infrastructure</span>
          </div>
          <h3>WanaFM</h3>
          <p>AI-assisted radio ecosystem with automation, metadata control and live systems.</p>
        </article>
      </div>
    </section>
  `,

  projects: `
    <section class="section section-page fade-in">
      <div class="section-title">
        <span>PROJECTS</span>
        <h2>WanaLike Platforms</h2>
      </div>

      <div class="project-grid">
        <article class="project-card glass-card">
          <h3>WanaBoard</h3>
          <p>Realtime collaborative workspace ecosystem.</p>
        </article>

        <article class="project-card glass-card">
          <h3>WanaChess</h3>
          <p>AI-enhanced multiplayer chess platform.</p>
        </article>

        <article class="project-card glass-card">
          <h3>WanaFM</h3>
          <p>Streaming automation and radio infrastructure.</p>
        </article>
      </div>
    </section>
  `,

  stack: `
    <section class="section section-page fade-in">
      <div class="section-title">
        <span>STACK</span>
        <h2>Infrastructure & Technologies</h2>
      </div>

      <div class="stack-grid">
        <span>PHP</span>
        <span>Python</span>
        <span>Vue.js</span>
        <span>Node.js</span>
        <span>Linux</span>
        <span>Docker</span>
        <span>WebSockets</span>
        <span>IRC</span>
        <span>NGINX</span>
        <span>AI Systems</span>
      </div>
    </section>
  `
};

function renderNavbar() {
  document.getElementById('navbar-root').innerHTML = `
    <header class="topbar glass-nav">
      <nav class="navbar">
        <a class="brand" href="#home">
          <div class="brand-dot"></div>
          <span>WanaLike</span>
        </a>

        <div class="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#stack">Stack</a>
          <a href="https://github.com/wanalike" target="_blank">GitHub</a>
        </div>
      </nav>
    </header>
  `;
}

function renderFooter() {
  document.getElementById('footer-root').innerHTML = `
    <footer class="site-footer glass-footer">
      <div>
        <h3>WanaLike</h3>
        <p>Realtime autonomous ecosystem.</p>
      </div>

      <div class="footer-links">
        <a href="https://github.com/wanalike" target="_blank">GitHub</a>
        <a href="#projects">Projects</a>
        <a href="#stack">Stack</a>
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
  }, 120);
}

window.addEventListener('hashchange', renderRoute);
window.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
  renderRoute();
});
