import React, {useState} from 'react';
import './ContactCard.css';

function ContactCard(props){
    const [Phone, setPhone] = useState("Click to show phone number!");
    function changePhone() {
        if(Phone === "Click to show phone number!") {
            setPhone("1+631-834-3883");
        } else {
            setPhone("Click to show phone number!");
        }
    }

    const [Resume, setResume] = useState("Click to show resume!");
    function showResume() {
        if(props.resumeStatus === "Hidden") {
            props.stateChanger("");
            setResume("Click to hide resume!");
        } else {
            props.stateChanger("Hidden");
            setResume("Click to show resume!");
        }
    }

    return(
        <div className='ContactButtonsContainer'>
            <form id="EmailForm" action="mailto:amonteverde98@gmail.com" method="post" enctype="text/plain">
                <button id='Email'><input type="submit" value="Click to email me!"/></button>
            </form>
            <button id='Phone' onClick={changePhone}>{Phone}</button>
            <button id='Resume' onClick={showResume}>{Resume}</button>
        </div>
    )
}

export default ContactCard;