import { useState } from "react";
import "./App.css";
import { CV } from "./CV/cv";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Button from "./components/Button/Button";
import Skills from "./components/Skills"
import Languages from "./components/Languages";


const { hero, education, experience, languages, skills } = CV;

function App() {
	const [showEducation, setShowEducation] = useState(true);
	const [showExperience, setShowExperience] = useState(false);
	const [showLanguages, setShowLanguages] = useState(false);
	const [showSkills, setShowSkills] = useState(false);

	function setButtonClick(set) {
		switch (set) {
		  case setShowEducation:
			setShowEducation(true);
			setShowExperience(false);
			setShowLanguages(false);
			setShowSkills(false);
			break;
		  case setShowExperience:
			setShowEducation(false);
			setShowExperience(true);
			setShowLanguages(false);
			setShowSkills(false);
			break;
		  case setShowLanguages:
			setShowEducation(false);
			setShowExperience(false);
			setShowLanguages(true);
			setShowSkills(false);
			break;
		  case setShowSkills:
			setShowEducation(false);
			setShowExperience(false);
			setShowLanguages(false);
			setShowSkills(true);
		}
	  }
	  

	return (
		<div className="App">
			<Hero hero={hero} />
			<About hero={hero.aboutMe} />
			<Button fn={() => setButtonClick(setShowEducation)}>Education</Button>
			<Button fn={() => setButtonClick(setShowExperience)}>Experience</Button>
			<Button fn={() => setButtonClick(setShowLanguages)}>Languages</Button>
			<Button fn={() => setButtonClick(setShowSkills)}>Skills</Button>
			<div>
				{showEducation && <Education education={education} />}
				{showExperience && <Experience experience={experience} />}
				{showLanguages && <Languages languages={languages} />}
				{showSkills && <Skills skills={skills} />}
			</div>

		</div>
	);
}

export default App;
