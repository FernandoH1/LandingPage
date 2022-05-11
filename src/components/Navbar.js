import React from 'react';
import Logo from '../img/logo.png'



const Navbar = () => {
  return (
      <nav id="navbar-example2">
        <img src={Logo} alt="logo" />
        <button onClick={()=>{ window.location="https://digimed-ab36d.web.app/"; }}type="button" class="btn btn-outline-primary">Probar Software</button>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading1">¿Qué es DigiMed?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading2">¿Cómo lo hacemos?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading3">¿Cómo funciona el software?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading4">¿A quienes impactamos con DigiMed?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading5">Scrum Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading6">Planes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading7">Vision</a>
          </li>
        </ul>
      </nav>
  
      
  );
};

export default Navbar;
