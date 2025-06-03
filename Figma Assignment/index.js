 // video//
 const video = document.getElementById('featureVideo');
  const playIcon = document.getElementById('playIcon');

  // Toggle play/pause on click
  video.parentElement.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playIcon.classList.add('hidden');
    } else {
      video.pause();
      playIcon.classList.remove('hidden');
    }
  });

  // Show play icon again when video ends
  video.addEventListener('ended', () => {
    playIcon.classList.remove('hidden');
  });

  // circle button//
const buttons = document.querySelectorAll(".circle-button");
  const testimonials = document.querySelectorAll(".testimonial");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const index = +button.getAttribute("data-index");

      testimonials.forEach(t => t.classList.remove("active"));
      buttons.forEach(b => b.classList.remove("active"));

      testimonials[index].classList.add("active");
      button.classList.add("active");
    });
  });
// contact form//
const form = document.getElementById('contact-form');
    const modal = document.getElementById('successModal');
    const closeBtn = document.querySelector('.close-modal');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (form.checkValidity()) {
        modal.style.display = 'block';
        form.reset();
      }
    });

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });