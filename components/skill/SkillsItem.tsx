import React, { useEffect, useState } from "react";
import styles from "./SkillsItem.module.css";
import { skillDataProps } from "./MySkill";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
const SkillsItem = (props: skillDataProps) => {
  const modeCondition = useSelector(
    (state: RootState) => state.mode.modSelector
  );
  const [useStyles, setUseStyles] = useState(styles.dark);
  useEffect(()=>{
    if(modeCondition){
      setUseStyles(styles.dark);
    }else{
      setUseStyles(styles.light);
    }
  },[modeCondition])
  return (
    <div className={styles.card} key={props.key}>
      <div className={`${styles["card-title"]} ${useStyles}`}>{props.name}</div>
      <div className={styles["skills-content"]}>
        <p className={styles['skills-word']}>{props.content}</p>
      </div>
    </div>
  );
};

export default SkillsItem;
