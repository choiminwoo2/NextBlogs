import Link from "next/link";
import styles from "../../styles/header.module.css";
import ModeChanger from "../mode/modeChanger";
import menuIcon from '../../assets/menu_icon.png';
import Image from "next/image";
import { useState } from "react";
const Header = () => {
  const [menuSelected, setMenuSelected] = useState();
  return (
    <header className={styles.head}>
      <div className={styles["nav-top"]}>
        <div className={styles.logo}>
          <div className={styles.menuIcon}>
            <Image  width={"35px"} height={"35px"} src={menuIcon} alt={"메뉴 네비게이션입니다."}/>
          </div>
        </div>
        <ModeChanger />
      </div>
      <div className={styles["nav-down"]}>
        <div className={styles["down-menu"]}>
          <li className={styles["hover-underline-animation"]}>
            <Link href={"/"}>Home</Link>
          </li>
          <li className={styles["hover-underline-animation"]}>
            <Link href={"/skills"}>Skils</Link>
          </li>
          {/* <li className={styles['hover-underline-animation']}><Link href={'/timeLine'}>TimeLine</Link></li> */}
          <li className={styles["hover-underline-animation"]}>
            <Link href={"/projects"}>Project</Link>
          </li>
          {/* <li className={styles['hover-underline-animation']}><Link href={'/info'}>info</Link></li> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
