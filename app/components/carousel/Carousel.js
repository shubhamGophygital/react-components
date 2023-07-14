"use client";
import { useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const Carousel = ({ items, autoplay = false, duration = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!autoplay) return;
    let id = setInterval(() => {
      handleChangeNextImage();
    }, duration);
    return () => clearInterval(id);
  }, []);

  const handleChangePreviousImage = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : --prev));
  };

  const handleChangeNextImage = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : ++prev));
  };

  return (
    <div className={styles.wrapper}>
      <IoIosArrowDropleftCircle
        className={styles.previousButton}
        onClick={handleChangePreviousImage}
      />
      <div className={styles.container}>
        {items?.map((item, index) => {
          return (
            <div
              className={styles.CarouselCardContainer}
              key={`carousel-card-${index}`}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              <img className={styles.image} src={item.src} alt="_" />
            </div>
          );
        })}
      </div>
      <IoIosArrowDroprightCircle
        className={styles.nextButton}
        onClick={handleChangeNextImage}
      />
    </div>
  );
};
export default Carousel;
