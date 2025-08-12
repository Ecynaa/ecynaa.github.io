document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const children = [...entry.target.children];
        children.forEach((child, i) => {
          child.style.transitionDelay = `${i * 0.15}s`;
        });
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
});
