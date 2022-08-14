import styles from "../../styles/home.module.css";
import { childProps } from "../../repository/defineProps";
import ProfileBox from "./ProfileBox";
import React from "react";
const HomePages = (props: childProps) => {
  return (
      <ProfileBox />
  );
};

export default React.memo(HomePages);
