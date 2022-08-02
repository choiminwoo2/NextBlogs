import styles from "../../styles/home.module.css";
import { childProps } from "../../repository/defineProps";
import ProfileBox from "./ProfileBox";
import React from "react";
const HomePages = (props: childProps) => {
  return (
    <div className={styles["main-home"]}>
      <div>안녕하세요</div>
      <ProfileBox />
    </div>
  );
};

export default React.memo(HomePages);
