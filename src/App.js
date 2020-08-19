import React from 'react';
import './App.scss';
import Projects from './projects';
import Contact from './contact'
import Header from './header'
import Resume from './resume'


function App() {
  return (
    <div className="App">
     
      <Header />
      <Resume />
     
      <Projects />
      <Contact />
  
    </div>
  );
}

export default App;
