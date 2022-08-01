import { useSelector } from 'react-redux';
import styles from '../../styles/header.module.css';
import { RootState } from '../../store';
const ModeChanger = () => {
  const modeIsDark = useSelector(( state : RootState) => state.mode.)
  return (
    <nav>
      <ul className={styles.menu}>
        <li>
          {/* <?xml version="1.0" ?><svg
              width="25px"
              hight="25px"
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <path
                d="M20.21,15.32A8.56,8.56,0,1,1,11.29,3.5a.5.5,0,0,1,.51.28.49.49,0,0,1-.09.57A6.46,6.46,0,0,0,9.8,9a6.57,6.57,0,0,0,9.71,5.72.52.52,0,0,1,.58.07A.52.52,0,0,1,20.21,15.32Z"
                fill="#464646"
              />
            </svg> */}
        </li>
        {/* <li><img src="./search.png" width="25px" height="25px" / ></li> */}
      </ul>
    </nav>
  );
};

export default ModeChanger;
