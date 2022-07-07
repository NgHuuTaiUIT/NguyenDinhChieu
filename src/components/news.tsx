import Carousel from "./carouselv2";
import Title from "./title";
import img1 from "../images/img-news-1.png";
import img2 from "../images/img-2.png";
import img3 from "../images/img-3.png";
import img4 from "../images/img-4.png";
import img5 from "../images/img-5.png";
import img6 from "../images/img-6.png";
const arrImages = [img1, img2, img3, img4, img5, img6];

export const News = () => {
  const items = arrImages.map((slider, idx) => (
    <img src={slider} alt="..." className="object-cover m-auto" />
  ));
  return (
    <section>
      <div className="max-w-4/5 m-auto text-center">
        <Title text="Tin tức" />
        <Carousel items={items} />
        <h2 className="text-[48px] leading-[81px] max-w-[970px] m-auto font-[500] my-[36px] text-header-cl">
          Tham quan, khám phá cuộc đời và sự nghiệp của Nguyễn Đình Chiểu với
          công nghệ thực tế ảo 360 VR
        </h2>
        <button className="rounded-lg border-2 border-header-cl w-[256.24px] h-[87.74px]">
          <span className="text-header-cl text-[32px] leading-[50px]">
            Xem thêm
          </span>
        </button>
      </div>
    </section>
  );
};
