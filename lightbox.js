function openLightbox(element) {
  var lightbox = element.nextElementSibling;
  lightbox.style.display = "block";
}

function closeLightbox() {
  var lightboxes = document.getElementsByClassName("lightbox-overlay");
  for (var i = 0; i < lightboxes.length; i++) {
    lightboxes[i].style.display = "none";
  }
}
