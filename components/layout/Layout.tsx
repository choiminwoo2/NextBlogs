import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Header from "./Header";
import styles from "../../styles/Layout.module.css";
import { Fragment, PropsWithChildren, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Particle from "./Particle";
export interface modeProps{
  mode: boolean
}
const Layout = ({children } : PropsWithChildren) => {
  const modeCondition = useSelector(
    (state: RootState) => state.mode.modSelector
  );
  const [modeColor, setModeColor] = useState(styles.light);
  
  const router = useRouter();
  let pathname= router.pathname;
  useEffect(() => {
    if (modeCondition) {
      setModeColor(styles.dark)
    } else {
      setModeColor(styles.light)
    }
  }, [modeCondition, setModeColor]);

  return (
    <Fragment>
    {pathname === '/' && <Particle mode={modeCondition}/>}
    <div className={modeColor}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  
    </Fragment>
  );
};

export default Layout;
