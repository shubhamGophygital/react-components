"use client";
import { useState } from "react";
import styles from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const SearchBar1 = () => {
  const [query, setQuery] = useState("");
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <RxCross2 className={styles.closeButton} onClick={() => setQuery("")} />
      <BsSearch className={styles.searchButton} onClick={() => alert(query)} />
    </div>
  );
};
export default SearchBar1;
