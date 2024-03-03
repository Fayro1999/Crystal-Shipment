import React from 'react'
import about from '../assets/about-1-1 1.png'
import air from '../assets/air.png'
import land from '../assets/land.png'
import water from '../assets/water.png'
import delivery from '../assets/delivery.png'
import location from '../assets/location.png'
import box from '../assets/box.png'
import Form from './Form'

function Home() {
  return (
<>
  <div className="first text-light ">
    <div className="container pt-5">
      <div className="subtitle text-center pt-5"  data-aos="fade-up">
        <h1>Easy & Quick Cargo Shipping Services </h1>
        <p>Book low cost sea freight shipping services. Get an instant quote.</p>
        <a href="/Tracking" className="btn btn-danger text-light">Track Goods Here</a>
      </div>
        
    </div>
  </div>

  <div className="container">
    <h4 className='text-center mt-3' style={{fontWeight:"900"}}  data-aos="fade-up">Welcome to Crystal Shipment</h4>
    <div className="bg-danger mx-auto rounded"  data-aos="fade-up"></div>
    <p className='text-center mt-3' style={{fontWeight:'800px'}}  data-aos="fade-up">Crystal Shipment is more than logistics. We can also optimize your packaging,
       manage your materials sourcing, and so much more.</p>

       <div className="row">
      <div className="col-md-6"  data-aos="fade-up">
        <img src={about} alt="" className='img-fluid rounded' />
             </div>
      <div className="col-md-6"  data-aos="fade-up">
        <p className='text-danger '>TRANSPORTATION COMPANY</p>
        <h4 className='mt-3' style={{fontWeight:"900"}}>We Provide Full Range Logistics Solution</h4>
        <p className='mt-3'>We strongly believe that pursuing all of these goals is in our interest
           and in the interest of all of our stakeholders are us customers, employees,
            investors and the planet as a whole. We add value to cargo people’s interaction
             with us, with excellent services or products. Engaging our employees and
              nurture investment on the stock holds market we show concern , by engaging
               our employees and nurture investment on the stock holds market we show
                concern.</p>

                <a href="" className="btn btn-danger sm-mx-auto" data-aos="fade-up">Learn More</a>

      </div>
    </div>
  
  </div>

  <div className="container">
    <p className='text-danger text-center mt-5' data-aos="fade-up">TYPES OF LOGISTICS</p>
    <h4 className='text-center' style={{fontWeight:"900"}}  data-aos="fade-up">Covering All Logistics Fields</h4>

    <div className="row"  data-aos="fade-up">
      <div className="col-md-4 mb-3">
         <img src={air} alt="" className='img-fluid rounded' />
         <h5>Air Freight</h5>
         <p>As a leader in global air freight forwarding, OIA Global excels in providing
           tailored transportation.... <a href="" className='text-danger text-decoration-none'>Read more</a></p>
      </div>

      <div className="col-md-4 mb-3">
      <img src={water} alt="" className='img-fluid rounded' />
         <h5>Sea Freight</h5>
         <p>Sea Freight plays perhaps the most vital role in most transportation 
          and supply chain a solutions...<a href="" className='text-danger text-decoration-none'>Read more</a></p>
      </div>

      <div className="col-md-4 mb-3">
      <img src={land} alt="" className='img-fluid rounded' />
         <h5>Land Freight</h5>
         <p>Cargo are transported at some stage of their journey along the
           world’s roads where we give...<a href="" className='text-danger text-decoration-none'>Read more</a></p>
      </div>


    </div>
    <div className="text-center mt-3">
      <a href="" className="btn btn-danger"  data-aos="fade-up">Load More</a>
    </div>
  </div>

  <div className="bg-warning mt-5">
  <div className="container pt-5">
    <div className="row">
       <div className="col-md-8">
         <h3 style={{fontWeight:"800"}}>Delivering your world one package at a time</h3>
         <p>Crystal Shipment is more than logistics.</p>

       </div>
       <div className="col-md-4 text-md-end">
          <a href="" className="btn btn-danger mb-3">Request a Quote</a>
       </div>
    </div>
  </div>
  </div>
  
  <div className="container mt-5">
    <div className="row">
      <div className="col-md-6" data-aos="fade-up" >
        <h4 style={{fontWeight:"900"}}>WHY CHOOSE US?</h4>
        <div className="d-flex mt-3">
          <div className="flex-grow-1 me-2">
            <img src={delivery} alt="" />
         </div>
         <div className="flex-grow-1 ms-2">
           <h4>Global supply Chain Solutions</h4>
           <p>Efficiently unleash cross-media information without cross-media value.</p>
          </div>
        </div>

        <div className="d-flex mt-3">
          <div className="flex-grow-1 me-2">
            <img src={location} alt="" />
         </div>
         <div className="flex-grow-1 ms-2">
           <h4  >Mobile Shipment Tracking</h4>
           <p>We Offers intelligent concepts for road and tail and well as complex special transport services</p>
          </div>
        </div>

        <div className="d-flex mt-3">
          <div className="flex-grow-1 me-2">
            <img src={box} alt="" />
         </div>
         <div className="flex-grow-1 ms-2">
           <h4>Careful Handling of Valuable Goods</h4>
           <p>Cargo HUB are transported at some stage of their journey along the world’s roads</p>
          </div>
        </div>


      </div>

      <div className="col-md-6"  data-aos="fade-up">
        <h4 style={{fontWeight:"900"}}>REQUEST A QUOTE</h4>
       <Form></Form>
        
      </div>
    </div>
  </div>
</>
  )
}

export default Home