
import React, { forwardRef } from 'react';
import WorkCard from '../Utils/WorkCard'
import '../../styles/Experience.css'
import SectionHeader from '../Utils/SectionHeader';


const history = [
    {
        title: "Language Model Engineer",
        company: "Data Annotation Technologies",
        description: [
            "Enhanced the accuracy and scalability of five diverse language models by annotating datasets and creating thorough tests in Python and JavaScript.",
            "Developed and improved robust code solutions utilizing modular design and detailed documentation.",
            "Boosted model performance through careful dataset tagging and strict validation protocols."
        ],
        start: "April 2024",
        end: "Present",
        skills: ["Flask", "Node.js", "SQL", "Data Analytics", "Express", "React"],
        NDA:true
    },
    {
        title: "Marketing Operations Specialist",
        company: "Renewal by Andersen",
        description: [
            "Overhauled onboarding system by redesigning the front end and creating a backend interface to connect separate company APIs to one central portal.",
            "Streamlined operational workflows by creating custom Microsoft Teams bots, greatly improving team communication and task management.",
            "Automated performance metric integrations using tools like Microsoft VBA and Python, allowing for more effective tracking and analysis.",
            "Led collaborative efforts to enhance marketing strategies, consistently achieving measurable outcomes."
        ],
        start: "Jan 2023",
        end: "April 2024",
        skills: ["Python", "VBA", "Plotly", "numPy", "Flask", "SQL", "Data Analytics"],
        NDA:true
    }
]

const Experience = forwardRef((props, ref) => {
    return (
        <section id='experience' ref={ref} className='work-history section'>
            <SectionHeader>Experience</SectionHeader>
            {history.map((job, index) => (
                <WorkCard
                    key={index}
                    start={job.start}
                    end={job.end}
                    title={job.title}
                    company={job.company}
                    // Render description as a list
                    description={<ul className="list-disc pl-5 space-y-1">{job.description.map((item, i) => <li key={i}>{item}</li>)}</ul>}
                    skills={job.skills}
                    NDA={job.NDA}
                />
            ))}
        </section>
    )
})

export default Experience