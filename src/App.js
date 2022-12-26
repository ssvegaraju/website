import React, { useState } from 'react';
import './App.css';
import Welcome from './Components/Welcome/Welcome';

const CurrentScene = {
  Welcome: 'Welcome',
  AboutMe: 'AboutMe',
  Experience: 'Experience',
  Education: 'Education',
  Projects: 'Projects',
}


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentScene: CurrentScene.Welcome,
    }
  }

  render() {
    switch (this.state.currentScene) {
      case CurrentScene.Welcome:
        return <Welcome onSceneSelect={(scene) => {
          this.setState({
            currentScene: scene,
          });
        }}></Welcome>;
      case CurrentScene.AboutMe:
        break;
      case CurrentScene.Experience:
        break;
      case CurrentScene.Projects:
        break;
      case CurrentScene.Education:
        break;
      default:
        break;
    }
    return <div>You shouldn't be seeing this, something went wrong!</div>
  }
}