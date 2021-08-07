import React from 'react'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
  <span className="navbar-brand">ALISHA VINOD</span>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#about">ABOUT</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#skills">SKILLS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#projects">PROJECTS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#social">CONTACT</a>
      </li>
      </ul>
  </div>
  </div>
</nav>
    )
}

export default NavBar

