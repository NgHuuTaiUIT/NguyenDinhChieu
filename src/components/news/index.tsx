import Title from "components/common//title";
import { Button } from "components/common/button";
import Carousel from "components/common/carousel";
import { useTranslation } from "react-i18next";
import { getNewsData } from "utils/getData";
const News = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  const newsData = getNewsData();
  const items = newsData.news.news_vi.map((data, idx) => (
    <>
      <img src={data.image_url} alt="..." className="object-cover m-auto" />
      <a
        className="text-[48px] leading-[81px] max-w-[970px] mx-auto font-[500] my-[36px] text-header-cl block w-3/4 sm:w-[90%]"
        target={"_blank"}
        rel="noreferrer"
        href={data.origin_url}>
        {/* {data.title} */}
        {t(`news_content.0.title`)}
      </a>
      <a
        type="button"
        target={"_blank"}
        rel="noreferrer"
        href={data.origin_url}>
        <Button text="btn_text" />
      </a>
    </>
  ));
  return (
    <section id="news">
      <div className="max-w-4/5  m-auto text-center">
        <Title text="news" />
        <Carousel items={items} />
      </div>
    </section>
  );
};

export default News;
