import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
const Home = ()=>{
    const [letterClass,setLetterClass]= useState('text-animate')
    // const nameArray=['H','i','i','m','H','a','r','s','H']
    const jobArrat=['I',"",'a','m','','H','a','r','s','h','','P','a','t','a','r','e']
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
    
        // Cleanup the timeout to avoid memory leaks
        return () => clearTimeout(timeoutId);
    })
    return (
        <div className="container home-page">
        <div className="text-zone">
        
            <h1><span className={letterClass}>H</span>
            <span className={letterClass}>i,</span>
            {/* <br /> I'm Harsh <br/> */}
            {/* <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={15}
            /> */}
            <br></br>
            <AnimatedLetters letterClass={letterClass}
            strArray={jobArrat}
            idx={25} />
            </h1>
               <h2> A Front End Web/Mobile Developer</h2>
                <Link to="/contact" className="flat-btn">Contact Me </Link>
        
        </div>
        </div>
    )
}
export default Home;