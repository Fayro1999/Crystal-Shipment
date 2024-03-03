import React from 'react'
import air from '../assets/air.png'
import land from '../assets/land.png'
import water from '../assets/water.png'
import truck from '../assets/truck.png'
import service1 from '../assets/service 1.png'
import service2 from '../assets/service 2.png'
import service3 from '../assets/service 3.png'


function Services() {
  return (
    <>
       <div className="second">
        <div className="container">
             <h4 className='text-center py-5 text-light'>Services</h4>
        </div>
       </div>

       <div className="container mt-5">
       <div className="d-flex flex-wrap flex-lg-nowrap" data-aos="fade-up">
          <div className="flex-grow-1 me-2 mt-3">
            <img src={air} alt="" className='img-fluid rounded'/>
            <h4>Air Freight</h4>
            <p>As a leader in global air freight forwarding, OIA Global excels
                 in providing tailored transportation...<a href="" className='list-unstyled text-decoration-none text-danger' >Read more</a></p>
         </div>
         <div className="flex-grow-1 ms-2 mt-3">
         <img src={water} alt="" className='img-fluid rounded'/>
            <h4>Water Freight</h4>
            <p>Sea Freight plays perhaps the most vital role in most transportation
                 and supply chain solutions...<a href="" className='list-unstyled text-decoration-none text-danger' >Read more</a></p>
          </div>

          <div className="flex-grow-1 ms-2 mt-3">
         <img src={land} alt="" className='img-fluid rounded'/>
            <h4>Water Freight</h4>
            <p>Cargo are transported at some stage of their journey along the world’s
                 roads where we give...<a href="" className='list-unstyled text-decoration-none text-danger' >Read more</a></p>
          </div>
        </div>

        <div className="d-flex flex-wrap flex-lg-nowrap mt-3" data-aos="fade-up" >
          <div className="flex-grow-1 me-2 mt-3">
            <img src={service1} alt="" className='img-fluid rounded'/>
            <h4>Warehousing</h4>
            <p>Package and store your things effectively and securely to make sure them
               in storage, have certif...<a href="" className='list-unstyled text-decoration-none text-danger' >Read more</a></p>
         </div>
         <div className="flex-grow-1 ms-2 mt-3">
         <img src={service2} alt="" className='img-fluid rounded'/>
            <h4>Door to Door Delivery</h4>
            <p>Our expertise in transport management and planning allows us to design a solution hand...<a href="" className='list-unstyled text-decoration-none text-danger' >Read more</a></p>
          </div>

          <div className="flex-grow-1 ms-2 mt-3" >
         <img src={service3} alt="" className='img-fluid rounded'/>
            <h4>Packaging & Storage</h4>
            <p>Package and store your things effectively and securely to make sure them in storage, We...<a href="" className='list-unstyled text-decoration-none text-danger' >Read more</a></p>
          </div>
        </div>

       </div>

       <div className="container">
        <div className="row">
            <div className="col-md 6"  data-aos="fade-up">
            <img src={truck} alt="" className='img-fluid my-5' />
            </div>

            <div className="col-md-6"  data-aos="fade-up">
                <h4 className='mt-5' style={{fontWeight:"900"}}>THE COMPLETE SOLUTION</h4>
                <div className="bg-danger rounded mt-3"></div>
                <p className='my-3'>Our warehousing services are known nationwide to be one of the most reliable,
                     safe and affordable, because we take pride in delivering the best of warehousing 
                     services, at the most reasonable prices. Pleasure and praising pain was born and I will give you a
                     complete account of system, and expound actual teachings occasionally circumstances.</p>
            </div>
        </div>
       </div>
    </>
  )
}

export default Services