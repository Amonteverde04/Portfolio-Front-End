import '../Components/BackgroundCard.css';
import CardTitle from '../Components/CardTitle';
import ProjectCard from './ProjectCard';
import ContactCard from './ContactCard';
import AboutMe from './AboutMe';

function BackgroundCard(props) {
    const CardTitlesArray = ["About Me!", "Projects!", "Lets Get In Contact!"];
    const CardContent = [<AboutMe/>,<ProjectCard/>,<ContactCard resumeStatus={props.resume} stateChanger={props.stateChange}/>];
    const CardItems = [];

    function cardGen(){
        if(props.CardNumber === 0) {
            CardItems.push(CardContent[0]);
        } else if(props.CardNumber === 1) {
            CardItems.push(CardContent[1]);
        } else {
            CardItems.push(CardContent[2]);
        }
        return CardItems;
    }

    return(
        <div className="CardContainer" id={props.CardType}>
            <CardTitle Title={CardTitlesArray[props.CardNumber]} Color={props.TextColor}/>
            {cardGen()}
        </div>
    )
}

export default BackgroundCard;