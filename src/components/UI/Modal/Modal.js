import React from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";

const Modal = props => (
    <>
        <Backdrop show={props.show} clicked={props.closed}/>
        <div
            className="Modal"
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
        >
            <div className="Modal-header">
                <h3 className="Modal-title">{props.title}</h3>
            </div>
            <div className="Modal-body">
                {props.children}
            </div>
            {props.buttons ? <div className="Modal-footer">{props.buttons.map((item, i) => <Button
                key={item.label + i}
                type={item.type}
                label={item.label}
                clicked={item.clicked}
            />)}</div> : null}
            <button type="button" className="Modal-button" onClick={props.closed}>X</button>
        </div>
    </>
);

export default Modal;