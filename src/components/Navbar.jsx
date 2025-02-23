
import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'



export const Navbar = (props) =>
 {
  return (
    <nav className="navbar navbar-expand bg-body-tertiary" data-bs-theme={props.mode} >
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href ="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">{props.aboutText}</a>
          </li>
          
          <li className="nav-item">
            {/* <a className="nav-link disabled" aria-disabled="true">Disabled</a> */}
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
           <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
           <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable Dark mode':'Disable Dark mode'}</label>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-3`}>
         <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable funky mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes=
{
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired
}

Navbar.defaultProps=
{
    title : 'Set Title Here',
    aboutText : 'Set About' 
}
