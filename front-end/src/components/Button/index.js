import React from 'react'

function Button({text, className, onClick}) {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;