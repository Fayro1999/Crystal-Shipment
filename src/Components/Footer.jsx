import React,{useEffect, useState} from "react";
import rectangle8 from '../assets/Rectangle 8.png'
import rectangle9 from '../assets/Rectangle 9.png'
import rectangle10 from '../assets/Rectangle 10.png'
import rectangle11 from '../assets/Rectangle 11.png'

function Footer() {
  const [formData, setFormData] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData(value,);
    setError(""); // Resetting error when input changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.trim()) {
      setError("This field is required");
    } else {
      // Process the form data here
      alert("Message sent sucessfully");
    }
  };
  return (
    <>
    <div className="bg-dark text-light">
        <div className="container">
        <div className="row pt-5">
            <div className="col-md-3">
               <h4>CRYSTAL SHIPMENT</h4>
               <p>Crystal Shipment Services is a global supplier of transport and logistics solutions.
                 We have offices in more than 20 countries and an international network of partners and agents.</p>
            </div>

            <div className="col-md-3">
              <h4>QUICK LINKS</h4>
              <ul className="list-unstyled ">
               <li><a href="" className='text-decoration-none text-light '>All Services</a></li>
               <li><a href="" className='text-decoration-none text-light'>All Services</a></li> 
               <li><a href=""className='text-decoration-none text-light'>All Services</a></li>
               <li><a href=""className='text-decoration-none text-light'>All Services</a></li> 
              </ul>
              
            </div>
            
            <div className="col-md-3">
            <h4>PHOTO GALLERY</h4>
            <div className="d-flex mt-3">
          <div className="flex-grow-1 me-2">
            <img src={rectangle8} alt="" className='img-fluid'/>
         </div>
         <div className="flex-grow-1 ms-2">
         <img src={rectangle9} alt="" className='img-fluid' />
          </div>
        </div>

        <div className="d-flex mt-3">
          <div className="flex-grow-1 me-2">
          <img src={rectangle10} alt="" className='img-fluid' />
          </div>
           <div className="flex-grow-1 ms-2">
           <img src={rectangle11} alt="" className='img-fluid' />
          </div>
        </div>

            </div>

            <div className="col-md-3">
               <h4>OUR NEWSLETTER</h4>
               <p>Sign up today for tips and latest news and exclusive special offers.</p> 
               <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter your email' className={`form-control ${error && "is-invalid"}`} value={formData} onChange={handleChange}/>
                {error && <div className="invalid-feedback">{error}</div>}
                <button className="btn btn-danger mt-3">Submit</button>
               </form>
            </div>
        </div>
        <p className='text-center mt-5'>© Copyright 2023 All Right Reserved.</p>
        </div>
        
    </div>

    </>
  )
}

export default Footer