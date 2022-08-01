import Image from "next/image";
import styles from "../../styles/search.module.css";
import searchIcon from "../../assets/search.png";
import { Fragment } from "react";
import SearchInput from "./SearchInput";

const Search = () => {
  return (
    <Fragment>
      {/* <SearchInput /> */}
      <Image
        className={styles.searchIcon}
        src={searchIcon}
        alt="god"
        width={"23px"}
        height={"23px"}
      />
    </Fragment>
  );
};

export default Search;
