import { useTranslation } from "react-i18next";
const Footer = ({ content }: { content: string }) => {
  const { t } = useTranslation();
  return (
    <section id="footer">
      <div className="text-center">
        <span className="font-medium text-[25px] leading-[48px] w-4/5  font-roboto">
          {t(content)}
        </span>
      </div>
    </section>
  );
};
export default Footer;
