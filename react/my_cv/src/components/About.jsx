import React from 'react'
import "./About.css"
import Card from "./Card/Card"

const About = ({ hero }) => {
	return (
		<Card clase="about">
			<h2>About Me</h2>
			{hero.map((item) => {
				return (
					<div className='item' key={JSON.stringify(item)}>
						<p>{item.info}</p>
					</div>
				)
			})}
		</Card>

	)
}

export default About
