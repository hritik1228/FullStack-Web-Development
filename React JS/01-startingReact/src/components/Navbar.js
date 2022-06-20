import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props){
    
return (  
<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">{props.navTitle}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">{props.homeText}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{props.aboutText}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{props.contactText}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

Navbar.PropTypes={
                homeText:PropTypes.string.isRequired,
                aboutText:PropTypes.string,
                contactText:PropTypes.string
              }
Navbar.defaultProps={
                homeText:'Set text here',
                aboutText:'Set about here',
                contactText:'set contact here'
};
export default Navbar; 