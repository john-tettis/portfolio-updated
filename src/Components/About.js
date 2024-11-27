import React, { forwardRef} from 'react';
import '../styles/About.css'
 
const About= forwardRef((props,ref)=>{


    return(
    <section ref={ref} id="about" className='description'>
        <p className="about-paragraph">
            Combining my background in software engineering with a strong marketing focus, I excel at creating solutions that 
            connect technical advancements with business goals. While at Renewal by Andersen, I built a comprehensive metric 
            analysis system that automated performance tracking across various platforms. This project not only improved 
            operational efficiency but also provided valuable insights, allowing the marketing team to optimize campaigns 
            and boost ROI. My technical skills include Python, JavaScript, Flask, and React, enabling me to handle 
            full-stack development projects effectively and at scale.
        </p>

        <p className="about-paragraph">
            With my marketing foundation, I approach software design from a user-centered angle, ensuring that solutions 
            meet both technical specifications and user expectations. In my free time, I express my creativity through music 
            production, hiking, and traveling—activities that inspire new ideas and innovative solutions. I look forward to 
            joining a team where I can apply my combined skills to make a meaningful impact and continue my growth as a 
            software engineer.
        </p>
    </section>
        

    )

});

export default About