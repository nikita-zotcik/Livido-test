import React from 'react';

const Button = ({title = 'Default', onChange, styles = {}, ...props}) => {
    return (
        <button className={'button'} onClick={onChange} style={styles} {...props}>{title}</button>
    )
};

export default Button;