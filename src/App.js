import React, { useEffect, useState } from 'react'
import './App.css';
import Splash from './Components/Splash';
import BackgroundCard from './Components/BackgroundCard';
import theResume from './Assets/resume.JPG';
import PopUp from './Components/PopUp';

function App() {
  const CardType = ["Silver","Blue"];
  const TitleColorArray = ["blue","white"];
  const [DisplayResume,setDisplayResume] = useState("Hidden");
  const [DisplayPopUp,setDisplayPopUp] = useState("Hidden");
  const [headerShow, setHeaderShow] = useState("");

  function showFeedback() {
    if(DisplayPopUp === 'Hidden') {
      setDisplayPopUp('');
      setHeaderShow('Hidden');
    } else {
      setDisplayPopUp('Hidden');
      setHeaderShow('');
    }
  }

  return (
    <div className="App">
      <header className={"App-header " + headerShow}>
        <p><button onClick={showFeedback} id="headerLink">Click me to leave some advice or to ask a question!</button></p>
      </header>

      <PopUp PopUpStatus={DisplayPopUp} stateChangePopUp={setDisplayPopUp} stateChangeHeader={setHeaderShow}/>

      <div className='SplashScreen'>
        <Splash/>
      </div>

      <div className='AboutMe'>
        <BackgroundCard CardNumber={0} CardType={CardType[0]} TextColor={TitleColorArray[0]}/>
      </div>

      <div className='Projects'>
        <BackgroundCard CardNumber={1} CardType={CardType[0]} TextColor={TitleColorArray[0]}/>
      </div>

      <div className='GetInContact'>
        <BackgroundCard CardNumber={2} CardType={CardType[1]} TextColor={TitleColorArray[1]} resume={DisplayResume} stateChange={setDisplayResume}/>
      </div>

      <div className={"Resume " + DisplayResume}>
        <img src={theResume} alt='resume' className='ResumePic'/>
      </div>

      <footer>
        <p>Copyright © 2022 Alex Monteverde</p>
        <p>All rights reserved</p> 
      </footer>
    </div>
  );
}

export default App;
