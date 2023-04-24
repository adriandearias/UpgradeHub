import React from 'react'
import "./Button.css"

const Button = ({children, fn}) => {
    return (
    <button
        className={'custom-bnt bnt-4'}
        onClick={fn}
    >
        {children}
    </button>
  )
}

export default Button


