import React from 'react'
// import "../App.css"
// import {useNavigate} from "react-router-dom";

const HomePage = () => {
  // const navigate = useNavigate();
  return (
    <div style={{backgroundColor: "lightblue", textAlign: "center"}}>
      <h1>STAR WARS</h1>
     
    <nav className="navbar  navbar-expand-lg bg-body-tertiary" style={{backgroundColor: "lightblue", textAlign: "center"}}>
     
    <div className="container-fluid">
      <a className="navbar-brand" href="/planets">Planets</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="navbar-brand" aria-current="page" href="/spaceship">Spaceships</a>
          <a className="navbar-brand" href="/people">People</a>
          <a className="navbar-brand" href="/vehicle">Vehicle</a>
          {/* <a className="nav-link disabled" aria-disabled="true">Disabled</a> */}
        </div>
      </div>
    </div>
  </nav>
  <div style={{height: "100%",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
backgroundSize: "cover"}} >
   <img src="https://images.thedirect.com/media/article_full/star-wars-movies-characters.jpg"  alt="..."/>
   </div>
   
  </div>
  );
}

export default HomePage;