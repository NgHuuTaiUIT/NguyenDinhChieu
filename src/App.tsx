import "./App.scss";
import Copy from "./components/footer";
import { Gallary } from "./components/gallary";
import { Header } from "./components/header";
import { News } from "./components/news";
import { VRTour } from "./components/vr-tour";
import data from "./utils/data.json";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const lg_vn_test = {
  news: "Tin tức",
  vr: "Triển lãm ảo",
  vr_content:
    "Tham quan, khám phá cuộc đời và sự nghiệp của Nguyễn Đình Chiểu với công nghệ thực tế ảo 360 VR",

  gallery: "Thư viện",
  header_content:
    "Cụ Nguyễn Đình Chiểu là một nhà thơ lớn, một thầy thuốc nổi tiếng trong lịch sử nước ta. Sau khi cụ mất, lăng mộ của cụ dần đã được cây thành khu đền thờ để tưởng niệm công lao của cụ. Ngày nay, khi có dịp về Bến Tre, du khách có thể tranh thủ ghé qua ấp Giồng Cát, xã An Đức, huyện Ba Tri, tỉnh Bến Tre để viếng khu đền thờ lăng mộ cụ Nguyễn Đình Chiểu.",
  copy: "Bản quyền © 2022 Sgallery. Đã đăng ký Bản quyền",
  btn_text: "Xem thêm",
  news_content: data.news.news_vi
};

const lg_en_test = {
  news: "News",
  vr: "VR tour",
  vr_content:
    "Visit and discover the life and career of Nguyen Dinh Chieu with virtual reality technology 360 VR",
  gallery: "Gallery",
  header_content:
    "Nguyen Dinh Chieu is a great poet, a famous physician in the history of our country. After his death, his tomb was gradually turned into a temple to commemorate his merits. Today, when having the opportunity to return to Ben Tre, tourists can take advantage of visiting Giong Cat hamlet, An Duc commune, Ba Tri district, Ben Tre province to visit the temple and tomb of Nguyen Dinh Chieu.",
  copy: "Copyright © 2022 Gallery. Registered Copyright",
  btn_text: "See more",
  news_content: data.news.news_en
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: lg_en_test
      },
      vi: {
        translation: lg_vn_test
      }
    },
    lng: "vi", // if you're using a language detector, do not define the lng option
    fallbackLng: "vi",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

function App() {
  return (
    <div className="app bg-bg-cl">
      <Header />;
      <VRTour />
      <News />
      <Gallary />
      <Copy content="Copyright © 2022 Sgallery. All rights reserved" />
    </div>
  );
}

export default App;
