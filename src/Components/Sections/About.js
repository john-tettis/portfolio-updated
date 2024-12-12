import React, { forwardRef} from 'react';
import SectionHeader from '../Utils/SectionHeader';
import useScrollTo from '../hooks/useScrollTo';
import '../../styles/About.css'
 
const About= forwardRef(({projectRef},ref)=>{
    const scrollTo = useScrollTo()

    return(
    <section ref={ref} id="about" className='description section'>
         <SectionHeader>About</SectionHeader>
        <p className="about-paragraph">
            Combining my background in marketing with my passion for software and technology, 
            I excel at creating solutions tailored 
            to meet the business needs of any company with a marketing focus. Which happens to be most of them. Yay!
            My designs grab attention, direct decisions, and create a warm, intuitive and, 
            (if I can help it) <i>fun</i> experience for users.
        </p>

        <p className="about-paragraph">
            I am self taught - learning most of what I know today from diving headfirst into projects. At first as a hobby - 
            creating gizmos for my own personal amusement <a onClick={()=>scrollTo(projectRef)}>(See Projects)</a> -  and then gradually, by creating 
            products that do more than turn my lights on or water my plants. Products that serve <i>real</i> businesses, 
            with <i>real</i> needs.  
        </p>
        <p className="about-paragraph">
            When I am not hunched over my computer trying to find that god forsaken bug that has broken my whole application,
            I am usually creating music, learning a new trade or skill, or taking a hike with definetly not enough water (its never enough).
        </p>
    </section>
        

    )

});

export default About