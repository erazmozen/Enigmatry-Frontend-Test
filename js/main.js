function toggleClass(base, toggle) {
  const e = document.querySelector(base);
  e.classList.toggle(toggle);
}

function toggleLightbox() {
  toggleClass(".lightbox", "close-lightbox");
  toggleClass("body", "stop-scroll");
}

function submitContact() {
  alert("Your message was sent. Thanks for contacting us!");
  toggleLightbox();
}

function fakeLinkToggle(id) {
  const e = document.getElementById(id);
  e.classList.toggle("active");
}
