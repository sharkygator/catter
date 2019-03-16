import React from 'react';
import styles from './Button.module.scss';

const Button = ({clickFnc, secondary, children})=>{

    return(
        <button
            onClick={clickFnc}
            className={secondary ? styles.buttonSecondary : styles.button}
        >
            {children}
        </button>
    )
};

export default Button;