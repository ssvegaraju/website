import React, { useState } from 'react';
import AboutMe from './Components/AboutMe/AboutMe';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Education from './Components/Education/Education';
import "@cloudscape-design/global-styles/index.css"
import { Button, Input, SpaceBetween, Container, Header, Tabs } from "@cloudscape-design/components"

import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('aboutMe');
  const [value, setValue] = useState("");

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

  const tabs = [
    {
      label: 'About Me',
      id: 'aboutme',
      content: <AboutMe />
    },
    {
      label: 'Experience',
      id: 'experience',
      content: <Experience />
    },
    {
      label: 'Education',
      id: 'education',
      content: <Education />
    },
    {
      label: 'Projects',
      id: 'projects',
      content: <Projects />
    }
  ]

  return (
    <div className="App">
      <SpaceBetween size="m">
        <Tabs
          onChange={({ detail }) => setActiveTab(detail.activeTabId)}
          tabs={tabs} ariaLabel="Resource details"
        />
      </SpaceBetween>
    </div>
  );
}

export default App;
