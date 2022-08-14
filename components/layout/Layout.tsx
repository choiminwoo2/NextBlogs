import { useSelector } from "react-redux";
import { childProps } from "../../repository/defineProps";
import { RootState } from "../../store";
import Header from "./Header";
import styles from "../../styles/Layout.module.css";
import { useEffect, useState } from "react";
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

  return (
    <div className={modeColor}>
      <Header />
      <main className={styles.main}>
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
