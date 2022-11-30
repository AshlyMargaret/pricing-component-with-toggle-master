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

    const style = {  backgroundColor: "#9DA1EF" , height:"350px" , color:"white" };

    const basicData = { 
      price : "$19.99" , 
      detail1 : "500GB STORAGE", 
      detail2 : "2 USERS ALLOWED" , 
      detail3 : "SEND UP TO 3 GB" 
    }

    const professionalData = { 
      price : "$24.99" , 
      detail1 : "1TB STORAGE", 
      detail2 : "5 USERS ALLOWED" , 
      detail3 : "SEND UP TO 13 GB" 
    }

    const masterData = { 
      price : "$39.99" , 
      detail1 : "2TB STORAGE", 
      detail2 : "10 USERS ALLOWED" , 
      detail3 : "SEND UP TO 20 GB" 
    }
    
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
            <Card Data={basicData}/>
            </div>
            <div className="section2">
            <Card style={style} Data={professionalData}/>
            </div>
            <div className="section3">
            <Card  Data={masterData}/>
            </div>          
         </div>
    </div>
  )
}

export default Home