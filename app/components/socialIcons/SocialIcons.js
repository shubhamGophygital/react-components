"use client";
import styles from "./SocialIcons.module.css";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

let IconArr = [FaInstagram, FaFacebookF, FaPinterestP, FaLinkedinIn];

const SocialIcons = () => {
  return (
    <div className={styles.container}>
      {IconArr.map((Icon, index) => (
        <div className={styles.icon_container} key={index}>
          <Icon className={styles.icon} />
        </div>
      ))}
    </div>
  );
};
export default SocialIcons;
