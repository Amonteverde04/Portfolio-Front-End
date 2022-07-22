import React from 'react';
import '../Components/Name.css';
import Logo from '../Assets/Logo.png';

class Name extends React.Component {
    //<img className='Logo' src={Logo} alt='Alex Monteverde Logo'/>
    render() {
        return [
        <div className='NameHolder'>
            <div className='BorderLeft'></div>
            <h1 className='FirstName'>Alex</h1>
            <h1 className='LastName'>Monteverde</h1>
            <div className='BorderBottom'></div>
            <div className='TitleHolder'>
                <h2 className='Title'>Full Stack Developer</h2>
            </div>
        </div>
    ]
    }
}

export default Name;