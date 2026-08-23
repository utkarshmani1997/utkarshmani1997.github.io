// Dual-mode toggle + writings filter.
// Mode is stored on <html data-mode> and persisted in localStorage.

(function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll('.mode-btn');

  function setMode(mode) {
    root.setAttribute('data-mode', mode);
    localStorage.setItem('umt-mode', mode);
    if (history.replaceState) {
      history.replaceState(null, '', '#' + (mode === 'clean' ? 'clean' : 'dev'));
    }
    buttons.forEach(function (b) {
      b.setAttribute('aria-selected', b.dataset.modeTarget === mode ? 'true' : 'false');
    });
    window.scrollTo({ top: 0 });
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () { setMode(b.dataset.modeTarget); });
  });

  // Sync toggle button state with the mode set pre-paint by the inline head script.
  buttons.forEach(function (b) {
    b.setAttribute('aria-selected',
      b.dataset.modeTarget === root.getAttribute('data-mode') ? 'true' : 'false');
  });

  // ---- Writings filter ----
  var chips = document.querySelectorAll('.chip');
  var cards = document.querySelectorAll('.writ-card');
  var empty = document.querySelector('.writ-empty');

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var filter = chip.dataset.filter;
      chips.forEach(function (c) { c.classList.toggle('is-active', c === chip); });

      var shown = 0;
      cards.forEach(function (card) {
        var match = filter === 'all' || card.dataset.category === filter;
        card.style.display = match ? '' : 'none';
        if (match) shown++;
      });
      if (empty) empty.hidden = shown !== 0;
    });
  });

  // ---- Copy link ----
  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
  }
  document.querySelectorAll('.copy-link').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var url = btn.dataset.url;
      var label = btn.textContent;
      var done = function () {
        btn.textContent = 'Copied!';
        setTimeout(function () { btn.textContent = label; }, 1500);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(done, function () { fallbackCopy(url); done(); });
      } else { fallbackCopy(url); done(); }
    });
  });
})();
