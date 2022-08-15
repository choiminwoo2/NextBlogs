import React, { Fragment, useCallback, useEffect, useState } from "react";
import styles from "./TypeAnimation.module.css";
import { useTypedAnimate, Phase } from "../hooks/useTypedAnimation";
import { ClickProps } from "./ProfileBox";
const typedMessage = [
  "안녕하세요 최민우입니다.",
  "사용자 편의의 개발하는 것이 목표입니다.",
];
const TypingAnimation = (props: ClickProps) => {
  // call custom Hooks
  const [useStyle, setUseStyle] = useState<string>("");
  const btnClickHandler = () => {
    props.onClickHandler(Phase.Init);
  };
  const { isTypedState, selectTypeMessage, phase} = useTypedAnimate(
    typedMessage,
    props.getPhase
  );
  useEffect(() => {
    if (phase !== Phase.Deleting) {
      setUseStyle("end-cursor");
    }
    if(phase === Phase.Pausing){
        setUseStyle('blink-cursor');
    }
    if(phase === Phase.End){
        setUseStyle('blink-cursor')
    }
  }, [phase,props]);
  return (
    <h2>
      {<span className={styles[`${useStyle}`]}>{isTypedState}</span>}
      {Phase.End === phase && (
        <button onClick={btnClickHandler}>다시 보기</button>
      )}
    </h2>
  );
};
export default TypingAnimation;
