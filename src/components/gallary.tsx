import Title from "./title";
import img1 from "../images/img-1.png";
import img2 from "../images/img-2.png";
import img3 from "../images/img-3.png";
import img4 from "../images/img-4.png";
import img5 from "../images/img-5.png";
import img6 from "../images/img-6.png";
import Carousel from "./carouselv2";

const arrImages = [img1, img2, img3, img4, img5, img6];

export const Gallary = () => {
  const renderImage = () =>
    arrImages.map((item, idx) => (
      <img
        src={item}
        alt={`img-${idx}`}
        key={`img-${idx}`}
        className={`m-auto ${idx > 2 ? "md:mt-9" : "md:mt-0"}`}
      />
    ));
  return (
    <>
      <section id="gallary">
        <div className="max-w-[1200px] m-auto ">
          <Title text="Thư viện" />
          <div className=" flex-wrap justify-between xl:flex hidden">
            {renderImage()}
          </div>
          <div className=" flex-wrap justify-between  xl:hidden block">
            <Carousel items={renderImage()} />
          </div>
        </div>
      </section>
    </>
  );
};
