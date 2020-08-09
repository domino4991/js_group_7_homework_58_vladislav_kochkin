import React from 'react';
import './Alert.css';

const Alert = props => {
    let text = ((props.type === 'success') && 'This is simple success alert') ||
        ((props.type === 'warning') && 'This is simple warning alert') ||
        ((props.type === 'primary') && 'This is simple primary alert') ||
        ((props.type === 'danger') && 'This is simple danger alert') || 'This is simple alert';
    let alertClassName = !props.clickDismissable ? ['Alert', 'Alert-dismiss', props.type].join(' ') : ['Alert', props.type].join(' ');
    return (
        <div
            className={alertClassName}
            onClick={!props.clickDismissable ? props.closed : null}
            style={{
                top: props.show ? '10px' : '-150px',
                opacity: props.show ? '1' : '0'
            }}
        >
            {text}
            {props.clickDismissable ? <button className="Alert-close" onClick={props.closed}>X</button> : null}
        </div>
    );
};

export default Alert;