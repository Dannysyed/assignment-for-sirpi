import classes from './modal.module.css'
import React from 'react';
import ReactDOM from 'react-dom';
let Backdrop = (prop) => {

    return (<div className={classes.backdrop}></div>)

}
let Modaldrop = (prop) => {
    return (<div className={classes.modal}>

        <div className={classes.content}>{prop.children}</div>
    </div>)
}

let Modal = (prop) => {
    let doc = document.getElementById('overlay')
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop />, doc)}
            {ReactDOM.createPortal(<Modaldrop>{prop.children}</Modaldrop>, doc)}
        </React.Fragment>
    )
}
export default Modal