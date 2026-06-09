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

  const qaItems = document.querySelectorAll(".qa_box dl");

  qaItems.forEach((item, index) => {
    const question = item.querySelector("dt");
    if (!question) return;

    question.setAttribute("role", "button");
    question.setAttribute("tabindex", "0");
    question.setAttribute("aria-expanded", "false");
    question.setAttribute("aria-controls", `qa-answer-${index + 1}`);

    const answer = item.querySelector("dd");
    if (answer) {
      answer.id = `qa-answer-${index + 1}`;
    }

    const toggleItem = () => {
      const isOpen = item.classList.toggle("is-open");
      question.setAttribute("aria-expanded", String(isOpen));
    };

    question.addEventListener("click", toggleItem);
    question.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      toggleItem();
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
      threshold: 0.12,
    },
  );

  animatedTargets.forEach((target) => observer.observe(target));

  const fadeinTargets = document.querySelectorAll(".fadein");

  if (fadeinTargets.length > 0) {
    const fadeinObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("scrollin");
          fadeinObserver.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.1,
      },
    );

    fadeinTargets.forEach((target) => fadeinObserver.observe(target));
  }

  const countupEl = document.querySelector(".countup");
  if (countupEl) {
    const target = parseInt(countupEl.textContent.replace(/,/g, ""), 10);
    const duration = 500;

    const runCountup = () => {
      const start = performance.now();
      const tick = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);
        countupEl.textContent = current.toLocaleString("ja-JP");
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const countupObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          runCountup();
          countupObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.5 },
    );

    countupObserver.observe(countupEl);
  }
})();
