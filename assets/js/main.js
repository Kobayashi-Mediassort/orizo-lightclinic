(() => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const button = item.querySelector("button");
    if (!button) return;

    button.addEventListener("click", () => {
      const isOpen = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  const animatedTargets = document.querySelectorAll(".section, .closing");

  if (!("IntersectionObserver" in window)) {
    animatedTargets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  animatedTargets.forEach((target) => target.classList.add("fade-in"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.12
    }
  );

  animatedTargets.forEach((target) => observer.observe(target));
})();
