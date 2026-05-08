/*
 * Hardcoded by KoS_ — WanaLike Creative Tech Ecosystem
 * Copyright © 2025-2026 KoS_ / WanaLike. All rights reserved.
 * Source signature: please do not copy, clone or reuse this code without permission.
 */

(function wanalikeLivingUI(){
  function injectLivingNetwork(){
    if(document.querySelector('.living-network')) return;

    const network = document.createElement('div');
    network.className = 'living-network';
    network.innerHTML = '<span></span><span></span><span></span>';
    document.body.appendChild(network);
  }

  function activateMagnetic(){
    const targets = document.querySelectorAll('.project-feature,.product-lane,.stack-columns article,.live-feed div,.blueprint-list div,.ecosystem-route-list div,.ecosystem-flow div');

    targets.forEach((card) => {
      card.classList.add('magnetic-ready');

      card.addEventListener('mousemove', (e) => {
        if(window.innerWidth < 900) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - .5) * 10;
        const rotateX = ((y / rect.height) - .5) * -10;

        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;

        card.style.setProperty('--mx', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--my', `${(y / rect.height) * 100}%`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  function telemetryPulse(){
    setInterval(() => {
      document.querySelectorAll('.metric').forEach((metric) => {
        metric.classList.remove('is-ticking');
        void metric.offsetWidth;
        metric.classList.add('is-ticking');
      });
    }, 2400);
  }

  function injectRadar(){
    document.querySelectorAll('.topology-map').forEach((map) => {
      if(map.querySelector('.radar-sweep')) return;

      const radar = document.createElement('div');
      radar.className = 'radar-sweep';
      map.appendChild(radar);
    });
  }

  function daemonLogs(){
    const feeds = document.querySelectorAll('.daemon-feed');

    feeds.forEach((feed) => {
      setInterval(() => {
        const entries = [
          '[rt.gateway] websocket bridge stable',
          '[wanachess] sync event replicated',
          '[cdn.edge] assets propagated',
          '[radio.core] automation pipeline ok',
          '[ai.runtime] assistant heartbeat ok',
          '[infra.mesh] latency nominal'
        ];

        const line = document.createElement('div');
        line.textContent = entries[Math.floor(Math.random() * entries.length)];

        feed.prepend(line);

        while(feed.children.length > 6){
          feed.removeChild(feed.lastElementChild);
        }
      }, 2600);
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    injectLivingNetwork();

    setTimeout(() => {
      activateMagnetic();
      injectRadar();
      daemonLogs();
      telemetryPulse();
    }, 400);
  });

  window.addEventListener('hashchange', () => {
    setTimeout(() => {
      activateMagnetic();
      injectRadar();
    }, 260);
  });
})();
