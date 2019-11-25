import React from 'react';

const header =()=>{
    return(
        <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">Yath</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/auth/google">signup</a></li>
        <li><a href="/api/logout">logout</a></li>
        <li><a href="/profile">profile</a></li>
      </ul>
    </div>
  </nav>
        
    )
}
export default header;