import React, { useEffect, useRef } from 'react';
import '../styles/Bio.css'

const Bio = ()=>{


    return(
        <div className='bio '>
            <h1 className='name slide-in one'>John Tettis</h1>
            <h3 className='title slide-in one'>Backend Engineer</h3>
            <div>
            <p className="desc slide-in two"> <bold>Hi!</bold> I'm a software engineer skilled in Python and JavaScript, with a focus on backend development, database management, and data analysis. 
               
                 </p>
                <div className="desc-container slide-in three">
                    <div className='sub-desc'>
                        <p>
                           Builds efficient, streamlined, and robust solutions. 

                        </p>
                        
                    </div>
                    <div  className='sub-desc'>
                        <p>
                            Unique insights into user experience and psychology

                        </p>
                
                    </div>
                </div>

            </div>
           

        </div>

    )

}

export default Bio