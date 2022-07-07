import { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.scss";
const Carousel = ({ items }: { items: any[] }) => {
  useEffect(() => {
    console.log("re-render");
  }, [items]);

  return (
    <div className="max-w-[1196px] m-auto carousel">
      <AliceCarousel disableDotsControls infinite items={items}></AliceCarousel>
    </div>
  );
};

export default Carousel;
