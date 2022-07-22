import './AboutMe.css'
import LinkedIn from '../Assets/LinkedIn.svg'
import GitHub from '../Assets/GitHub.svg'
import HeadShotImg from '../Assets/20220526_211238605_iOS.jpg';


function AboutMe() {
    return(
        <div className='AboutMeContainer'>
            <p className="BioDesc">
                Welcome to my portfolio! <br></br><br></br>
                I am a recent graduate of Farmingdale State College and I am currently trying
                to reach my goal of becoming a professional full-stack
                developer. <br></br><br></br>
            </p>
            <img className='Pic' src={HeadShotImg} alt='Alex Monteverde'/>
            <p className='Prof'><a href="https://www.linkedin.com/in/alex-monteverde-a83146195/"><img className="ProfSVG" src={LinkedIn} alt='Linked In'/></a>&emsp;<a href="https://github.com/Amonteverde04"><img className="ProfSVG" src={GitHub} alt='GitHub'/></a></p>
        </div>
    )
}

export default AboutMe;