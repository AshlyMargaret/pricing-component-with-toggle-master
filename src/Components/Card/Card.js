import React from 'react'
import './Card.css'

function Card(props) {
  
  return (
    <div className='card' >
       <div className="cardBox card" style={props.style}>
                <div className="cardTitle">
                 <h3>Basic</h3>
                </div>
                <div className="priceSection">
                <h1>{props.Data.price}</h1>
                </div>
                <div className="storageDetails">
                    <div className="detail1">
                        <h3>{props.Data.detail1}</h3>
                    </div>
                    <div className="detail2">
                    <h3>{props.Data.detail2}</h3>
                    </div>
                    <div className="detail3">
                    <h3>{props.Data.detail3}</h3>
                    </div>
                </div>
                <div className="button">
                   <button>LEARN MORE</button>
                </div>
            </div>
    </div>
  )
}

export default Card