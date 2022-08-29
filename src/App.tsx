import "./App.scss";
import Copy from "./components/footer";
import Gallary from "./components/gallary";
import Header from "./components/header";
import News from "./components/news";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import VRTour from "./components/vr-tour/index";
import { getData } from "utils/getData";
import { cloneDeep } from "lodash";
import { useGetData } from "hooks/useGetData";
import { BrowserRouter as Router, Route } from "react-router-dom";

function AppRouter() {
  const data = useGetData();
  const lg_vn_test = {
    ...data?.header_content.content_vi,
    news_content: data?.news.news_vi
  };
  const lg_en_test = {
    ...data?.header_content.content_en,
    news_content: data?.news.news_en
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
  return (
    <div className="app bg-bg-cl">
      <Header />;
      <VRTour />
      <News />
      <Gallary />
      <Copy content="copy" />
    </div>
  );
}

function App() {
    return  <Router basename={process.env.PUBLIC_URL}>
      <Route exact path={``} component={AppRouter} />   
    </Router>

} 

export default App;
