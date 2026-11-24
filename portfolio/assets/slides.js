for (const viewer of document.querySelectorAll('.slide-viewer')) {
  const slides = Array.from(viewer.querySelector('.slides').children);
  const pager = viewer.querySelector('.pager');
  const [back, next] = pager.querySelectorAll('button');
  const status = pager.querySelector('[aria-live]');
  const jump = viewer.querySelector('.jump');
  const select = jump?.querySelector('select');
  let current = 0;

  function showSlide(index) {
    current = Math.max(0, Math.min(index, slides.length - 1));
    slides.forEach((slide, position) => { slide.hidden = position !== current; });
    back.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    status.textContent = `Slide ${current + 1} of ${slides.length}`;
    if (select) select.value = String(current);
  }

  back.addEventListener('click', () => showSlide(current - 1));
  next.addEventListener('click', () => showSlide(current + 1));
  if (select) {
    select.addEventListener('change', () => showSlide(Number(select.value)));
    jump.hidden = false;
  }
  showSlide(0);
  pager.hidden = false;
}
