import Link from "next/link";
import styles from "../../styles/header.module.css";
import ModeChanger from "../mode/modeChanger";
import menuIcon from '../../assets/menu_icon.png';
import Image from "next/image";
import {menus} from '../../data/LinkData'
import { Fragment, useState } from "react";
import Menu from "./Menu";
const Header = () => {
  const [menuSelected, setMenuSelected] = useState(false);
  const menuHandler = () =>{
    setMenuSelected(true);
  }
  const closeMenuHanlder = () =>{
    setMenuSelected(false);
  }
  return (
    <Fragment>    
    { menuSelected && <Menu onClose={closeMenuHanlder}/>}
    <header className={styles.head}>
      <div className={styles["nav-top"]}>
        <div className={styles.logo}>
          <div className={styles.menuIcon}>
            <Image onClick={menuHandler} width={"35px"} height={"35px"} src={menuIcon} alt={"메뉴 네비게이션입니다."}/>
          </div>
        </div>
        <ModeChanger />
      </div>
      <div className={styles["nav-down"]}>
        <div className={styles["down-menu"]}>
          {menus.map((menuItem)=>(
            <li className={styles["hover-underline-animation"]} key={menuItem.url}>
            <Link href={menuItem.url}>{menuItem.menu}</Link>
          </li>
          ))}
        </div>
      </div>
    </header>
    </Fragment>

  );
};

export default Header;
