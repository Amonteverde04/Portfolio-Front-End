import './ProjectCard.css';
import danielMauro from '../Assets/DanielMauro.png'
import question from '../Assets/_.png'
import enhancedOasis from '../Assets/EnhancedOasis.png'

function ProjectCard(){
    return(
        <div className="ProjCardGrid">
                <a className="ProjectCard" href="https://github.com/CDDR1/bcs-426-capstone-oasis"><img className="ProjCardImg" src={enhancedOasis} alt="hello"/></a>
                <a className="ProjectCard" href="http://www.danielmauromusic.com/"><img className="ProjCardImg" src={danielMauro} alt="hello"/></a>
                <a className="ProjectCard" href="/"><img className="ProjCardImg" src={question} alt="Place Holder"/></a>
                <a className="ProjectCard" href="/"><img className="ProjCardImg" src={question} alt="Place Holder"/></a>
        </div>
    )
}

export default ProjectCard;