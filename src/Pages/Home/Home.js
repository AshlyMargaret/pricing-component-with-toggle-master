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

    const style = {  backgroundColor: "#9DA1EF" , height:"370px" , color:"white"}

    const buttonStyle = {  
      backgroundColor: "white" , 
      padding:"15px" ,
      color:"#9DA0EF",
      borderRadious:"25px",
      border : "none",
      cursor : "pointer",
      }

    const borderStyle = {
      borderTop:"1px solid white",
    }

    const borderStyleBottom = {
      borderBottom:"1px solid white",
    }


    const basicData = { 
      name : "Basic",
      price : "$199.99" , 
      detail1 : "500GB STORAGE", 
      detail2 : "2 USERS ALLOWED" , 
      detail3 : "SEND UP TO 3 GB" 
    }

    const professionalData = { 
      name : "Professional",
      price : "$249.99" , 
      detail1 : "1TB STORAGE", 
      detail2 : "5 USERS ALLOWED" , 
      detail3 : "SEND UP TO 13 GB" 
    }

    const masterData = {
      name : "Master",
      price : "$399.99" , 
      detail1 : "2TB STORAGE", 
      detail2 : "10 USERS ALLOWED" , 
      detail3 : "SEND UP TO 20 GB" 
    }

    const basicData1 = { 
      name : "Basic",
      price : "$19.99" , 
      detail1 : "500GB STORAGE", 
      detail2 : "2 USERS ALLOWED" , 
      detail3 : "SEND UP TO 3 GB" 
    }

    const professionalData1 = { 
      name : "Professional",
      price : "$24.99" , 
      detail1 : "1TB STORAGE", 
      detail2 : "5 USERS ALLOWED" , 
      detail3 : "SEND UP TO 13 GB" 
    }

    const masterData1 = { 
      name : "Master",
      price : "$39.99" , 
      detail1 : "2TB STORAGE", 
      detail2 : "10 USERS ALLOWED" , 
      detail3 : "SEND UP TO 20 GB" 
    }
    
  return (
    <div className='home'>
         <div className="homeTitle">
          <div className="h2">
          <h2>Our Pricing</h2>
          </div>     
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
              {
                checked ? <Card Data={basicData1}/>: <Card Data={basicData}/>
              }
            
            </div>
            <div className="section2">
              {
                 checked ? <Card style={style} Data={professionalData1} buttonStyle={buttonStyle} borderStyle={borderStyle} borderStyleBottom={borderStyleBottom}/>: <Card style={style} Data={professionalData} buttonStyle={buttonStyle} borderStyle={borderStyle} borderStyleBottom={borderStyleBottom}/>
              }
            
            </div>
            <div className="section3">
              {
                checked ? <Card  Data={masterData1}/>: <Card  Data={masterData}/>
              }
            
            </div>          
         </div>
    </div>
  )
}

export default Home