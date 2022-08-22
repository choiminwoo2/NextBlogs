import React, { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { Phase } from "../hooks/useTypedAnimation";
import styles from "./ProfileBox.module.css";
import TypingAnimation from "./TypingAnimation";
export interface ClickProps {
  onClickHandler: (Phase: Phase) => void;
  getPhase: Phase;
}
const ProfileBox = () => {
  const [isGetPhase, setIsGetPhase] = useState<Phase>(Phase.Typing);
  const clickRePlay = useCallback((reRending: Phase) => {
    setIsGetPhase(reRending);
  },[]);
  return (
    <div className={styles['typing-bg']}>
      <div className={styles.null}></div>
      <div className={styles['typing-card']}>
        {isGetPhase === Phase.Typing && (
          <TypingAnimation onClickHandler={clickRePlay} getPhase={isGetPhase} />
        )}
        {isGetPhase === Phase.Init &&  <TypingAnimation onClickHandler={clickRePlay} getPhase={isGetPhase} />}
      </div>
    </div>
  );
};

export default ProfileBox;
