document.addEventListener("DOMContentLoaded", function() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const totalImages = images.length;
    const imageWidth = images[0].clientWidth;
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let index = 0;
  
    // Set width of carousel container
    carouselSlide.style.width = imageWidth * totalImages + 'px';
  
    function slide(direction) {
      if (direction === 'right') {
        index++;
        if (index === totalImages) {
          index = 0;
        }
      } else {
        index--;
        if (index < 0) {
          index = totalImages - 1;
        }
      }
      carouselSlide.style.transition = 'transform 0.5s ease-in-out';
      carouselSlide.style.transform = `translateX(-${index * imageWidth}px)`;
    }
  
    prevBtn.addEventListener('click', function() {
      slide('left');
    });
  
    nextBtn.addEventListener('click', function() {
      if (index === totalImages - 1) {
        carouselSlide.style.transition = 'none';
        index = -1;
      }
      slide('right');
    });
  });
  