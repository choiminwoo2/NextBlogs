import React, { Fragment, useCallback, useEffect, useState } from "react";
import styles from "./TypeAnimation.module.css";
import { useTypedAnimate, Phase } from "../hooks/useTypedAnimation";
import { ClickProps } from "./ProfileBox";
import Link from "next/link";
const typedMessage = [
  "안녕하세요",
  "신입 개발자를 꿈꾸는 \n 최민우입니다.",
  "사용자 편의의\n 개발하는 것이 목표입니다.",
];
const TypingAnimation = (props: ClickProps) => {
  // call custom Hooks
  const [useStyle, setUseStyle] = useState<string>("");
  const btnClickHandler = () => {
    props.onClickHandler(Phase.Init);
  };
  const { isTypedState, selectTypeMessage, phase } = useTypedAnimate(
    typedMessage,
    props.getPhase
  );
  useEffect(() => {
    props.onClickHandler(Phase.Typing);
    if (phase !== Phase.Deleting) {
      setUseStyle("end-cursor");
    }
    if (phase === Phase.Pausing) {
      setUseStyle("blink-cursor");
    }
    if (phase === Phase.Pending) {
      setUseStyle("blink-cursor");
    }
    return () => {
        props.onClickHandler(Phase.Typing);
    }
  }, [phase, props]);
  return (
    <Fragment>
      <h2 className={styles.word}>{<span className={styles[`${useStyle}`]} aria-label={selectTypeMessage} >{isTypedState}</span>}</h2>
      {Phase.Pending === phase && (
        <Fragment>
        <button onClick={btnClickHandler}>다시 보기</button>
        <Link href={"/skills"}>더 보기</Link>
        </Fragment>
      )}
    </Fragment>
  );
};
export default TypingAnimation;
