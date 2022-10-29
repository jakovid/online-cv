import React from "react";

export default function AboutMe(){
    return(
        <div id='aboutMe'>
            <div id='aboutMeTitle'>About Me</div>
            <div id='aboutLeft'></div>
            <div id='aboutRight'>
                <div class='aboutMeSection'>
                    <div id='ah'>ah</div>
                    <ul>
                        <li>Self-Taught Programmer through The Odin Project</li>
                        <li>Front End Focus</li>
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
    )
}