import { useTranslation } from "react-i18next";
import classNames from "utils/class-names";

export const Button = ({
  text,
  style,
  handleClick
}: {
  text: string;
  style?: string;
  handleClick?: () => void;
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={classNames(
        "rounded-lg border-2 border-header-cl w-[256.24px] h-[87.74px] flex items-center justify-center m-auto ",
        style
      )}
      onClick={handleClick}>
      <span className="text-header-cl">{t(text)}</span>
    </div>
  );
};
