/*
 * Hardcoded by KoS_ — WanaLike Creative Tech Ecosystem
 * Copyright © 2025-2026 KoS_ / WanaLike. All rights reserved.
 * Source signature: please do not copy, clone or reuse this code without permission.
 */

(function wanalikeHomeTerminalGuard(){
  const lines = [
    '<span class="zsh-user">kos</span><span class="zsh-symbol">@</span><span class="zsh-host">wanalike</span><span class="zsh-symbol">:</span><span class="zsh-path">~/ecosystem</span> <span class="zsh-command">boot wanalike-hub --mode=public</span>',
    '<span class="zsh-ok">✓</span> routes mounted: <span class="zsh-info">/wanachess /fm /board /api</span>',
    '<span class="zsh-ok">✓</span> realtime layer: <span class="zsh-info">irc.websocket.gateway</span>',
    '<span class="zsh-ok">✓</span> shared assets: <span class="zsh-info">cdn.wanalike.com/assets/v1</span>',
    '<span class="zsh-warn">→</span> type <span class="zsh-info">help</span>, <span class="zsh-info">status</span> or <span class="zsh-info">projects</span>',
    '<span class="terminal-input-line"><span class="zsh-user">kos</span><span class="zsh-symbol">@</span><span class="zsh-host">wanalike</span><span class="zsh-symbol">:</span><span class="zsh-path">~/ecosystem</span> <input id="terminal-command" class="terminal-command" autocomplete="off" spellcheck="false" aria-label="WanaLike terminal command" /><span class="zsh-cursor"></span></span>'
  ];

  function isHome(){
    return location.hash === '' || location.hash === '#home';
  }

  function terminalHtml(){
    return '<section class="network-console reveal-block is-visible home-terminal-guarded"><div class="console-head"><span><i class="fa-solid fa-terminal"></i> ~/ecosystem — zsh</span><div><i></i><i></i><i></i></div></div><div class="console-body"><pre><code id="zsh-output"></code></pre></div></section>';
  }

  function typeTerminal(){
    const output = document.getElementById('zsh-output');
    if (!output || output.dataset.guardTyped) return;
    output.dataset.guardTyped = '1';
    output.innerHTML = '';

    let index = 0;
    function write(){
      if (index >= lines.length) return;
      const line = document.createElement('span');
      line.className = 'zsh-line';
      line.innerHTML = lines[index];
      output.appendChild(line);
      index += 1;
      setTimeout(write, index === 1 ? 520 : 280);
    }
    setTimeout(write, 180);
  }

  function bindCommands(){
    const input = document.getElementById('terminal-command');
    const output = document.getElementById('zsh-output');
    if (!input || !output || input.dataset.guardBound) return;
    input.dataset.guardBound = '1';

    input.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter') return;
      const command = input.value.trim().toLowerCase();
      const responses = {
        help: 'commands: help, status, projects, clear',
        status: 'ecosystem online • api healthy • cdn warm • realtime ready',
        projects: 'wanachess • wanafm • wanaboard • cdn • public widgets'
      };
      if (command === 'clear') {
        output.dataset.guardTyped = '';
        typeTerminal();
        input.value = '';
        return;
      }
      const line = document.createElement('span');
      line.className = 'zsh-line terminal-response';
      line.innerHTML = `<span class="zsh-warn">↳</span> ${responses[command] || 'unknown command — try help'}`;
      input.value = '';
      output.insertBefore(line, input.closest('.terminal-input-line'));
    });
  }

  function ensure(){
    if (!isHome()) return;
    const app = document.getElementById('app');
    const hero = document.querySelector('.hero-home');
    if (!app || !hero) return;

    if (!document.querySelector('.network-console')) {
      hero.insertAdjacentHTML('afterend', terminalHtml());
    }

    typeTerminal();
    setTimeout(bindCommands, 1900);
  }

  window.addEventListener('DOMContentLoaded', () => setTimeout(ensure, 500));
  window.addEventListener('hashchange', () => setTimeout(ensure, 500));
})();
