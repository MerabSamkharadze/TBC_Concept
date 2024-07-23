document.addEventListener("DOMContentLoaded", () => {
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  const swiperSlides = document.querySelectorAll(".swiper-slide");
  const prevButton = document.querySelector(".swiper-button-prev");
  const nextButton = document.querySelector(".swiper-button-next");

  let currentIndex = 0;
  const totalSlides = swiperSlides.length;
  const slideWidth = swiperSlides[0].offsetWidth + 30; // Including margin

  function updateSwiper() {
    const transformValue = -currentIndex * slideWidth;
    swiperWrapper.style.transform = `translateX(${transformValue}px)`;
  }
  prevButton.style.color = "gray";
  prevButton.addEventListener("click", () => {
    prevButton.style.color = "gray";
    nextButton.style.color = "rgb(11, 63, 159)";

    if (currentIndex > 0) {
      currentIndex--;
      updateSwiper();
    }
  });

  nextButton.addEventListener("click", () => {
    prevButton.style.color = "rgb(11, 63, 159)";
    nextButton.style.color = "grey";
    if (currentIndex < totalSlides - 3) {
      currentIndex++;
      updateSwiper();
    }
  });
});
