import styles from "./MySkill.module.css";
import { SkillsData, skillData } from "../../data/SkillsData";
import SkillsItem from "./SkillsItem";
export interface skillDataProps {
  key: number;
  name: string;
  content: string;
}
const MySkill = () => {
  return (
    <section>
      <div className={styles.title}>
        <h1>My Skills</h1>
      </div>
      <div className={styles["skills-main"]}>
        {SkillsData.map((item: skillData) => (
          <SkillsItem key={item.id} name={item.name} content={item.content} />
        ))}
      </div>
    </section>
  );
};

export default MySkill;
