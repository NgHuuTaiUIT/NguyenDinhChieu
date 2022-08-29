import { cloneDeep } from "lodash";
import { useEffect, useState } from "react";

interface NewsData {
  header_content: {
    content_en: {
      news: string,
      vr: string,
      vr_content: string,
      gallery: string,
      header_content: string,
      copy: string,
      btn_text: string
    },
    content_vi: {
      news: string,
      vr: string,
      vr_content: string,
      gallery: string,
      header_content: string,
      copy: string,
      btn_text: string
    },
  }
  news_count: number;
  news: {
    news_vi: {
      title: string;
      origin_url: string;
      image_url: string;
    }[];
    news_en: {
      title: string;
      origin_url: string;
      image_url: string;
    }[];
  };
}

export const useGetData = () => {
  const [newsData, setNewsData] = useState<NewsData>();
  useEffect(() => {
    const api = async () => {
      await fetch("assets/data/data.json", {
        method: "GET"
      })
        .then(res => res.json())
        .then(res => {
          return res;
        })
        .then(data => {
          const tempData = cloneDeep(data);
          setNewsData(cloneDeep(tempData));
          console.log(tempData);
        });
    };
    api();
  }, []);
  return newsData;
};
