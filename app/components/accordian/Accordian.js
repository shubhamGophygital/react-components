"use client";
import { useState } from "react";
import styles from "./Accordian.module.css";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Accordian = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className={styles.container}>
      {data.map((item, index) => {
        return (
          <div className={styles.accordianItem} key={`accordian-item-${index}`}>
            <div
              className={styles.title}
              onClick={(e) => {
                if (activeIndex === index) {
                  setActiveIndex(null);
                } else {
                  setActiveIndex(index);
                }
              }}
            >
              {item.title}
              {activeIndex === index ? (
                <AiFillMinusCircle className={styles.icon} />
              ) : (
                <AiFillPlusCircle className={styles.icon} />
              )}
            </div>

            {activeIndex === index && (
              <div className={`${styles.description} description-${index}`}>
                {item.description}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Accordian;
