import Title from "components/common//title";
import { Button } from "components/common/button";
import Slider from "components/common/slider";
import { useWindowSize } from "hooks/useWindowSize";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getData } from "utils/getData";
import clone from "lodash/cloneDeep";
import { useLocation } from "react-router-dom";
import Carousel from "./carousel";
interface NewsData {
  news_count: number;
  news: {
    news_vi: {
      title: string;
      origin_url: string;
      image_url: string;
      description: string;
    }[];
    news_en: {
      title: string;
      origin_url: string;
      image_url: string;
      description: string;
    }[];
  };
}

const News = () => {
  const [newsData, setNewsData] = useState<NewsData>();
  const { t } = useTranslation();
  const { width } = useWindowSize();
  useEffect(() => {
    const api = async () => {
      await fetch(`${process.env.PUBLIC_URL}/assets/data/data.json`, {
        method: "GET"
      })
        .then(res => res.json())
        .then(res => {
          return res;
        })
        .then(data => {
          const tempData = clone(data);
          setNewsData(clone(tempData));
          console.log(tempData);
        });
    };
    api();
  }, []);

  const items = newsData?.news.news_vi.map(
    (
      data: {
        title: string;
        origin_url: string;
        image_url: string;
        description: string;
      },
      idx: number
    ) => (
      <li className="max-w-[1440px]  px-3" style={{ width }} key={idx}>
        <img
          src={data.image_url}
          alt="..."
          className="m-auto max-w-full min-h-[500px] object-cover"
        />
        <a
          className="text-[32px] max-w-[1440px] mx-auto font-[500] my-[16px] text-header-cl block w-full sm:w-[100%] overflow-hidden text-ellipsis px-md-3"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical"
          }}
          title={t(`news_content.${idx}.title`)}
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
          {/* <Button text="btn_text" /> */}
          <p
            className="m-auto overflow-hidden text-ellipsis"
            style={{
              fontSize: "20px",
              display: "-webkit-box",
              WebkitLineClamp: "4",
              WebkitBoxOrient: "vertical"
            }}
            title={t(`news_content.${idx}.description`)}>
            {t(`news_content.${idx}.description`)}
          </p>
        </a>
      </li>
    )
  );
  return (
    <section id="news">
      <div className="m-auto overflow-hidden text-center max-w-4/5">
        <Title text="news" />
        {/* <Slider slides={items ?? []} visibleItemsNumber={3}></Slider> */}
        <Carousel slides={items ?? []}></Carousel>
      </div>
    </section>
  );
};

export default News;
