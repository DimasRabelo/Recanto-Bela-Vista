 
  
    const slides = document.querySelectorAll('#slideshow img');
    let current = 0;
    function showNextSlide() {
      slides[current].classList.remove('opacity-100');
      slides[current].classList.add('opacity-0');
      current = (current + 1) % slides.length;
      slides[current].classList.remove('opacity-0');
      slides[current].classList.add('opacity-100');
    }
    setInterval(showNextSlide, 4000);
  

   // Slick Carousel Initialization 
$('.galeria').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  autoplay: true,           // Ativa o autoplay
  autoplaySpeed: 3000,      // 3000ms = 3 segundos por slide
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


 var videos = document.querySelectorAll('.video');

    function stopVideos() {
        videos.forEach(function(video) {
            video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        });
    }

    var carousel = document.getElementById('carouselExample');
    carousel.addEventListener('slid.bs.carousel', stopVideos);

