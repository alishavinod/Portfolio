import React from 'react'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
  <a className="navbar-brand" href="#">ALISHA VINOD</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">ABOUT</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">SKILLS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">PROJECTS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">EXPERIENCE</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">CONTACT</a>
      </li>
      </ul>
  </div>
  </div>
</nav>
    )
}

export default NavBar

