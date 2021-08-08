import React from 'react'
import profile from "../images/profile.png"
const AboutPage = () => {
    return (
        <div id="about">
  <div className="container">
  <div className="row">
    <div className="col-lg-6 col-md-6">
    <img className="rounded-circle" alt="Not found" src={profile}></img>
    </div>
    <div className="col-lg-6 col-md-6">
      <p className="description">I am a full stack web developer who finds immense interest in problem solving and coding. I am a team player and a keen learner.</p>
    </div>
  </div>
</div>
</div>
    )
}

export default AboutPage
