window.onload = () => { 

  const menuToggle = document.querySelector('.menu-toggle'); 
  const nav = document.querySelector('nav'); 
  menuToggle.addEventListener('click', () => { nav.classList.toggle('show'); 
}); 
}; 

const riseDesk = document.querySelector('#RiseDesk');
console.log(riseDesk);
riseDesk?.addEventListener("click", ()=>{
  const riseDeskdiplay = document.querySelector('.dropdown-menu').style.display
  if (riseDeskdiplay == "none"){
    document.querySelector(".dropdown-menu").style.display="block";
    }else{document.querySelector(".dropdown-menu").style.display="none"}
});






/*Video section*/
const video = document.querySelector('.video-section video');

video.addEventListener('click', () => {
  video.play();
  video.muted = false; // Unmute when clicked
});


/*Carousel*/
if (window.location.pathname.includes('index.html')){
  const slides = document.querySelector('.carousel-slides')
  const nextBtn = document.querySelector('.carousel-next')
  const prevBtn = document.querySelector('.carousel-previous')

  let currentSlide = 0

  nextBtn.addEventListener('click', function() {
    currentSlide++
    if (currentSlide >= slides.children.length) {
      currentSlide = 0
    }
    slides.style.transform = `translateX(-${currentSlide * 50}%)`
  })

  prevBtn.addEventListener('click', function() {
    currentSlide--
    if (currentSlide < 0) {
      currentSlide = slides.children.length - 1
    }
    slides.style.transform = `translateX(-${currentSlide * 50}%)`
  })

  setInterval(function() {
    nextBtn.click() // Simulate a click on the next button
  }, 3000) // Change the interval (3000 milliseconds = 3 seconds) as needed
}


//Modal 
window.onload = function() {
  const popupModal = document.getElementById('popupModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  popupModal.style.display = 'flex';

  closeModalBtn.addEventListener('click', function () {
      popupModal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
      if (event.target === popupModal) {
          popupModal.style.display = 'none';
      }
  });
}