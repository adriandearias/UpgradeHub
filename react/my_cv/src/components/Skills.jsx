import React from 'react'
import "./Skills.css";
import Card from "./Card/Card"

const Skills = ({skills}) => {
    return (
        <Card clase="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>    
        </Card>
    )
}

export default Skills
