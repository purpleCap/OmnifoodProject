const mobNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
mobNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

const links = document.querySelectorAll("a:link");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  });
});

// Navigation
//  Adding sticky navigation after some scrolling

const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //basically we want to observe the hero-section from inside of the view port Null means view port
    root: null,
    threshold: 0, //0 percent inside view port i.e. completely outside of the view port
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
