import React from 'react';
import './Demo.css';
import Modal from "../UI/Modal/Modal";
import Alert from "../UI/Alert/Alert";

const Demo = props => {
    return (
        <div className="Demo">
            <Modal
                show={props.show}
                closed={props.closeModalHandler}
                title='Some kinda modal title'
                buttons={props.buttons}
            >
                <p>Some content</p>
            </Modal>
            <Alert type='warning' clickDismissable show={props.showAlert} closed={props.closeAlertHandler}/>
            <Alert type='success' show={props.showAlertWithoutButton} closed={props.closeAlertWithoutBtnHandler}/>
            <div className="Demo-buttons">
                <button className="Demo-btn" onClick={props.showModalHandler}>Modal on</button>
                <button className="Demo-btn" onClick={props.showAlertWithCloseButtonHandler}>Alert with button close</button>
                <button className="Demo-btn" onClick={props.showAlertWithoutCloseButtonHandler}>Alert without button close</button>
            </div>
        </div>
    );
};

export default Demo;