function Arrow({ className, extraClass, onClick, icon }) {
  return (
    <button className={`${className} ${extraClass}`} onClick={onClick}>
      <i class={icon}></i>
    </button>
  );
}
export const sliderProps = {
  teamSlider: {
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    speed: 400,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  },
  clientLogo: {
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    speed: 400,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  },
  testimonialsActive: {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    speed: 400,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  },
  testimonialsTwoActive: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 400,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
  },
  workingProcessTwoActive: {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  },
  BlogActive: {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  },
  marqueeSliderRight: {
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  },
  marqueeSliderLeft: {
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: -1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: true,
    rtl: true,
  },
  testimonialsFourActive: {
    infinite: true,
    speed: 400,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  },
  testimonialFiveSlider: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    speed: 400,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
  },
  mainSliderActive: {
    infinite: true,
    arrows: true,
    dots: false,
    fade: true,
    autoplay: true,
    prevArrow: <Arrow extraClass="prev-arrow" icon="fal fa-angle-left" />,
    nextArrow: <Arrow extraClass="next-arrow" icon="fal fa-angle-right" />,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToScroll: 1,
    slidesToShow: 1,
  },
  serviceFourSlider: {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    speed: 400,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
};
