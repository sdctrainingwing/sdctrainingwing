document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.nav-toggle-btn');
  var menu = document.querySelector('.nav-links');

  // The home page contains the shared header and footer in its HTML. The
  // interior pages use the same script, so add that shared chrome there too.
  if (!document.querySelector('.site-nav')) {
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var coursesActive = currentPage.indexOf('course-') === 0 || currentPage === 'courses.html';
    var header = `
      <div class="util-bar">
        <div class="wrap">
          <div class="util-left">
            <span class="util-item"><a href="tel:+918886084473">CALL 088860 84473</a></span>
            <span class="util-item"><a href="https://wa.me/919963987943" target="_blank" rel="noopener">WHATSAPP 99639 87943</a></span>
            <span class="util-item">Mehdipatnam, Hyderabad</span>
          </div>
          <div class="util-right"><span class="util-status">100% LIVE INTERACTIVE TRAINING</span></div>
        </div>
      </div>
      <nav class="site-nav">
        <div class="wrap nav-row">
          <a href="index.html" class="brand">
            <svg class="logo-mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BIM PRO logo">
              <circle cx="20" cy="20" r="17" fill="#fff" stroke="#1F56E3" stroke-width="1.6"/>
              <text x="20" y="26" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-weight="700" font-size="17" fill="#1F56E3">B</text>
            </svg>
            <span class="brand-name">BIM<span>PRO</span></span>
          </a>
          <button class="nav-toggle-btn" aria-label="Toggle menu"><span></span><span></span><span></span></button>
          <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li class="has-dropdown">
              <a href="courses.html"${coursesActive ? ' aria-current="page"' : ''}>Courses Offered</a>
              <ul class="dropdown">
                <li><a href="course-master.html">Integrated MEP &amp; BIM Master Program</a></li>
                <li><a href="course-hvac.html">HVAC Design &amp; BIM Modeling</a></li>
                <li><a href="course-electrical.html">Electrical Systems &amp; BIM Modeling</a></li>
                <li><a href="course-fire-phe.html">Firefighting &amp; Plumbing</a></li>
              </ul>
            </li>
            <li><a href="faq.html"${currentPage === 'faq.html' ? ' aria-current="page"' : ''}>FAQ</a></li>
            <li><a href="contact.html"${currentPage === 'contact.html' ? ' aria-current="page"' : ''}>Contact Us</a></li>
          </ul>
          <a href="contact.html" class="nav-cta">Book a Free Call</a>
        </div>
      </nav>`;

    var footer = `
      <footer>
        <div class="wrap footer-top">
          <div class="footer-brand">
            <svg class="logo-mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="20" cy="20" r="17" fill="#fff" stroke="#1F56E3" stroke-width="1.6"/>
              <text x="20" y="26" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-weight="700" font-size="17" fill="#1F56E3">B</text>
            </svg>
            <span>BIM PRO Design &amp; Engineering Training Institute. Hands-on MEP and BIM training in Hyderabad, taught on live projects.</span>
          </div>
          <div class="footer-links">
            <div><h5>Site</h5><ul>
              <li><a href="index.html">Home</a></li><li><a href="courses.html">Courses</a></li>
              <li><a href="faq.html">FAQ</a></li><li><a href="contact.html">Contact</a></li>
            </ul></div>
            <div><h5>Contact</h5><ul>
              <li><a href="tel:+918886084473">088860 84473</a></li>
              <li><a href="https://wa.me/919963987943" target="_blank" rel="noopener">WhatsApp</a></li>
            </ul></div>
          </div>
        </div>
        <div class="wrap footer-bottom">
          <span class="foot-note">&copy; 2026 BIM PRO Design &amp; Engineering Training Institute. All rights reserved.</span>
          <span class="foot-note">Mon&ndash;Thu, Sat 10am&ndash;8pm &nbsp;&middot;&nbsp; Fri 3pm&ndash;8pm &nbsp;&middot;&nbsp; Sun Closed</span>
        </div>
      </footer>`;

    document.body.insertAdjacentHTML('afterbegin', header);
    document.body.insertAdjacentHTML('beforeend', footer);
    btn = document.querySelector('.nav-toggle-btn');
    menu = document.querySelector('.nav-links');
  }

  if (btn && menu) {
    btn.addEventListener('click', function () {
      menu.classList.toggle('is-open');
    });
  }
});
