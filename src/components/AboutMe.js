import React from "react";

export default function AboutMe(){
    return(
        <div id='aboutMe'>
            <div id='aboutMeTitle'>About Me</div>
            <div id='aboutMain'>
                <div id='aboutLeft'>
                    <img id='profilePic' src={require('../images/jacob.jpg')} alt='its a me, Jakio.' />
                </div>
                <div id='aboutRight'>
                    <div class='aboutMeSection'>
                        <div id='education'>Programming Education</div>
                        <ul>
                            <li>Self-taught programmer through The Odin Project's JavaScript path.</li>
                            <li>Scholarly and Work experience with data analysis software.</li>
                        </ul>
                    </div>

                    <div class='aboutMeSection'>
                        <div id='experience'>Experience</div>
                        <ul>
                            <li>Years of experience working in start-up environments.</li>
                            <li>Bachelor of Science in Business</li>
                        </ul>
                    </div>

                    <div class='aboutMeSection'>
                        <div id='experience'>Languages</div>
                        <ul>
                            <li>English - Native</li>
                            <li>Chinese - Conversational</li>
                        </ul>
                    </div>        
                </div>
            </div>
        </div>
    )
}