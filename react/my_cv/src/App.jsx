import { useState } from "react";
import "./App.css";
import { CV } from "./CV/cv";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import More from "./components/More";


const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
	const [count, setCount] = useState(0)

	return (

			<div className="App">
				<Hero hero={hero} />
				<About hero={hero.aboutMe} />
				<Education education={education} />
				<Experience experience={experience} />
				<More
					languages={languages}
					habilities={habilities}
					volunteer={volunteer}
				/>
			</div>
	)
}

export default App
