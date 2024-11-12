import Bio from './Bio';
import React, { useEffect, useRef } from 'react';
import '../styles/scrollSection.css'
 
const ScrollSection= ({children})=>{


    return(
    <div className='scroll-section'>
        <p>
                I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. 
            My favorite work lies at the intersection of design and development,
            creating experiences that not only look great but are meticulously built for performance and usability.
        </p>

        <p>
                Currently, I'm a Senior Front-End Engineer at Klaviyo, specializing in accessibility.
            I contribute to the creation and maintenance of UI components that power Klaviyo’s frontend,
            ensuring our platform meets web accessibility standards and best 
            practices to deliver an inclusive user experience.
        </p>


        <p>
                In the past, I've had the opportunity to develop software across a variety of settings
            — from advertising agencies and large corporations to start-ups and small digital product studios.
            Additionally, I also released a comprehensive video course a few years ago, guiding learners 
            through building a web app with the Spotify API.
        </p>

        <p>
                In my spare time, I’m usually climbing,
            reading, hanging out with my wife and two cats
            , or running around Hyrule searching for Korok
            eedsKorok seeds.
        </p>
        </div>
        

    )

}

export default ScrollSection