import Title from "./title";

export const VRTour = ({ style }: { style?: string }) => {
  return (
    <>
      <section id="vr-tour">
        <Title text={"Triển lãm ảo"} />
        <p className="text-center font-normal text-[25px] leading-[43px] w-4/5 m-auto mb-[72px]">
          Tham quan, khám phá cuộc đời và sự nghiệp của Nguyễn Đình Chiểu với
          công nghệ thực tế ảo 360 VR
        </p>
        {/* <div className="bg-bg-cl w-[1000px] h-[1000px] m-auto"></div> */}
      </section>
    </>
  );
};
