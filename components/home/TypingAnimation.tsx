import { useEffect, useState } from "react";
import styles from "./TypeAnimation.module.css";

const typedMessage = [
  "안녕하세요 최민우입니다.",
  "사용자 편의의 개발하는 것이 목표입니다.",
];
const useTypedAnimate = (typedMessge : string[]) => {
  const [IsTypedState, setIsTypedState] = useState("");

  useEffect(() => {
    const nextTypedMessage = typedMessage[0].slice(0, IsTypedState.length + 1);
    if (nextTypedMessage === IsTypedState) return;
    const timeout = setTimeout(() => {
      console.log(typedMessage.slice(0, IsTypedState.length + 1));
      setIsTypedState(typedMessage[0].slice(0, IsTypedState.length + 1));
    }, 150);
    return () => clearTimeout(timeout)
  }, [IsTypedState,typedMessge]);
  return IsTypedState;
};
const TypingAnimation = () => {
 const typedAnimateMessage = useTypedAnimate(typedMessage);
  return (
    <h2>
      <span className={styles["blink-cursur"]}>{typedAnimateMessage}</span>
    </h2>
  );
};
export default TypingAnimation;
