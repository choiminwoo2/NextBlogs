import { useSelector } from "react-redux";
import styles from "../../styles/header.module.css";
import { RootState, useAppDispath } from "../../store";
import { permuteMode } from "../../store/mode";
import darkMode from "../../assets/dark_moon.png";
import lightMode from "../../assets/light_sun.png";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
const ModeChanger = () => {
  const modeInitDark = useSelector(
    (state: RootState) => state.mode.modSelector
  );
  const dispath = useAppDispath();
  const [Icon, setIcon] = useState(darkMode);
  // let modeSelector : StaticImageData;
  useEffect(() => {
    if (modeInitDark) {
      setIcon(lightMode);
    } else {
      setIcon(darkMode);
    }
  }, [Icon, modeInitDark]);

  // if (modeInitDark) {
  //   modeSelector = lightMode;
  // } else {
  //   modeSelector = darkMode;
  // }
  // let modeCondition;
  // if (modeInitDark) {
  //   modeCondition = (
  //     <ul className={styles.menu}>
  //       <li>
  //         <Search />
  //       </li>
  //       <li>
  //         <Image
  //           src={lightIcon}
  //           alt={"클릭하면 밝은 화면으로 전환!"}
  //           width={"25px"}
  //           height={"25px"}
  //           onClick={() => dispath(permuteMode())}
  //         />
  //       </li>
  //     </ul>
  //   );
  // } else {
  //   modeCondition = (
  //     <ul className={styles.menu}>
  //       <li>
  //         <Search />
  //       </li>
  //       <li>
  //         <Image
  //           src={darkIcon}
  //           alt={"클릭하면 다크모드로 전환!"}
  //           width={"25px"}
  //           height={"25px"}
  //           onClick={() => dispath(permuteMode())}
  //         />
  //       </li>
  //     </ul>
  //   );
  // }
  return (
    <nav>
      <ul className={styles.menu}>
        <div className={styles['mode-box']}>
          <Image
            src={Icon}
            alt={"클릭하면 밝은 화면으로 전환!"}
            width={"25px"}
            height={"25px"}
            onClick={() => dispath(permuteMode())}
          />
        </div>
      </ul>
    </nav>
  );
};

export default ModeChanger;
