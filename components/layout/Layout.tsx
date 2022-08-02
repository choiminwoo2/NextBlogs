import { useSelector } from "react-redux";
import { childProps } from "../../repository/defineProps";
import { RootState } from "../../store";
import Header from "./Header";
import styles from "../../styles/Layout.module.css";
import { useEffect, useState } from "react";
import HomePage from "../home/HomePages";
const Layout = (props: childProps) => {
  const modeCondition = useSelector(
    (state: RootState) => state.mode.modSelector
  );
  const [modeColor, setModeColor] = useState(styles.light);

  useEffect(() => {
    if (modeCondition) {
      setModeColor(styles.dark)
    } else {
      setModeColor(styles.light)
    }
  }, [modeCondition, setModeColor]);
  // let modeStyle;
  // if(modeCondition){
  //     modeStyle = styles.dark
  // }else{
  //     modeStyle = styles.light
  // }

  return (
    <div className={modeColor}>
      <Header />
      <HomePage>{props.children}</HomePage>
    </div>
  );
};

export default Layout;
