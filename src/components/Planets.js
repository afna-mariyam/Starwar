import React from 'react'
const Planets = () => {
    const src1="https://www.gstatic.com/culturalinstitute/searchar/assets/mercury/desktop_light.mp4";
    const src2="https://www.gstatic.com/culturalinstitute/searchar/assets/venus_surface/desktop_light.mp4";
    const src4="https://www.gstatic.com/culturalinstitute/searchar/assets/mars/desktop_light.mp4";
    // const navigate = useNavigate();
    return (
        <div style={{backgroundColor:"lightblue"}}>
            <center>
        <div class="card" style={{width: "18rem"}}>
        <video controls width="100%">
      <source src={src1} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  <div class="card-body">
    <h5 class="card-title">MERCURY</h5>
    <p class="card-text">Mercury is the first planet from the Sun and the smallest planet in the Solar System.</p>
    <a href="/" class="btn btn-primary">Excited! Know more</a>
  </div>
</div>
<br></br>
<div class="card" style={{width: "18rem"}} >
<video controls width="100%">
      <source src={src2} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  {/* <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQYtBFeNaC68MT-bmL2l888I2WrB1dzoyv41-bcn3McUtPuUPEEBSk-AYPQRQ&s=19" class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 class="card-title">VENUS</h5>
    <p class="card-text">Venus is unusual because it spins in the opposite direction of Earth and most others.</p>
    <a href="/" class="btn btn-primary">Excited! Know more</a>
  </div>
</div>
<br></br>
<div class="card" style={{width: "18rem"}}>
  <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSymIkeyHPLCi3x66pO63huIhKcSOvQcrCvH5-36PsWTTl_eO49IYTwWI88Hg&s=19" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">EARTH</h5>
    <p class="card-text">Earth is the third planet from the Sun and the only astronomical object known where life developed and found habitability.</p>
    <a href="/" class="btn btn-primary">Excited! Know more</a>
  </div>
</div>
<br></br>
<div class="card" style={{width: "18rem"}}>
<video controls width="100%">
      <source src={src4} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  <div class="card-body">
    <h5 class="card-title">MARS</h5>
    <p class="card-text">Mars is the fourth planet and the furthest terrestrial planet from the Sun.</p>
    <a href="/" class="btn btn-primary">Excited! Know more</a>
  </div>
</div>
<br></br>
</center>
</div>
    );
  }
  export default Planets;