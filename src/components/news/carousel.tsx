import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import Card from "./Card";
import styles from "./style.module.scss";

const Carousel = ({ slides }: any) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={"bg-primary-bg xl:max-w-[1440px] w-[80%] m-auto " + styles.sliderWrapper}>
      <div>
        <Slider {...settings} >
          {/* {data.items.map((item, idx) => (
            <div key={idx} className="px-2">
              <Card data={item} />
            </div>
          ))} */}
          {slides.map((slide: any) => slide)}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
