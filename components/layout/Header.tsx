import Link from "next/link";
import styles from "../../styles/header.module.css";
import ModeChanger from "../mode/modeChanger"
const Header = () => {
  return (
    <header className={styles.head}>
      <div className={styles["nav-top"]}>
        <div className={styles.logo}>
          {/* <Link href={'/'}><h2>PortoFolio</h2></Link> */}
        </div>
        <ModeChanger />
      </div>
      <div className={styles["nav-down"]}>
        <div className={styles["down-menu"]}>
          <li className={styles['hover-underline-animation']}><Link href={'/'}>Home</Link></li>
          <li className={styles['hover-underline-animation']}><Link href={'/skills'}>Skils</Link></li>
          <li className={styles['hover-underline-animation']}><Link href={'/timeLine'}>TimeLine</Link></li>
          <li className={styles['hover-underline-animation']}><Link href={'/projects'}>Project</Link></li>
          <li className={styles['hover-underline-animation']}><Link href={'/info'}>info</Link></li>
        </div>
        <div className={styles.menuIcon}>
        </div>
      </div>
    </header>
  );
};

export default Header;
