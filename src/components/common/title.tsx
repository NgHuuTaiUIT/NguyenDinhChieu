import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import classNames from "utils/class-names";

const Title = ({
  text,
  style,
  children
}: {
  text?: string;
  style?: string;
  children?: ReactNode;
}) => {
  const { t } = useTranslation();
  return (
    <h1
      className={classNames(
        style,
        "text-[84px] text-center leading-[106px] font-semibold text-header-cl mb-[72px]"
      )}>
      {t(text ?? "")}
      {children}
    </h1>
  );
};
export default Title;
