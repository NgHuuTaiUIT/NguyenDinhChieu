import { useState } from "react";
import img1 from "/images/img-news-1.png";

const arrImages = [img1, img1, img1, img1, img1, img1];
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    currentSlide < arrImages.length - 1
      ? setCurrentSlide(currentSlide + 1)
      : setCurrentSlide(0);
  };
  const preSlide = () => {
    currentSlide > 0
      ? setCurrentSlide(currentSlide - 1)
      : setCurrentSlide(arrImages.length);
  };
  return (
    <section>
      <div className="slider relative h-[503px] w-[1196px] columns-1 m-auto overflow-hidden">
        <button
          className="absolute top-3/4 left-8  z-10 cursor-pointer select-none w-20 h-20 rounded-full border-btn-cl border-solid border-2"
          onClick={preSlide}>
          <span className="chevron"></span>
        </button>
        <button
          className="rotate-90 absolute top-3/4 right-8  z-10 cursor-pointer select-none w-20 h-20 rounded-full border-btn-cl border-solid border-2"
          onClick={nextSlide}>
          <span className="chevron "></span>
        </button>
        <ul
          className="w-full ease-in-out transition-transform flex"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`
          }}>
          {arrImages.map((slider, idx) => (
            <li className="min-w-100%">
              <img
                src={slider}
                alt="..."
                className={`object-cover m-auto max-w-[970px] ${
                  currentSlide === idx ? "opacity-1" : "opacity-0"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Carousel;
