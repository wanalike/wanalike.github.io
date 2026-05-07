/*
 * Hardcoded by KoS_ — WanaLike Creative Tech Ecosystem
 * Copyright © 2025-2026 KoS_ / WanaLike. All rights reserved.
 * Source signature: please do not copy, clone or reuse this code without permission.
 */

const CDN_LOGO = 'https://cdn.wanalike.com/assets/v1/brands/wanalike/logo/logo-wanalike.webp';

const TERMINAL_LINES = [
  '<span class="zsh-user">kos</span><span class="zsh-symbol">@</span><span class="zsh-host">wanalike</span><span class="zsh-symbol">:</span><span class="zsh-path">~/ecosystem</span> <span class="zsh-command">boot wanalike-hub --mode=public</span>',
  '<span class="zsh-ok">✓</span> routes mounted: <span class="zsh-info">/wanachess /fm /board /api</span>',
  '<span class="zsh-ok">✓</span> realtime layer: <span class="zsh-info">irc.websocket.gateway</span>',
  '<span class="zsh-ok">✓</span> shared assets: <span class="zsh-info">cdn.wanalike.com/assets/v1</span>',
  '<span class="zsh-warn">→</span> status: ecosystem online <span class="zsh-cursor"></span>'
];

const routes = {
  home: `
    <section class="hero hero-home">
      <div class="data-path path-a"></div>
      <div class="data-path path-b"></div>

      <div class="hero-copy fade-in reveal-block">
        <div class="hero-logo-mark">
          <img src="${CDN_LOGO}" alt="WanaLike logo" />
          <span>Creative Tech Ecosystem</span>
        </div>
        <span class="eyebrow"><i class="fa-solid fa-network-wired"></i> HUB • APPS • INFRA • API</span>
        <h1>Le hub central de <span>l’écosystème WanaLike.</span></h1>
        <p>WanaLike réunit les plateformes publiques, les outils temps réel, les services radio, les projets web et les interfaces communautaires dans une architecture claire : un portail, plusieurs produits autonomes.</p>
        <div class="hero-actions">
          <a class="btn primary" href="#projects"><i class="fa-solid fa-rocket"></i> Explorer l’écosystème</a>
          <a class="btn secondary" href="https://github.com/wanalike" target="_blank"><i class="fa-brands fa-github"></i> GitHub</a>
        </div>
      </div>

      <aside class="hero-panel fade-in reveal-block">
        <div class="hero-orbit-logo">
          <img src="${CDN_LOGO}" alt="WanaLike logo" />
          <div class="orbit-ring ring-one"></div><div class="orbit-ring ring-two"></div>
        </div>
        <div class="panel-line">
          <span><i class="fa-solid fa-sitemap"></i> Architecture cible</span>
          <strong>Un portail public, plusieurs produits autonomes.</strong>
          <p>Le hub présente chaque service avec du contenu éditorial propre, puis renvoie vers le sous-domaine applicatif correspondant.</p>
        </div>
        <div class="signal-grid">
          <div><span><i class="fa-solid fa-chess-knight"></i> GAME</span><strong>WanaChess</strong></div>
          <div><span><i class="fa-solid fa-radio"></i> RADIO</span><strong>WanaFM</strong></div>
          <div><span><i class="fa-solid fa-table-columns"></i> OPS</span><strong>WanaBoard</strong></div>
          <div><span><i class="fa-solid fa-code"></i> API</span><strong>Public widgets</strong></div>
        </div>
      </aside>
    </section>

    <section class="network-console reveal-block">
      <div class="console-head"><span><i class="fa-solid fa-terminal"></i> ~/ecosystem — zsh</span><div><i></i><i></i><i></i></div></div>
      <div class="console-body"><pre><code id="zsh-output"></code></pre></div>
    </section>

    <section class="monitor-strip reveal-block">
      <div><span>API</span><strong class="metric" data-min="18" data-max="32">24ms</strong><em>latency</em></div>
      <div><span>WS</span><strong class="metric" data-min="99" data-max="100">99.9%</strong><em>heartbeat</em></div>
      <div><span>CDN</span><strong class="metric" data-min="92" data-max="98">96%</strong><em>cache hit</em></div>
      <div><span>NODES</span><strong>04</strong><em>public routes</em></div>
    </section>

    <section class="live-grid reveal-block">
      <div class="live-copy">
        <span><i class="fa-solid fa-satellite-dish"></i> LIVE STATUS</span>
        <h2>Network center, pas landing page molle.</h2>
        <p>Le hub doit donner l'impression d'un système vivant : routes, services, flux, signaux et produits reliés.</p>
      </div>
      <div class="live-feed" id="live-feed">
        <div><strong>WANACHESS</strong><span>activity bridge</span><em>ONLINE</em></div>
        <div><strong>WANAFM</strong><span>radio automation</span><em>BUILDING</em></div>
        <div><strong>WANABOARD</strong><span>product roadmap</span><em>PRIVATE</em></div>
        <div><strong>CDN</strong><span>shared assets v1</span><em>ONLINE</em></div>
      </div>
    </section>

    <section class="topology-section reveal-block">
      <div class="section-title compact"><span><i class="fa-solid fa-diagram-project"></i> TOPOLOGY</span><h2>Une identité, plusieurs routes.</h2></div>
      <div class="topology-map">
        <div class="node hub"><i class="fa-solid fa-circle-nodes"></i><strong>WanaLike Hub</strong></div>
        <div class="node chess"><i class="fa-solid fa-chess-knight"></i><strong>WanaChess</strong></div>
        <div class="node radio"><i class="fa-solid fa-radio"></i><strong>WanaFM</strong></div>
        <div class="node board"><i class="fa-solid fa-table-columns"></i><strong>WanaBoard</strong></div>
        <div class="node cdn"><i class="fa-solid fa-cloud"></i><strong>CDN</strong></div>
      </div>
    </section>

    <section class="ecosystem-strip" id="projects">
      <div class="section-title compact reveal-block"><span><i class="fa-solid fa-layer-group"></i> ÉCOSYSTÈME</span><h2>Des produits séparés, une identité commune.</h2></div>
      <div class="product-lanes reveal-block">
        <a class="product-lane" href="https://wanachess.wanalike.com" target="_blank"><small>01 / Game</small><strong><i class="fa-solid fa-chess-board"></i> WanaChess</strong><p>Jeu web, IA, WanaCoach, Discord Activity et couche temps réel IRC/WebSocket.</p><em>/wanachess → wanachess.wanalike.com</em></a>
        <a class="product-lane featured" href="https://fm.wanalike.com" target="_blank"><small>02 / Radio</small><strong><i class="fa-solid fa-tower-broadcast"></i> WanaFM</strong><p>Radio live, automation, bots et futures statistiques multi-plateformes.</p><em>/fm → fm.wanalike.com</em></a>
        <a class="product-lane" href="https://board.wanalike.com" target="_blank"><small>03 / Board</small><strong><i class="fa-solid fa-diagram-project"></i> WanaBoard</strong><p>Organisation, roadmap, post-it board et suivi produit de l’écosystème.</p><em>/board → board.wanalike.com</em></a>
      </div>
    </section>

    <section class="section editorial-section reveal-block">
      <div class="editorial-copy"><span><i class="fa-solid fa-fingerprint"></i> IDENTITÉ</span><h2>Pas une collection de sites. Une base produit.</h2></div>
      <div class="editorial-text"><p>L’objectif n’est pas d’empiler des pages vitrines clonées. Le front WanaLike doit servir de cockpit public : contexte, crédibilité, navigation, accès direct, documentation et passerelles vers les services actifs.</p><p>La direction visuelle part donc sur une interface plus dense, plus éditoriale, moins “cards SaaS générées”. On garde le verre, le glow et le bleu WanaLike, mais on ajoute de la structure, du rythme et des zones produit identifiables.</p></div>
    </section>
  `,
  projects: `<section class="section section-page fade-in"><div class="section-title reveal-block"><span><i class="fa-solid fa-layer-group"></i> PROJETS</span><h2>Cartographie WanaLike</h2></div><div class="product-lanes vertical reveal-block"><a class="product-lane" href="https://wanachess.wanalike.com" target="_blank"><small>GAME</small><strong><i class="fa-solid fa-chess-knight"></i> WanaChess</strong><p>Jeu web temps réel et IA.</p></a><a class="product-lane" href="https://fm.wanalike.com" target="_blank"><small>RADIO</small><strong><i class="fa-solid fa-radio"></i> WanaFM</strong><p>Streaming, bots et automation.</p></a><a class="product-lane" href="https://board.wanalike.com" target="_blank"><small>OPS</small><strong><i class="fa-solid fa-table-columns"></i> WanaBoard</strong><p>Roadmap et organisation.</p></a></div></section>`,
  stack: `<section class="section section-page fade-in"><div class="section-title reveal-block"><span><i class="fa-solid fa-server"></i> STACK</span><h2>Infra, web, temps réel.</h2></div><div class="stack-grid reveal-block"><span>PHP</span><span>Python</span><span>Vue.js</span><span>Node.js</span><span>Linux</span><span>WebSockets</span><span>IRC</span><span>NGINX</span><span>AI Systems</span></div></section>`
};

