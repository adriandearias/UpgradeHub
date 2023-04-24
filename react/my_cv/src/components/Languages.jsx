import React from 'react'
import "./Languages.css";
import Card from "./Card/Card"

const Languages = ({languages}) => {
    return (
        <Card clase="languages">
            <h2>Languages</h2>
            {languages.map((item) => {
                return (
                    <div key={JSON.stringify(item)}>
                        <h4 className="name">{item.language}</h4>
                        <p>Writing level: {item.wrlevel}</p>
                        <p>Speaking level: {item.splevel}</p>
                    </div>
                );
            })}
        </Card>
    )
}

export default Languages
