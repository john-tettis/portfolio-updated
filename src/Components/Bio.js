import React from 'react';
import '../styles/Bio.css'
import '../styles/Utils/Animations.css'

const Bio = ({loading})=>{


    return(
        <div className='bio '>
        <h1 className={'name ' + (loading ? '': ' slide-in one')}>John Tettis</h1>
            <h3 className={'title ' + (loading ? '': ' slide-in one')}>Back End Engineer</h3>
            <div>
            <p className={'desc ' + (loading ? '': ' slide-in two')}> I build scalable and elegant solutions for data driven businesses. </p>
                <div className={'name ' + (loading ? '': ' slide-in three')}>
                    <div className='sub-desc'>
                        <p>
                           Builds efficient and streamlined solutions. 

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

};

export default Bio