import Title from "components/common//title";
import { Button } from "components/common/button";
import Carousel from "components/common/carousel";
import Slider from "components/common/slider";
import { useWindowSize } from "hooks/useWindowSize";
import { useTranslation } from "react-i18next";
import { getNewsData } from "utils/getData";
const News = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();
  const { width } = useWindowSize();
  const newsData = getNewsData();
  const items = newsData.news.news_vi.map((data, idx) => (
    <li className="max-w-[1200px]" style={{ width }}>
      <img src={data.image_url} alt="..." className="object-cover m-auto" />
      <a
        className="text-[48px] leading-[81px] max-w-[970px] mx-auto font-[500] my-[36px] text-header-cl block w-3/4 sm:w-[90%]"
        target={"_blank"}
        rel="noreferrer"
        href={data.origin_url}>
        {/* {data.title} */}
        {t(`news_content.${idx}.title`)}
      </a>
      <a
        type="button"
        target={"_blank"}
        rel="noreferrer"
        href={data.origin_url}>
        <Button text="btn_text" />
      </a>
    </li>
  ));
  return (
    <section id="news">
      <div className="max-w-4/5  m-auto text-center">
        <Title text="news" />
        <Slider slides={items} visibleItemsNumber={1}></Slider>
      </div>
    </section>
  );
};

export default News;
