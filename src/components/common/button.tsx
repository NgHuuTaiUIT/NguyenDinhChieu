import { useTranslation } from "react-i18next";
import classNames from "utils/class-names";
import "./style.scss";
export const Button = ({
  text,
  style,
  handleClick,
  active
}: {
  text: string;
  style?: string;
  active?: boolean;
  handleClick?: () => void;
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={classNames(
        "rounded-lg border-2 border-header-cl w-[256.24px] h-[87.74px] flex items-center justify-center m-auto text-[32px] leading-[50px] font-normal",
        style,
        `btn-language ${active && "active"}`
      )}
      onClick={handleClick}>
      <span className="text-header-cl">{t(text)}</span>
    </div>
  );
};
