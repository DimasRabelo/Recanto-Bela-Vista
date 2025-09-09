$(function() {
  // === Slick Carousel ===
  $('.galeria').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2800,
    responsive: [
      {
        breakpoint: 768,
        settings: { arrows: false, centerMode: true, centerPadding: '40px', slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { arrows: false, centerMode: true, centerPadding: '20px', slidesToShow: 1 }
      }
    ]
  });

  // === Slideshow principal ===
  const slides = document.querySelectorAll('#slideshow img');
  let current = 0;
  setInterval(() => {
    slides[current].classList.replace('opacity-100', 'opacity-0');
    current = (current + 1) % slides.length;
    slides[current].classList.replace('opacity-0', 'opacity-100');
  }, 4000);

  // === Pausar vídeos ao trocar slide do Bootstrap ===
  const videos = document.querySelectorAll('.video');
  const carousel = document.getElementById('carouselExample');

  if (carousel) {
    carousel.addEventListener('slid.bs.carousel', () => {
      videos.forEach(video => {
        video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      });
    });
  }
});
// Fim do script.js