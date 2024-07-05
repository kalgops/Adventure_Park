// Select elements for menu, search, cancel buttons, navigation items, and form
const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");

// Function to handle menu button click
menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}

// Function to handle cancel button click
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
}

// Function to handle search button click
searchBtn.onclick = () => {
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}

// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

// Function to change slides
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to set the current slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to display slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Function to redirect to the checkout page
function redirectToCheckout() {
    window.location.href = 't&p.html';
}

// Testimonial slider functionality
document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const testimonialContainer = document.querySelector('.testimonial-container');
  let currentIndex = 0;

  // Function to handle previous button click
  prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
          updateTestimonialPosition();
      }
  });

  // Function to handle next button click
  nextButton.addEventListener('click', () => {
      if (currentIndex < document.querySelectorAll('.box').length - 1) {
          currentIndex++;
          updateTestimonialPosition();
      }
  });

  // Function to update the position of testimonials
  function updateTestimonialPosition() {
      testimonialContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
});

// Carousel functionality
document.addEventListener("DOMContentLoaded", function() { 
	const carousel = document.querySelector(".carousel"); 
	const arrowBtns = document.querySelectorAll(".wrapper i"); 
	const wrapper = document.querySelector(".wrapper"); 

	const firstCard = carousel.querySelector(".card"); 
	const firstCardWidth = firstCard.offsetWidth; 

	let isDragging = false, 
		startX, 
		startScrollLeft, 
		timeoutId; 

  // Function to handle drag start
	const dragStart = (e) => { 
		isDragging = true; 
		carousel.classList.add("dragging"); 
		startX = e.pageX; 
		startScrollLeft = carousel.scrollLeft; 
	}; 

  // Function to handle dragging
	const dragging = (e) => { 
		if (!isDragging) return; 

		const newScrollLeft = startScrollLeft - (e.pageX - startX); 

		if (newScrollLeft <= 0 || newScrollLeft >= 
			carousel.scrollWidth - carousel.offsetWidth) { 
			
			isDragging = false; 
			return; 
		} 

		carousel.scrollLeft = newScrollLeft; 
	}; 

  // Function to handle drag stop
	const dragStop = () => { 
		isDragging = false; 
		carousel.classList.remove("dragging"); 
	}; 

  // Function to auto play carousel
	const autoPlay = () => { 

		if (window.innerWidth < 800) return; 

		const totalCardWidth = carousel.scrollWidth; 
		
		const maxScrollLeft = totalCardWidth - carousel.offsetWidth; 	

		if (carousel.scrollLeft >= maxScrollLeft) return; 
		
		timeoutId = setTimeout(() => 
			carousel.scrollLeft += firstCardWidth, 2500); 
	}; 

  // Event listeners for dragging functionality
	carousel.addEventListener("mousedown", dragStart); 
	carousel.addEventListener("mousemove", dragging); 
	document.addEventListener("mouseup", dragStop); 

  // Event listeners for auto play functionality
	wrapper.addEventListener("mouseenter", () => 
		clearTimeout(timeoutId)); 
	wrapper.addEventListener("mouseleave", autoPlay); 

  // Event listeners for arrow buttons
	arrowBtns.forEach(btn => { 
		btn.addEventListener("click", () => { 
			carousel.scrollLeft += btn.id === "left" ? 
				-firstCardWidth : firstCardWidth; 
		}); 
	}); 
}); 
