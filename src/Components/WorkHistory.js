
import React, { useEffect, useRef } from 'react';
import WorkCard from './Utils/WorkCard'
import '../styles/workHistory.css'


const history = [
    {
        title:"WORK I DID",
        company:"DATA ANNOTATION",
        description:```
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras neque dui, interdum tempus lacus ac, iaculis pharetra lorem. Sed ultricies dolor quis elit 
        convallis accumsan. Suspendisse sapien felis, volutpat quis purus nec, consectetur condimentum orci.
        Nunc sed risus diam. Sed viverra elit sit amet iaculis maximus. Proin euismod semper risus. Aliquam semper
        tincidunt nisl, ut feugiat lectus fringilla at. Duis laoreet dui semper porttitor semper. Nulla facilisi. 
        ```

    }
]
const WorkHistory= ()=>{


    return(
    <div className='work-history'>
        {history.map((job, index) => (
          <Card 
            key={index} 
            title={job.title} 
            company={job.company} 
            description={job.description} 
          />
        ))}
        

        
    </div>
        

    )

}

export default WorkHistory