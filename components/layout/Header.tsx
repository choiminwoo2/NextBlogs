import {childProps} from '../../repository/defineProps';
import styles from '../../styles/header.module.css'
const Header = (props : childProps) =>{
    return(
        <header className={styles.head}>
        <div className={styles['nav-top']}>
          <div className={styles.logo}>
            <h2>개발자 블로그</h2>
          </div>
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
        </div>
        <div className={styles['nav-down']}>
          <div className={styles['down-menu']}>
            <li>Home</li>
            <li>Skils</li>
            <li>TimeLine</li>
            <li>Project</li>
            <li>info</li>
          </div>
          <div className={styles.menuIcon}>
            {/* <svg
              width="25px"
              hight="32px"
              enable-background="new 0 0 25 32"
              id="Glyph"
              version="1.1"
              viewBox="0 0 25 32"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M13,16c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,14.346,13,16z"
                id="XMLID_294_"
              />
              <path
                d="M13,26c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,24.346,13,26z"
                id="XMLID_295_"
              />
              <path
                d="M13,6c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,4.346,13,6z"
                id="XMLID_297_"
              />
            </svg> */}
          </div>
        </div>
      </header>
    )
}

export default Header;