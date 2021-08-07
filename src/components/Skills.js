import React from 'react'
import html5 from "../images/html-5.png"
import css from "../images/css.png"
import javascript from "../images/javascript.png"
import react from "../images/react.png"
import net from "../images/netcore.png"
import csharp from "../images/csharp.png"
import node from "../images/node.png"
import mongodb from "../images/mongodb.png"
import bitbucket from "../images/bitbucket.png"
import jira from "../images/jira.png"
import confluence from "../images/confluence.png"
import github from "../images/github.png"
const Skills = () => {
    return (
        <div id="skills">
        <div className="container">
        <h1>SKILLS</h1>
        <hr className="heading-rule"/>
        <h2>Front End</h2>
        <hr/>
        <div className="row">
    <div className="col-lg-3 col-md-6 col-sm-12">
    <img className="tech-image" alt="Not found" src={html5}></img>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
    <img className="tech-image" alt="Not found" src={css}></img>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
    <img className="tech-image" alt="Not found" src={javascript}></img>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
    <img className="tech-image" alt="Not found" src={react}></img>
    </div>
  </div>   
  <h2>Back End</h2>
  <hr/>
  <div className="row">
    <div className="col-lg-3 col-md-6 col-sm-12">
    <img className="tech-image" alt="Not found" src={net}></img>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
    <img className="tech-image" alt="Not found" src={csharp}></img>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
    <img className="tech-image" alt="Not found" src={node}></img>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
    <img className="tech-image" alt="Not found" src={mongodb}></img>
    </div>
  </div>  
  <h2>Collaboration Tools</h2> 
  <hr/>
  <div className="row">
    <div className="col-lg-3 col-md-6 col-sm-12">
    <img className="tech-image" alt="Not found" src={bitbucket}></img>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
    <img className="tech-image" alt="Not found" src={jira}></img>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
    <img className="tech-image" alt="Not found" src={confluence}></img>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
    <img className="tech-image" alt="Not found" src={github}></img>
    </div>
  </div>   
        </div>
        </div>
    )
}

export default Skills
