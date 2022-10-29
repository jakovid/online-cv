import React from "react";

export default function Header(){
    return(
        <div id='header'>
            <div id='headerLeft'>
                <div id='headerName'>Jacob Dowdle</div>
                <div id='headerTitle'>Frontend Developer</div>
            </div>
            <div id='headerRight'>
                <div id='headerImages'>
                    <a href='https://github.com/jakovid'><img className='headerImage' src={require('../images/GitHubDark.png')} alt='github'/></a>
                    <a href='https://www.linkedin.com/in/jacobdowdle/'><img className='headerImage' src={require('../images/LinkedIn.png')} alt='linkedin'/></a>
                </div>
                <div id='email'>Email:jacobk.dowdle@gmail.com</div>
            </div>
        </div>
    )
}