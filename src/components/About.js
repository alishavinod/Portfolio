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
      <p className="description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
  </div>
</div>
</div>
    )
}

export default AboutPage
