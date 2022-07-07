import headerImg from "images/header-bg.png";

export const Header = () => {
  return (
    <>
      <section id="header">
        <img src={headerImg} alt="bg" className="w-full " />
        <p className="xl:w-1/2 w-[90%] m-auto mt-[72px]">
          Cụ Nguyễn Đình Chiểu là một nhà thơ lớn, một thầy thuốc nổi tiếng
          trong lịch sử nước ta. Sau khi cụ mất, lăng mộ của cụ dần đã được cây
          thành khu đền thờ để tưởng niệm công lao của cụ. Ngày nay, khi có dịp
          về Bến Tre, du khách có thể tranh thủ ghé qua ấp Giồng Cát, xã An Đức,
          huyện Ba Tri, tỉnh Bến Tre để viếng khu đền thờ lăng mộ cụ Nguyễn Đình
          Chiểu.
        </p>
      </section>
    </>
  );
};
