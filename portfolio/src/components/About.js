import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class About extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade>About.</Fade></h1>
            <Fade bottom>
                    <p>{data.abouttext}</p>
            </Fade>
            </div>
            {data.ShowAboutImage ? <img src={require('../assets/port.png')} style={{width:"500px"},{height:"500px"}} alt='about image'></img> : null}
            

        </div>  );
    }
}
 
export default About;