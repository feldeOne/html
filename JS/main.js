document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  function setActiveLink() {
    const scrollPos = window.scrollY + 200;

    document.querySelectorAll("section[id]").forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < bottom) {
        document.querySelectorAll(".nav-link").forEach((link) =>
          link.classList.remove("active")
        );
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
        if (link) link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);
  setActiveLink(); // einmal beim Start

  // Cookie Banner Management
  checkCookieConsent();
});

function checkCookieConsent() {
  const consent = localStorage.getItem('cookieConsent');

  if (consent === 'accepted') {
    loadGoogleMaps();
  } else if (consent === 'declined') {
    // Banner nicht mehr anzeigen wenn abgelehnt
  } else {
    // Consent noch nicht gesetzt, Banner anzeigen
    document.getElementById('cookie-banner').style.display = 'block';
  }
}

function acceptCookies() {
  localStorage.setItem('cookieConsent', 'accepted');
  document.getElementById('cookie-banner').style.display = 'none';
  loadGoogleMaps();
}

function declineCookies() {
  localStorage.setItem('cookieConsent', 'declined');
  document.getElementById('cookie-banner').style.display = 'none';
}

function loadGoogleMaps() {
  const mapContainer = document.getElementById('map-container');
  const placeholder = document.getElementById('map-placeholder');

  if (mapContainer && placeholder) {
    mapContainer.innerHTML = `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.951775212651!2d9.415150915733188!3d51.256199599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bb41d0be8ed1f9%3A0x481cef2d3960bc90!2sTextilpflege%20Zarina!5e0!3m2!1sde!2sde!4v1698942800000!5m2!1sde!2sde"
        width="100%" height="100%" style="border:0; border-radius: 8px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;
  }
}