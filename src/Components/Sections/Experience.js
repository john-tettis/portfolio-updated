
import React, { forwardRef } from 'react';
import WorkCard from '../Utils/WorkCard'
import '../../styles/Experience.css'
import SectionHeader from '../Utils/SectionHeader';


const history = [
   {
        title: "AI Data Specialist",
        company: "Surge AI",
        description: [
            "Developed accurate, from-scratch reference solutions in Python, TypeScript, and React to train AI models on complex programming logic and edge cases.",
            "Wrote multi-turn technical prompts and heavily refactored AI-generated code to enforce best practices in modularity, performance, and documentation.",
            "Debugged and rewrote flawed algorithms to generate precise training datasets, directly improving the code-generation accuracy of five distinct language models."
        ],
        start: "April 2024",
        end: "Present",
        skills: ["Python", "TypeScript", "React", "Node.js", "LLM Evaluation", "Test-Driven Development"]
    },
    {
        title:"Marketing Representative",
        company:"Renewal by Andersem",
        description:[
            "Led team meetings, enhancing collaboration and efficiency.",
            "Developed Microsoft Teams bots, streamlining workflows.",
            "Automated performance metric integrations from multiple tracking platforms, improving performance analysis.",
            "Conducted regular training sessions.",
            "Coached peers, elevating field metrics and results."
        ],
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