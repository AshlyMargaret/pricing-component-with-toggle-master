import React from 'react'
import { useState } from 'react'
import Switch from "react-switch";
import Card from '../../Components/Card/Card';
import './Home.css'




function Home() {
    const [checked, setChecked] = useState(false);


    const handleChange = nextChecked => {
        setChecked(nextChecked);
      };
    
    
  return (
    <div className='home'>
         <div className="homeTitle">
             <h2>Our Pricing</h2>
             <div className="toggleSection">
                <div className="anualTxt">
                  <p>Annually</p>
                </div>
                <div className="toggleBtn">
                <Switch  onChange={handleChange} checked={checked} offColor="#767CDE" onColor="#767CDE" uncheckedIcon={false} checkedIcon={false} height={20} width={48} className="react-switch"	/>         
                </div>
                <div className="monthlyTxt">
                  <p>Monthly</p>
                </div>
             </div>
         </div>
         <div className="cardSection">
            <div className="section1">
            <Card/>
            </div>
            <div className="section2">
            <Card/>
            </div>
            <div className="section3">
            <Card/>
            </div>          
         </div>
    </div>
  )
}

export default Home