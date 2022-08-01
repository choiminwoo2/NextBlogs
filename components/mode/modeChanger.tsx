import { useSelector } from "react-redux";
import styles from "../../styles/header.module.css";
import { RootState, useAppDispath } from "../../store";
import darkIcon from "../../assets/dark_moon.png";
import lightIcon from "../../assets/light_sun.png";
import { permuteMode } from "../../store/mode";
import Image from "next/image";
import Search from "../search/search";
const ModeChanger = () => {
  const modeInitDark = useSelector(
    (state: RootState) => state.mode.modSelector
  );
  const dispath = useAppDispath();
  let modeCondition;
  if (modeInitDark) {
    modeCondition = (
      <ul className={styles.menu}>
        <li>
        <Search />
        </li>
        <li>
        <Image
          src={lightIcon}
          alt={"클릭하면 밝은 화면으로 전환!"}
          width={"25px"}
          height={"25px"}
          onClick={() => dispath(permuteMode())}
        />
        </li>
      </ul>
    );
  } else {
    modeCondition = (
      <ul className={styles.menu}>
        <li>
        <Search />
        </li>
        <li>
        <Image
          src={darkIcon}
          alt={"클릭하면 다크모드로 전환!"}
          width={"25px"}
          height={"25px"}
          onClick={() => dispath(permuteMode())}
        />
         </li>
      </ul>
    );
  }
  return (
    <nav>
      <ul className={styles.menu}>
        <li>{modeCondition}</li>
      </ul>
    </nav>
  );
};

export default ModeChanger;
