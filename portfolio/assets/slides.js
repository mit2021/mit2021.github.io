for (const viewer of document.querySelectorAll('.slide-viewer')) {
  const slides = Array.from(viewer.querySelectorAll('.slides img'));
  const pager = viewer.querySelector('.pager');
  const [back, next] = pager.querySelectorAll('button');
  const status = pager.querySelector('[aria-live]');
  let current = 0;
  function showSlide(index) {
    current = Math.max(0, Math.min(index, slides.length - 1));
    slides.forEach((slide, i) => { slide.hidden = i !== current; });
    back.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    status.textContent = `Slide ${current + 1} of ${slides.length}`;
  }
  back.addEventListener('click', () => showSlide(current - 1));
  next.addEventListener('click', () => showSlide(current + 1));
  showSlide(0);
  pager.hidden = false;
}
