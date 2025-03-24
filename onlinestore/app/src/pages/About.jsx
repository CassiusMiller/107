import { useState } from "react";
import "About.css"

function About(){
  const [isVisible, setIsVisible] = useState(false);

  function showData(){
    setIsVisible(true);
  }
  

  return (
    <div className="about page">

      <img className="me" src="/1img.heic" alt="about me" />

      <h2>Cassius Miller</h2>
      { isVisible ? <h5>cassius.miller@sdgku.edu</h5> : <label className="d-block">Click to see email</label> }

      <button className="btn btn-dark" onClick={showData}>See Email</button>
    </div>
  )
}

export default About;