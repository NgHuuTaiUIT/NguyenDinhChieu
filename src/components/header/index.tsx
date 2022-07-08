import headerImg from "assets/images/header-bg.png";
import { Button } from "components/common/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const Header = () => {
  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState<string>(i18n.language);

  const handleChangeLanguage = (lg: string) => {
    i18n.changeLanguage(lg);
    setCurrentLanguage(lg);
  };

  return (
    <>
      <section id="header">
        <div className="relative">
          <img src={headerImg} alt="bg" className="w-full " />
          <div className="absolute flex md:top-10 md:right-12 top-2 right-2">
            <Button
              active={currentLanguage === "en"}
              text="EN"
              style="sm:text-[29px] text-[15px] text-btn-cl sm:h-[60px] sm:w-[70px] h-[30px] w-[35px] mr-5 cursor-pointer"
              handleClick={() => handleChangeLanguage("en")}
            />
            <Button
              active={currentLanguage === "vi"}
              text="VN"
              style="sm:text-[29px] text-[15px] text-btn-cl sm:h-[60px] sm:w-[70px] h-[30px] w-[35px] cursor-pointer"
              handleClick={() => handleChangeLanguage("vi")}
            />
          </div>
        </div>
        <p className="xl:w-1/2 w-[90%] m-auto mt-[72px]">
          {t("header_content")}
        </p>
      </section>
    </>
  );
};
export default Header;
