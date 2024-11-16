
import React, { forwardRef } from 'react';
import WorkCard from './Utils/WorkCard'
import '../styles/workHistory.css'


const history = [
    {
        title:"Language Model Engineer",
        company:"DATA ANNOTATION",
        description:`
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras neque dui, interdum tempus lacus ac, iaculis pharetra lorem. Sed ultricies dolor quis elit 
        convallis accumsan. Suspendisse sapien felis, volutpat quis purus nec, consectetur condimentum orci.
        Nunc sed risus diam. Sed viverra elit sit amet iaculis maximus. Proin euismod semper risus. Aliquam semper
        tincidunt nisl, ut feugiat lectus fringilla at. Duis laoreet dui semper porttitor semper. Nulla facilisi. 
        `,
        duration:"2024 - Present",
        skills:["Python", "Flask","JavaScript", "Express","SQL", "Data Analytics"]
    },
    {
        title:"Language Model Engineer",
        company:"DATA ANNOTATION",
        description:`
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras neque dui, interdum tempus lacus ac, iaculis pharetra lorem. Sed ultricies dolor quis elit 
        convallis accumsan. Suspendisse sapien felis, volutpat quis purus nec, consectetur condimentum orci.
        Nunc sed risus diam. Sed viverra elit sit amet iaculis maximus. Proin euismod semper risus. Aliquam semper
        tincidunt nisl, ut feugiat lectus fringilla at. Duis laoreet dui semper porttitor semper. Nulla facilisi. 
        `,
        duration:"2024 - Present",
        skills:["Python", "Flask","JavaScript", "Express","SQL", "Data Analytics"]
    }
    

]
const Experience= forwardRef((props,ref)=>{


    return(
    <section id='experience' ref={ref}className='work-history'>
        {history.map((job, index) => (
          <WorkCard 
            key={index} 
            duration={job.duration}
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