import { Fragment, PropsWithChildren } from "react";
import ReactDOM  from "react-dom"; 
import styles from './Modal.module.css'
interface ModalProps{
    onClose : () => void
}
const BackDrop = (props : ModalProps) =>{
    return(
        <div className={styles.backdrop} onClick={props.onClose}></div>
    )
}

const ModalOverlay = ({children}: PropsWithChildren) =>{
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
            {children}
            </div>
        </div>
    )
}
const Modal = ( props : PropsWithChildren<ModalProps>) : JSX.Element=>{
    const selectedElement = document.getElementById('_modal');
    if(selectedElement === null){
        return <div></div>
    }
    return <Fragment>
        {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>, selectedElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, selectedElement)}
    </Fragment>
}

export default Modal;