import React from 'react'
import "./Experience.css"
import Card from "./Card/Card"

const Experience = ({ experience }) => {
	return (
		<Card clase="experience">
			<h2>Experience</h2>
			{experience.map((item) => {
				return (
					<div key={JSON.stringify(item)}>
						<h3 className="name">📕 {item.name}</h3>
						<p>{item.date}</p>
						<p>{item.where}</p>
						<p>{item.description}</p>
					</div>
				);
			})}
		</Card>
	)
}

export default Experience
