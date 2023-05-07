import React, { useState } from 'react';
import AboutMe from './Components/AboutMe/AboutMe';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Education from './Components/Education/Education';

import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('aboutMe');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const tabContent = () => {
    switch (activeTab) {
      case 'aboutMe':
        return <AboutMe />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'education':
        return <Education />;
      default:
        return null;
    }
  }

  return (
    <div className="App">
      <div className="tabs">
        <button className={activeTab === 'aboutMe' ? 'active tab' : 'tab'} onClick={() => handleTabClick('aboutMe')}>About Me</button>
        <button className={activeTab === 'experience' ? 'active tab' : 'tab'} onClick={() => handleTabClick('experience')}>Experience</button>
        <button className={activeTab === 'projects' ? 'active tab' : 'tab'} onClick={() => handleTabClick('projects')}>Projects</button>
        <button className={activeTab === 'education' ? 'active tab' : 'tab'} onClick={() => handleTabClick('education')}>Education</button>
      </div>
      {tabContent()}
    </div>
  );
}

export default App;
