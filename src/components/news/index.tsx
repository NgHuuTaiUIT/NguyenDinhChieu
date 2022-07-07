import Carousel from "components/common/carousel";
import Title from "components/common//title";
import { getNewsData } from "utils/getData";

export const News = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);

  const newsData = getNewsData();
  const items = newsData.news.map((data, idx) => (
    <>
      <img src={data.image_url} alt="..." className="object-cover m-auto" />
      <a
        className="text-[48px] leading-[81px] max-w-[970px] mx-auto font-[500] my-[36px] text-header-cl block"
        target={"_blank"}
        rel="noreferrer"
        href={data.origin_url}>
        {data.title}
      </a>
      <a
        type="button"
        target={"_blank"}
        rel="noreferrer"
        href={data.origin_url}>
        <div className="rounded-lg border-2 border-header-cl w-[256.24px] h-[87.74px] flex items-center justify-center m-auto ">
          <span className="text-header-cl text-[32px] leading-[50px]">
            Xem thêm
          </span>
        </div>
      </a>
    </>
  ));
  return (
    <section>
      <div className="max-w-4/5  m-auto text-center">
        <Title text="Tin tức" />
        <Carousel items={items} />
      </div>
    </section>
  );
};