function renderNavbar(){document.getElementById('navbar-root').innerHTML=`<header class="topbar"><nav class="navbar"><a class="brand" href="#home"><img class="brand-logo" src="${CDN_LOGO}" alt="WanaLike logo" /><span>WanaLike</span></a><div class="nav-links"><a href="#home"><i class="fa-solid fa-house"></i> Accueil</a><a href="#projects"><i class="fa-solid fa-layer-group"></i> Écosystème</a><a href="#stack"><i class="fa-solid fa-server"></i> Stack</a><a href="https://github.com/wanalike" target="_blank"><i class="fa-brands fa-github"></i> GitHub</a></div><a class="nav-cta" href="#projects"><i class="fa-solid fa-compass"></i> Explorer</a></nav></header>`}
function renderFooter(){document.getElementById('footer-root').innerHTML=`<footer class="site-footer"><div class="footer-inner"><div class="footer-topline"><span>WanaLike Network</span><span>Realtime • Radio • AI • Web • Community</span></div><div class="footer-head"><img class="footer-logo" src="${CDN_LOGO}" alt="WanaLike logo" /><div><h3>WanaLike</h3><p>Creative Tech Ecosystem</p></div></div><p class="footer-intro">Hub central pour apps web, IA, outils communautaires, contenus, radio, jeux et expériences interactives.</p><div class="footer-columns"><div><strong><i class="fa-solid fa-compass"></i> Navigation</strong><a href="#home">Accueil</a><a href="#projects">Écosystème</a><a href="#stack">Stack</a></div><div><strong><i class="fa-solid fa-cubes"></i> Apps</strong><a href="https://wanachess.wanalike.com" target="_blank">WanaChess</a><a href="https://fm.wanalike.com" target="_blank">WanaFM</a><a href="https://board.wanalike.com" target="_blank">WanaBoard</a></div><div><strong><i class="fa-solid fa-network-wired"></i> Réseau</strong><a href="https://github.com/wanalike" target="_blank">GitHub</a><a href="https://wanalike.com" target="_blank">WanaLike.com</a><a href="https://wanalike.net/contact" target="_blank">Contact</a></div></div><div class="footer-bottom">© 2025-2026 WanaLike — Hub de l’écosystème WanaLike.</div></div></footer>`}
function renderRoute(){const hash=location.hash.replace('#','')||'home';const app=document.getElementById('app');app.classList.remove('page-visible');setTimeout(()=>{app.innerHTML=routes[hash]||routes.home;app.classList.add('page-visible');bindReveal();runTerminalTyping();startMetrics();},80)}
function bindMotion(){
  $(window).on('scroll',()=>$('.topbar').toggleClass('is-scrolled',window.scrollY>24));
  $(document).on('mouseenter','.product-lane,.btn,.nav-cta,.live-feed div,.node',function(){$(this).addClass('is-hovered')}).on('mouseleave','.product-lane,.btn,.nav-cta,.live-feed div,.node',function(){$(this).removeClass('is-hovered')});
}
function bindReveal(){const blocks=document.querySelectorAll('.reveal-block');const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.15});blocks.forEach(block=>observer.observe(block))}
function runTerminalTyping(){const output=document.getElementById('zsh-output');if(!output)return;output.innerHTML='';let lineIndex=0;function writeLine(){if(lineIndex>=TERMINAL_LINES.length)return;const line=document.createElement('span');line.className='zsh-line';output.appendChild(line);line.innerHTML=TERMINAL_LINES[lineIndex];lineIndex+=1;setTimeout(writeLine,lineIndex===1?650:380)}setTimeout(writeLine,350)}
function startMetrics(){document.querySelectorAll('.metric').forEach(metric=>{setInterval(()=>{const min=Number(metric.dataset.min);const max=Number(metric.dataset.max);const value=Math.floor(Math.random()*(max-min+1))+min;metric.textContent=metric.textContent.includes('%')?`${value}%`:`${value}ms`;},2200)})}
window.addEventListener('hashchange',renderRoute);window.addEventListener('DOMContentLoaded',()=>{renderNavbar();renderFooter();renderRoute();bindMotion();});
