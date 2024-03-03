import React from 'react'
import sms from '../assets/sms.png'
import whatsapp from '../assets/whatsapp.png'
import call from '../assets/call-calling.svg'
import Form from './Form'

function Contact() {
  return (
    <>
      <div className="second">
        <div className="container">
             <h4 className='text-center py-5 text-light'>Contact</h4>
        </div>
       </div>

       <div className="container mt-5">
       <div className="row">
         <div className="col-md-6"  data-aos="fade-up">
            <p>Kindly call us or join our support group on WhatsApp.</p>
            <div className="d-flex mt-3">
               <div className="me-2">
                   <img src={call} alt="" className='img-fluid' />
               </div>
               <div className=" ms-2">
                   <p>+234 9072211222</p>
               </div>
            </div>

           <div className="d-flex mt-3">
              <div className=" me-2">
                  <img src={whatsapp} alt="" className='img-fluid' />
             </div>
             <div className=" ms-2">
                  <p>+234 8167000077</p>
             </div>
           </div>

          <div className="d-flex mt-3">
             <div className=" me-2">
                 <img src={sms} alt="" className='img-fluid' />
             </div>
             <div className=" ms-2">
                 <p>info@crystalshipment.com</p>
             </div>
          </div>


    


     </div>

    <div className="col-md-6" data-aos="fade-up">
    <Form></Form>
    </div>
</div>
     </div>
    </>
  )
}

export default Contact