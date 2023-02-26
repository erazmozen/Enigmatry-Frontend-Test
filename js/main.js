function toggleClass(base, toggle) {
  const e = document.querySelector(base);
  e.classList.toggle(toggle);
}

function toggleLightbox() {
  toggleClass(".lightbox", "close-lightbox");
  toggleClass("body", "stop-scroll");
}
