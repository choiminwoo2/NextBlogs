import Image from "next/image";
import { childProps } from "../../repository/defineProps";
import styles from "../../styles/header.module.css";
import ModeChanger from "../mode/ModeChanger";
import searchIcon from "../../assets/search.png";
const Header = (props: childProps) => {
  return (
    <header className={styles.head}>
      <div className={styles["nav-top"]}>
        <div className={styles.logo}>
          <h2>개발자 블로그</h2>
        </div>
        <ModeChanger />
      </div>
      <div className={styles["nav-down"]}>
        <div className={styles["down-menu"]}>
          <li>Home</li>
          <li>Skils</li>
          <li>TimeLine</li>
          <li>Project</li>
          <li>info</li>
        </div>
        <div className={styles.menuIcon}>
        </div>
      </div>
    </header>
  );
};

export default Header;
