import React, { useState } from "react";

import styles from "./slider.module.scss";

type Props = {
  slides: any[];
  children?: (props: any) => JSX.Element;
  visibleItemsNumber?: number;
};

const Slider = React.memo<Props>(
  ({ slides, children, visibleItemsNumber = 1 }) => {
    const [start, setStart] = useState(0);

    const isControlsVisible = slides.length > visibleItemsNumber;

    const visibleItems = isControlsVisible
      ? slides
          .concat(slides.slice(0, visibleItemsNumber))
          .slice(start, start + visibleItemsNumber)
      : slides;

    const onNextClick = () => {
      setStart(start + 1 >= slides.length ? 0 : start + 1);
    };

    const onPrevClick = () => {
      setStart(start - 1 >= 0 ? start - 1 : slides.length - 1);
    };

    return (
      <div>
        <div className={styles.slides}>
          <ul
            className={styles.list}
            style={{ transform: `translateX(-${start * 33.333}%)` }}>
            {slides.map(
              (slide: any) =>
                //   children ? children(slide) : null
                slide
            )}
          </ul>

          {isControlsVisible && (
            <button onClick={onNextClick} className={styles.buttonNext} />
          )}
          {isControlsVisible && (
            // <PrevButton onClick={onPrevClick} className={styles.navButtons} />
            <button onClick={onPrevClick} className={styles.buttonPre}></button>
          )}
        </div>

        {/* {isControlsVisible && (
          <div className={styles.dotsControls}>
            <Dots
              items={slides.length}
              active={start}
              onClick={(active: number) => setStart(active)}
            />
          </div>
        )} */}
      </div>
    );
  }
);

export default Slider;
