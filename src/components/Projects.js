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
      <p className="description">A multiplayer Tic Tac Toe game including human vs human and human vs computer mode with 4 levels of difficulty. It was implemented with the minimax algorithm am alpha-beta pruning. Used Unity and C#. Hosted on Github Pages with WebGL.</p>
      <a href ="https://tanvishekhar.github.io/TicTacToe/index.html"><button type="button" class="btn btn-outline-light">See Online</button></a>
    </div>
  </div>
  <h1 className="project-heading">COVID-19 Dataset Analysis</h1>
        <hr className="heading-rule"/>
        <div className="row">
    <div className="col-lg-6 col-md-6">
      <p className="description">Used Python and Machine Learning algorithms to predict data. Analysed data in the form of histograms, line plots and scatter plots. Predicts total number of cases on a particular date in the future.</p>
      <a href="https://github.com/alishavinod/Covid-19_Dataset_Analysis/blob/master/Covid19_Data_Analysis.ipynb"><button type="button" class="btn btn-outline-light">See Online</button></a>
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
