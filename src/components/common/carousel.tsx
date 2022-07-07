import { useState } from "react";
import { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.scss";
const Carousel = ({ items }: { items: any[] }) => {
  const [itemsCarousel, setItemsCarousel] = useState(items);
  useEffect(() => {
    setItemsCarousel(items);
  }, [items, window]);

  return (
    <div className="max-w-[1196px] m-auto carousel">
      <AliceCarousel
        disableDotsControls
        infinite
        items={itemsCarousel}></AliceCarousel>
    </div>
  );
};

export default Carousel;
