// Mobile nav toggle
(function () {
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Contact form -> opens WhatsApp with a pre-filled message (no backend needed)
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('cf-name').value.trim();
    var service = document.getElementById('cf-service').value;
    var message = document.getElementById('cf-message').value.trim();

    var text = 'Hi Flashify Media, my name is ' + name + '.';
    if (service) text += ' I\'m interested in: ' + service + '.';
    if (message) text += ' ' + message;

    var url = 'https://wa.link/vqttkm?text=' + encodeURIComponent(text);
    window.open(url, '_blank', 'noopener');
  });
})();
