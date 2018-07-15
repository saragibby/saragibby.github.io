$(".photos").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  lazyLoad: "ondemand",
});

$(".photos").slickLightbox({
  itemSelector: "a",
  navigateByKeyboard: true
});
