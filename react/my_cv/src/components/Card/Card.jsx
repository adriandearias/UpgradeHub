import React from 'react'
import "./Card.css"

const Card = ({children, clase}) => {
  return (
    <div className={clase ? `${clase} card` : "card"}>
        {children}
    </div>
  )
}

export default Card
