(() => {
  const header = document.querySelector('.top-header');
  if (!header) return;
  let lastY = window.scrollY;
  let ticking = false;

  const update = () => {
    const y = window.scrollY;
    const delta = y - lastY;
    const navOpen = document.querySelector('.top-nav.open');

    if (y < 80 || navOpen) {
      header.classList.remove('is-hidden');
    } else if (delta > 6) {
      header.classList.add('is-hidden');
    } else if (delta < -6) {
      header.classList.remove('is-hidden');
    }
    lastY = y;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
})();
