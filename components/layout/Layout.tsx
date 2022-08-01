import { useSelector } from 'react-redux'
import {childProps} from '../../repository/defineProps'
import { RootState } from '../../store'
import Header from './Header'
import styles from '../../styles/Layout.module.css';
const Layout = (props : childProps) =>{
    const modeCondition = useSelector((state: RootState) => state.mode.modSelector);

    
    let modeStyle;
    if(modeCondition){
        modeStyle = styles.dark
    }else{
        modeStyle = styles.light
    }
    return (
        <div className={modeStyle}>
            <Header />
            <main>
                {props.children}
            </main>
        </div>
    )

}

export default Layout