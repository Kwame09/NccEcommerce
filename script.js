window.onload = () => { 
  const menuToggle = document.querySelector('.menu-toggle'); 
  const nav = document.querySelector('nav'); 
  menuToggle.addEventListener('click', () => { nav.classList.toggle('show'); 
}); 
}; 

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
// Get the modal elements
var modals = document.getElementsByClassName('modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// Loop through the modals and add click event listeners to each one
for (var i = 0; i < modals.length; i++) {
  modals[i].style.display = "none";
  
  // Open the modal on click
  modals[i].addEventListener("click", function() {
    this.style.display = "block";
  });
  
  // Close the modal on click of the close button
  spans[i].addEventListener("click", function() {
    for (var j = 0; j < modals.length; j++) {
      modals[j].style.display = "none";
    }
  });
}

// Add a click event listener to the document to close the modal if the user clicks outside of it
document.addEventListener("click", function(event) {
  if (event.target.classname === "modal-content") {
    for (var j = 0; j < modals.length; j++) {
      modals[j].style.display = "none";
    }
  }
});