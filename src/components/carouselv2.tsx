import { useState } from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = ({ items }: { items: any[] }) => {
  return (
    <div className="max-w-[1196px] m-auto carousel">
      <AliceCarousel disableDotsControls infinite items={items}></AliceCarousel>
    </div>
  );
};

export default Carousel;