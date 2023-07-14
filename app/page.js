import styles from "./page.module.css";
import SocialIcons from "./components/socialIcons/SocialIcons";
import SearchBar from "./components/searchBar/SearchBar";
import ComponentLayout from "./components/componentLayout/ComponentLayout";
import ExpandCardList from "./components/expandCardList/ExpandCardList";
import Carousel from "./components/carousel/Carousel";
import { cardMeta } from "./data/cardMeta";
import Accordian from "./components/accordian/Accordian";
import { accordianData } from "./data/accordian";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Custom Components</h2>
      {/* <ComponentLayout label={"Social Media Icon"}>
        <SocialIcons />
      </ComponentLayout>
      <ComponentLayout label={"Search Bar"}>
        <SearchBar />
      </ComponentLayout>
      <ComponentLayout label={"Expansion Cards"}>
        <ExpandCardList items={cardMeta} />
      </ComponentLayout> 
      <ComponentLayout label={"Carousel"}>
        <Carousel items={cardMeta} autoplay={true} duration={3000} />
      </ComponentLayout>*/}
      <ComponentLayout label={"Accordian"}>
        <Accordian data={accordianData} />
      </ComponentLayout>
    </div>
  );
}
