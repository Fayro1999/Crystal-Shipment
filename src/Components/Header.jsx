import React from 'react'

function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="/"><img src={'../src/assets/logo.png'} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto"style={{fontWeight:"900"}}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Tracking">Tracking</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Contact">Contact</a>
        </li>
      </ul>
      <a href="" className="btn btn-danger">Request a Quote</a>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header