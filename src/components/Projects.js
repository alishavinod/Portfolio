import React from 'react'
import tictactoe from "../images/tictactoe.png"
import covid from "../images/Covid-19.png"
const Projects = () => {
    return (
        <div id="projects">
        <div className="container">
        <h1>TIC TAC TOE</h1>
        <hr className="heading-rule"/>
        <div className="row">
    <div className="col-lg-6 col-md-6">
    <img className="project-image" alt="Not found" src={tictactoe}></img>
    </div>
    <div className="col-lg-6 col-md-6">
      <p className="description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <button type="button" class="btn btn-outline-light">See Online</button>
    </div>
  </div>
  <h1 className="project-heading">COVID-19 Dataset Analysis</h1>
        <hr className="heading-rule"/>
        <div className="row">
    <div className="col-lg-6 col-md-6">
      <p className="description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <button type="button" class="btn btn-outline-light">See Online</button>
    </div>
    <div className="col-lg-6 col-md-6">
    <img className="project-image" alt="Not found" src={covid}></img>
    </div>
  </div>
        </div>
        </div>
    )
}

export default Projects
