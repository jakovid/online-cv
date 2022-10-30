import React from "react";

export default function Education(){
    return(
        <div id='educationContainer'>
            <div id='educationTitle'>Education</div>

            <div class='educationItem'>
                <div class='educationItemLeft'>
                    <div class='educationItemName'>The Odin Project</div>
                    <div class='educationItemFocus'>Web Development Curriculum</div>
                    <div class='educationItemDuration'>2021 - Present</div>
                </div>
                <div class='educationItemRight'>
                    <div class='educationItemLocation'>Remote</div>
                    <div class='educationItemDescription'>I am self teaching myself the JavaScript curriculum, which includes advanced HTML, CSS, JS, ReactJS, 
                    NodeJS, MongoDB, Firebase, and Express. Projects created include: Tic Tac Toe, Drawing Pad, Rock Paper Scissors, Todo-List, Mock Landing Pages.</div>
                    <div class='educationItemLanguages'>
                        <div class='lang'>CSS</div>,  <div class='lang'>HTML</div>, <div class='lang'>JavaScript</div>, <div class='lang'>ReactJS</div>
                    </div>
                </div>
            </div>

            <div class='educationItem'>
                <div class='educationItemLeft'>
                    <div class='educationItemName'>Fudan University</div>
                    <div class='educationItemFocus'>Master of Law - Political Science</div>
                    <div class='educationItemDuration'>2017 - 2019</div>
                </div>
                <div class='educationItemRight'>
                    <div class='educationItemLocation'>Shanghai, China</div>
                    <div class='educationItemDescription'>Thesis: Emerging and Traditional Donors in Developing States: The Determinants of Chinese and American Official Financing in Africa.</div>
                    <div class='educationItemLanguages'>
                        <div class='lang'>Stata</div>
                    </div>
                </div>
            </div>

            <div class='educationItem'>
                <div class='educationItemLeft'>
                    <div class='educationItemName'>Shanghai Jiaotong University</div>
                    <div class='educationItemFocus'>Chinese Language - Mandarin</div>
                    <div class='educationItemDuration'>2016 - 2017</div>
                </div>
                <div class='educationItemRight'>
                    <div class='educationItemLocation'>Shanghai, China</div>
                    <div class='educationItemDescription'>I enrolled to prepare myself for work and school in China.</div>
                </div>
            </div>

            <div class='educationItem'>
                <div class='educationItemLeft'>
                    <div class='educationItemName'>Miami University</div>
                    <div class='educationItemFocus'>Bachelor of Science - Business</div>
                    <div class='educationItemDuration'>2011-2014</div>
                </div>
                <div class='educationItemRight'>
                    <div class='educationItemLocation'>Oxford, Ohio</div>
                    <div class='educationItemDescription'>My study abroad opportunities in China, Japan, and South Korea led to a deep appreciation for the world's various cultures.</div>
                </div>
            </div>

        </div>
    )
}