import Image from "next/image";
import styles from "../../styles/search.module.css";
import React, { Fragment } from "react";
import SearchInput from "./SearchInput";
import searchImg from '../../assets/search.png'

const Search = () => {
  return (
    <Fragment>
       <SearchInput /> 
      <Image
        className={styles.searchIcon}
        src={searchImg}
        alt="god"
        width={"23px"}
        height={"23px"}
      />
    </Fragment>
  );
};

export default React.memo(Search);
