
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
        title: "Marketing Operations Specialist",
        company: "Renewal by Andersen",
        description: [
            "Architected a centralized onboarding portal by developing a custom frontend and a Flask backend to integrate disparate enterprise APIs.",
            "Programmed and deployed custom Microsoft Teams bots using Python to automate task routing and streamline internal workflows.",
            "Engineered automated data pipelines using Python, SQL, and VBA to extract, transform, and load performance metrics into centralized analytics dashboards.",
            "Translated business requirements into technical automation solutions, driving measurable improvements in cross-functional operational efficiency."
        ],
        start: "Jan 2023",
        end: "April 2024",
        skills: ["Python", "Flask", "SQL", "VBA", "REST APIs", "Plotly", "NumPy"],
        NDA: true
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