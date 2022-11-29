import React from 'react'

function Card() {
  return (
    <div className='card'>
       <div className="cardBox card">
                <div className="cardTitle">
                 <h3>Basic</h3>
                </div>
                <div className="priceSection">
                <h1>$ 199.99</h1>
                </div>
                <div className="storageDetails">
                    <div className="detail1">
                        <h3>500 GB STORAGE</h3>
                    </div>
                    <div className="detail2">
                    <h3>500 GB STORAGE</h3>
                    </div>
                    <div className="detail3">
                    <h3>500 GB STORAGE</h3>
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