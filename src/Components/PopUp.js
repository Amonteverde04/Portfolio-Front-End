import './PopUp.css'

function PopUp(props) {
    function closePopUp() {
        if(props.PopUpStatus === '') {
          props.stateChangePopUp('Hidden');
          props.stateChangeHeader('');
        } else {
          props.stateChangePopUp('');
          props.stateChangeHeader('Hidden');
        }
     }
    
    return(
        <div className={'PopUpContainer ' + props.PopUpStatus}>
            <button onClick={closePopUp} className='CloseButton'>Close feedback pop up</button>
            <div className='PopUp'>
              <h1 className='FeedbackTitle'>Send me some feedback!</h1>
              <form className='FeedbackForm' method='POST' action='https://my-portfolio-back-end-heroku.herokuapp.com/post-feedback'>
                <div className='FormStuff'>
                    <label id="formLabel">Name:</label><br></br>
                    <input id='formInputBox' type='text' name='Name' required></input><br></br>
                    <label id="formLabel">Email:</label><br></br>
                    <input id='formInputBox' type='text' name='Email' placeholder='Feel free to leave me empty, if you do not want to share your email!'></input><br></br>
                    <label id="formLabel">Message:</label><br></br>
                    <textarea id='formInputBoxFeedback' cols='67' rows='10' name='Feedback' required></textarea><br></br>
                    <input id='formSubmit' type='Submit' value='Submit your feedback!'></input>
                </div>
              </form>
            </div>
        </div>
    )
}

export default PopUp;