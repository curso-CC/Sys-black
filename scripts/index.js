const slider = document.querySelectorAll(".slider");

const btnPrev = document.getElementById("prev-button");

const btnNext = document.getElementById("next-button");


let currentSlide = 0;

const hideSlider = () => {
	slider.forEach(item => {
		item.classList.remove("on");
	});
}

const showSlider = () => {
	slider[currentSlide].classList.add("on");
}

const nextSlide = () => {
	hideSlider();
	if (currentSlide === slider.length - 1) {
		currentSlide = 0;
	} else {
		currentSlide++;
	}
	showSlider();
}
const prevSlide = () => {
	hideSlider();
	if (currentSlide === 0) {
		currentSlide = slider.length - 1;
	} else {
		currentSlide--;
	}
	showSlider();
}

btnNext.addEventListener('click', nextSlide)


btnPrev.addEventListener('click', prevSlide)
