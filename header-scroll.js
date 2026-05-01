(() => {
  const header = document.querySelector('.top-header');
  if (!header) return;

  let lastY = window.scrollY;
  let accumDown = 0;
  let accumUp = 0;
  let ticking = false;
  let hideTimer = null;
  const HIDE_THRESHOLD = 40;
  const SHOW_THRESHOLD = 12;
  const HIDE_DELAY = 140;

  const cancelPendingHide = () => {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
  };

  const update = () => {
    const y = window.scrollY;
    const delta = y - lastY;
    const navOpen = document.querySelector('.top-nav.open');

    if (y < 80 || navOpen) {
      cancelPendingHide();
      header.classList.remove('is-hidden');
      accumDown = 0;
      accumUp = 0;
    } else if (delta > 0) {
      accumDown += delta;
      accumUp = 0;
      if (accumDown > HIDE_THRESHOLD && !hideTimer && !header.classList.contains('is-hidden')) {
        hideTimer = setTimeout(() => {
          header.classList.add('is-hidden');
          hideTimer = null;
        }, HIDE_DELAY);
      }
    } else if (delta < 0) {
      accumUp += -delta;
      accumDown = 0;
      if (accumUp > SHOW_THRESHOLD) {
        cancelPendingHide();
        header.classList.remove('is-hidden');
      }
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
