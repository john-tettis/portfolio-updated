
import React, { forwardRef } from 'react';
import WorkCard from '../Utils/WorkCard'
import '../../styles/Experience.css'
import SectionHeader from '../Utils/SectionHeader';


const history = [
    {
        title:"Language Model Engineer",
        company:"Data Annotation Technologies",
        description:`Specialized in enhancing the accuracy and scalability of 
        five diverse language models by annotating datasets and creating thorough 
        tests in Python and JavaScript. Developed and improved solid code solutions, 
        utilizing modular design and detailed documentation. 
        Aimed at boosting model performance through careful dataset tagging 
        and strict validation protocols.
        `,

        start:"April 2024",
        end:"Present",
        skills:["Flask","Node.js","SQL", "Data Analytics", "Express","React"]
    },
    {
        title:"Marketing Representative",
        company:"Renewal by Andersem",
        description:`Streamlined operational workflows by creating custom Microsoft 
        Teams bots, which greatly improved team communication and task management. 
        Automated performance metric integrations using tools like Microsoft VBA and  Python, 
        allowing for more effective tracking and analysis. Conducted regular training 
        sessions and offered peer coaching to improve team performance and field results. 
        Led collaborative efforts to enhance marketing strategies, 
        consistently achieving measurable outcomes.`,
        start:"Jan 2023",
        end:"April 2024",
        skills:["Python", "VBA","Plotly","numPy", "Flask","SQL", "Data Analytics"]
    }
    

]
const Experience= forwardRef((props,ref)=>{


    return(
    <section id='experience' ref={ref}className='work-history section'>
        <SectionHeader>Experience</SectionHeader>
        {history.map((job, index) => (
          <WorkCard 
            key={index} 
            start={job.start}
            end={job.end}
            title={job.title} 
            company={job.company} 
            description={job.description} 
            skills={job.skills}
          />
        ))}
    </section>
        

    )

})

export default Experience