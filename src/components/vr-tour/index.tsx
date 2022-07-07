import Title from "components/common/title";
import { useTranslation } from "react-i18next";

const VRTour = ({ style }: { style?: string }) => {
  const { t } = useTranslation();
  return (
    <>
      <section id="vr-tour">
        <Title text="vr" />
        <p className=" max-w-[90%] m-auto mb-[72px]">{t("vr_content")}</p>
        <iframe
          id="iframe_tour_vr"
          src="https://ngayhoivanhoadoc.hochiminhcity.gov.vn/vrtour/"
          className="h-[650px] max-w-[1440px] w-full m-auto px-2"
          title="iframe-vr-tour"
        />
      </section>
    </>
  );
};

export default VRTour;
