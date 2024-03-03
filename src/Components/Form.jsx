import React,{useEffect, useState} from "react";

function Form() {
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  subject: '',
  messages: ''
  })

  const[errors, setErrors] = useState({});

  const handleChange = (e) => {
    const{name, value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    });
}

const validateForm = () => {
  const errors = {};
 if (!formData.name.trim()) {
   errors.name = "This Field Required";
   }
   if (!formData.email.trim()) {
     errors.email = "This Field Required";
     }
     if (!formData.subject.trim()) {
       errors.subject = "This Field Required";
       }
       if (!formData.messages.trim()) {
         errors.message = "This Field Required";
         }

         setErrors(errors);
 return Object.keys(errors).length === 0;
 };

 const handleSubmit = (e) =>{
  e.preventDefault();
  if (validateForm()) {
    // processing
    alert('Message sent successfully')
    
  }
 };
 
  return (
    <>
      <form action="" onSubmit={ handleSubmit}>
        <div className="d-flex mt-3">
          <div className="flex-grow-1 me-2">
            <input type="text" placeholder='Name' name="name"  value={formData.name} className={`form-control  ${errors.name && 'is-invalid'}`} onChange={handleChange} />
            {errors.name && <div className="Invalid-feedback text-danger">{errors.name}</div>}

         </div>
         <div className="flex-grow-1 ms-2">
            <input type="text"  placeholder='Email' name="email"className={`form-control  ${errors.email && 'is-invalid'}`}
             value={formData.email} onChange={handleChange}/>
             {errors.email && <div className="Invalid-feedback text-danger">{errors.email}</div>}

          </div>
        </div>

        <div className="d-flex mt-3">
          <div className="flex-grow-1 me-2">
            <input type="text"  placeholder='Phone (Optional)' name="phone" className={`form-control  ${errors.phone && 'is-invalid'}`} value={formData.phone} onChange={handleChange}/>
          </div>
           <div className="flex-grow-1 ms-2">
            <input type="text"  placeholder='Subject' name="subject" className={`form-control  ${errors.subject && 'is-invalid'}`} value={formData.subject} onChange={handleChange}/>
            {errors.subject && <div className="Invalid-feedback text-danger">{errors.subject}</div>}

          </div>
        </div>

        <textarea name='messages' id="" cols="30" rows="8"className={`form-control mt-3  ${errors.name && 'is-invalid'}`} placeholder='Enter your message here' value={formData.messages}
       onChange={handleChange}></textarea>
       {errors.name && <div className="Invalid-feedback text-danger">{errors.messages}</div>}

        <button className="btn btn-danger my-3 px-5">Submit</button>
        </form>
    </>
  )
}

export default Form