import React from 'react';
import './Button.css';

const Button = props => (
    <button className={props.type ? ['Button', props.type].join(' ') : 'Button'} onClick={props.clicked}>{props.label}</button>
);

export default Button;