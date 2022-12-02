import React from 'react'
import './Card.css'

function Card(props) {
  
  return (
    <div className='card' >
       <div className="cardBox card" style={props.style}>
                <div className="cardTitle">
                 <h3>{props.Data.name}</h3>
                </div>
                <div className="priceSection">
                <h1>{props.Data.price}</h1>
                </div>
                <div className="storageDetails">
                    <div className="detail1" style={props.borderStyle}>
                        <p>{props.Data.detail1}</p>
                    </div>
                    <div className="detail2" style={props.borderStyle}>
                    <p>{props.Data.detail2}</p>
                    </div>
                    <div className="detail3" style={props.borderStyle}>
                    <p style={props.borderStyleBottom}>{props.Data.detail3}</p>
                    </div>
                </div>
                <div className="button">
                   <button style={props.buttonStyle} >LEARN MORE</button>
                </div>
            </div>
    </div>
  )
}

export default Card