import Image from "next/image";
import { useRouter } from "next/router";
import { childProps } from "../../repository/defineProps";
import styles from "../../styles/header.module.css";
import ModeChanger from "../mode/ModeChanger";
const Header = (props: childProps) => {
  const router = useRouter();
  return (
    <header className={styles.head}>
      <div className={styles["nav-top"]}>
        <div className={styles.logo}>
          <h2>PortoFolio</h2>
        </div>
        <ModeChanger />
      </div>
      <div className={styles["nav-down"]}>
        <div className={styles["down-menu"]}>
          <li onClick={}>Home</li>
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
