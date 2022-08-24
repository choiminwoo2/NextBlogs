import { useEffect, useState } from "react";
export enum Phase {
  Typing,
  Pausing,
  Deleting,
  Pending
}

const TYPING_INTERVAL = 80;
const PAUSE_MS = 300;
const DELETING_INTERVAL = 30;

export const useTypedAnimate = (typedMessage: string[], updatePhase: Phase) : {
    isTypedState : string,
    selectTypeMessage : string,
    phase : Phase
} => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [phase, setPhase] = useState<Phase>(Phase.Typing);
  const [isTypedState, setIsTypedState] = useState<string>("");
  useEffect(() => {
    switch (phase) {
        // case Phase.Init:{
        //     setIsTypedState("");
        //     setSelectedIndex(0);
        //     setPhase(Phase.Typing)
        //     return;
        // }
      case Phase.Typing: {
        const nextTypedMessage = typedMessage[selectedIndex].slice(
          0,
          isTypedState.length + 1
        );
        if (nextTypedMessage === isTypedState) {
          if (!(typedMessage.length - 1 === selectedIndex)) {
            setPhase(Phase.Pausing);
            return;
          }
          setPhase(Phase.Pending);
        }
        const timeout = setTimeout(() => {
          setIsTypedState(nextTypedMessage);
        }, TYPING_INTERVAL);

        return () => clearTimeout(timeout);
      }
      case Phase.Deleting: {
        if (!isTypedState) {
          const nextIndex = selectedIndex + 1;
          setSelectedIndex(typedMessage[nextIndex] ? nextIndex : 0);
          setPhase(Phase.Typing);
          return;
        }
        const nextRemaining = typedMessage[selectedIndex].slice(
          0,
          isTypedState.length - 1
        );

        const timeout = setTimeout(() => {
          setIsTypedState(nextRemaining);
        }, DELETING_INTERVAL);
        // 1. cleanUp() first step
        // 2. Use hooks for components mounted when first started
        // 3. After use, it operates before the useEffect hook is activated.
        return () => {
          clearTimeout(timeout);
        };
      }
      case Phase.Pausing:{
        const timeout = setTimeout(() => {
            setPhase(Phase.Deleting);
        }, PAUSE_MS);
        return ()=>clearTimeout(timeout)
      }
      case Phase.Pending:{
      }
      default:
        break;
    }
  }, [isTypedState, typedMessage, phase, selectedIndex, updatePhase]);
  return {isTypedState, selectTypeMessage: typedMessage[selectedIndex], phase}
};
