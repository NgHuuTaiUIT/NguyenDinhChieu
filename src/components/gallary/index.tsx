import img1 from "assets/images/img-1.png";
import img2 from "assets/images/img-2.png";
import img3 from "assets/images/img-3.png";
import img4 from "assets/images/img-4.png";
import img5 from "assets/images/img-5.png";
import img6 from "assets/images/img-6.png";
import Carousel from "components/common/carousel";
import Title from "components/common/title";

const arrImages = [img1, img2, img3, img4, img5, img6];

export const Gallary = () => {
  const items = arrImages.map((item, idx) => (
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
          <Title text="gallery" />
          <div className=" flex-wrap justify-between xl:flex hidden">
            {items}
          </div>
          <div className=" flex-wrap justify-between  xl:hidden block">
            <Carousel items={items} />
          </div>
        </div>
      </section>
    </>
  );
};
