import Image from "next/image";
import styles from './ProfileBox.module.css'
import TypingAnimation from "./TypingAnimation";
const ProfileBox = () => {
  return (
    <div className='typing-bg'>
        <div className={styles.null}></div>
        <div className='typing-card'>
            <div>
                <TypingAnimation />
            </div>
        </div>
    </div>
  );
};

export default ProfileBox;
