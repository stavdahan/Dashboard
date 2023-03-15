import React, { useState } from 'react';
import './App.css';
import SideDrawer from './components/SideDrawer';

function App() {
  const [sideDrawerVisibility, setSideDrawerVisibility] = useState(false)

  const changeSideDrawerVisibility = () => { 
    setSideDrawerVisibility(!sideDrawerVisibility)
    console.log(sideDrawerVisibility)
  }
  return (
    <div className="App">
      <SideDrawer isVisible={sideDrawerVisibility} />
      <div
        className={`background ${sideDrawerVisibility}`}
        onClick={() => changeSideDrawerVisibility()}
      />
    </div>
  );
}

export default App;
