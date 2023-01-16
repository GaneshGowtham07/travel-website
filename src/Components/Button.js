import React from 'react';
import {Link} from 'react-router-dom';
import './Button.css';

const STYLES = ['btn--primary','btn--outline'];

const SIZE = ['btn--medium','btn--large']

const Button = ({children,type,buttonStyle,buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

    
    

return (
    <Link to='/signup' className='btn-mobile'>
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} type={type} onClick={onclick}>
            {children}
        </button>
    </Link>
)
}

export {Button}