(function initTagReveal() {
  const tags = document.querySelectorAll('.skills-grid .tag');
  if (!tags.length || !('IntersectionObserver' in window)) {
    tags.forEach(t => t.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('in-view'), i * 25);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  tags.forEach(tag => observer.observe(tag));
})();
