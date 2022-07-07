import { ReactNode } from "react";
import classNames from "utils/class-names";

const Title = ({
  text,
  style,
  children
}: {
  text?: string;
  style?: string;
  children?: ReactNode;
}) => (
  <h1
    className={classNames(
      style,
      "text-[84px] text-center leading-[106px] font-semibold text-header-cl mb-[72px]"
    )}>
    {text}
    {children}
  </h1>
);
export default Title;
