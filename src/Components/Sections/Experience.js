
import React, { forwardRef } from 'react';
import WorkCard from '../Utils/WorkCard'
import '../../styles/Experience.css'
import SectionHeader from '../Utils/SectionHeader';


const history = [
    {
        title:"Language Model Engineer",
        company:"Data Annotation Technologies",
        description:`Collaborate with top AI firms (Cursor, Claude, Google, Meta etc) to build and
                    enhance developer tools.
                    Create scenarios where current AI models fail (large codebases, niche errors,
                    complex industry situations), then create, test, and verify solutions.
                    Work with clients to pinpoint model failures, create plans for improvement, and
                    structure projects to gather and clean relevant data.
                    Use the data gathered to improve models and deliver expected benchmarks to

                            `,

        start:"April 2024",
        end:"Present",
        skills:["Flask","Node.js","SQL", "Data Analytics", "Express","React"]
    },
    {
        title:"Marketing Representative",
        company:"Renewal by Andersem",
        description:`Led team meetings, enhancing collaboration and efficiency.
                    Developed Microsoft Teams bots, streamlining workflows.
                    Automated performance metric integrations from multiple tracking platforms,
                    improving performance analysis.
                    Conducted regular training.
                    Coached peers, elevating field metrics and result`,
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