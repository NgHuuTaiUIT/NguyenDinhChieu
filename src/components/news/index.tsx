import Carousel from "components/common/carouselv2";
import Title from "components/common//title";
import img1 from "images/img-news-1.png";

const arrImages = [img1, img1, img1, img1, img1, img1];

export const News = () => {
  const items = arrImages.map((slider, idx) => (
    <img src={slider} alt="..." className="object-cover m-auto" />
  ));
  return (
    <section>
      <div className="max-w-4/5  m-auto text-center">
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
