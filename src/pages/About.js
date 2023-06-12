import React, { Component } from 'react';
import "./About.css";
import mypic from "/Users/jeanpierre/Desktop/IBM_Accel/to-do-list_week1-maxine-j710/src/assets/mypic.JPG";  
export default class About extends Component {
  render() {
    return (
      <div>
         <div>
    <div className="split left">
      <div className="centered">
        <img 
          className="profile_image"
         src = {mypic}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Genevieve Jean-Pierre</div>
        <div className="brief_description">
          Hailing from Nashville, TN I'm not a huge country music fan but I can tolerate it.
          I moreso like gospel, soul, indie pop, and anything by Stevie Wonder. Check out my 
          song Rainbow by Maxine J. on Spotify haha! Outside of coding and ethical AI research
          I also like to write poetry, dance, and run!
          Catch me at a park I could be doing any of the three! 
        </div>
      </div>
    </div>
  </div>
 
      </div>
    )
  }
}