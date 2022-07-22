import '../Components/CardTitle.css';

function CardTitle(props) {
    return(
        <div className='CardTitleContainer' id={props.Color}>
            <h2 className="CardTitle">{props.Title}</h2>
        </div>
    )
}

export default CardTitle;