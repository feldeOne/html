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
});