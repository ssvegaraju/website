import { useState } from 'react';
import './App.css';
import Welcome from './Components/Welcome/Welcome';

const CurrentScene = {
  Welcome: 'Welcome',
  AboutMe: 'AboutMe',
  Experience: 'Experience',
  Education: 'Education',
  Projects: 'Projects',
}

function App() {

  const [currentScene, setCurrentScene] = useState(CurrentScene.Welcome);
  switch (currentScene) {
    case CurrentScene.Welcome:
      return <Welcome></Welcome>;
    case CurrentScene.AboutMe:
      break;
    default:
      break;
  }
  return <div>You shouldn't be seeing this, something went wrong!</div>
}

export default App;
