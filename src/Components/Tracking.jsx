import React from 'react'
import Track from './TrackingInput'


function Tracking() {
  return (
    <>
    <div className="second">
        <div className="container">
             <h4 className='text-center py-5 text-light'>Tracking</h4>
        </div>
       </div>

       <div className="container">
        <div className="row">
            <div className="col-md-6"  data-aos="fade-up">
                <h4 className='mt-3'style={{fontWeight:"900"}}v>TRACK YOUR SHIPMENT</h4>
                <div className="bg-danger rounded my-3"></div>
                <p className='py-3'>If you require maximum visibility to your Freight transactions,
                     contact our logistic customer team or you can track your cargo by using below tracking system.</p>

            </div>

            <div className="col-md-6"  data-aos="fade-up">
              <Track></Track>
            </div>
        </div>
       </div>
    </>
  )
}

export default Tracking
