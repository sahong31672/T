
$(".full-landing-image").ripples({
  resolution: 500, // 렌더링 값이 클수록 잔물결 효과가 느리게 전파
  perturbance: 0.005, // 잔물경 굴절 강도. 0은 굴절 없음
});

var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 1,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   }
// });