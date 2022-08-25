import React from "react";
import styles from "./SkillsItem.module.css";
import { skillDataProps } from "./MySkill";
const SkillsItem = (props: skillDataProps) => {
  return (
    <div className={styles.card} key={props.key}>
      <div className={styles["card-title"]}>{props.name}</div>
      <div className={styles["skills-content"]}>
        <p className={styles['skills-word']}>{props.content}</p>
      </div>
    </div>
  );
};

export default SkillsItem;
