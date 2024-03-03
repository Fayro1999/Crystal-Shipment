import React,{useEffect, useState} from "react";

function TrackingInput() {

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
    }else if (formData.length < 10){
      setError("Must be upto 10 character")
    } else {
      // Process the form data here
      alert("Tracking API currently not available");
    }
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
                <input type="text" name="track" className={`form-control mt-3 ${error && "is-invalid"}`} value={formData} placeholder='Enter your tracking ID Here' onChange={handleChange}/>
                {error && <div className="invalid-feedback">{error}</div>}
                <button className="btn btn-danger my-5 px-5">Track</button>
               </form>
    </>
  )
}

export default TrackingInput