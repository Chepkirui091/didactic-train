import React from 'react';

type ButtonProps = {
    label: string;
    color?: string;
}

const Button: React.FC<ButtonProps> = ({label, color = "blue"}) => {
    return (
        <button style={{ backgroundColor: color }} className="w-20">
            {label}
        </button>
    )
}

export default Button