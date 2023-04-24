import React from "react";
import "./Education.css";
import Card from "./Card/Card"

const Education = ({ education }) => {
	return (
		<Card clase="education">
			<h2>Education</h2>
			{education.map((item) => {
				return (
					<div key={JSON.stringify(item)}>
						<p className="name">📕 {item.name}</p>
						<p>{item.where}</p>
						<p>Date: {item.date}</p>
					</div>
				);
			})}
		</Card>
	);
};

export default Education;