import {childProps} from '../../repository/defineProps'
import Header from './Header'
const Layout = (props : childProps) =>{
    return (
        <div>
            <Header />
            <main>
                {props.children}
            </main>
        </div>
    )

}

export default Layout