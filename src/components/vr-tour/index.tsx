import Title from "components/common/title";

export const VRTour = ({ style }: { style?: string }) => {
  return (
    <>
      <section id="vr-tour">
        <Title text={"Triển lãm ảo"} />
        <p className=" max-w-[90%] m-auto mb-[72px]">
          Tham quan, khám phá cuộc đời và sự nghiệp của Nguyễn Đình Chiểu với
          công nghệ thực tế ảo 360 VR
        </p>
        <div>
          <iframe
            id="iframe_tour_vr"
            src="https://ngayhoivanhoadoc.hochiminhcity.gov.vn/vrtour/"
            className="h-[650px] max-w-[1440px] w-full m-auto px-2"
            title="iframe-vr-tour"
          />
        </div>
      </section>
    </>
  );
};
