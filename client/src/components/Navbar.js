import React from 'react';

import campus_diary_logo from"./img/campus_diary_logo.png";

export default function Navbar() {
  return (
    <>
    <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container box_1620">
              <a className="navbar-brand logo_h" href="index.html"><img src={campus_diary_logo} alt="campus_diary_logo" /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav justify-content-end">
                  <li className="nav-item active"><a className="nav-link" href="/">Home</a></li> 
                  <li className="nav-item"><a className="nav-link" href="/notes">Notes</a></li> 
                  <li className="nav-item"><a className="nav-link" href="/view">View</a>
                  </li><li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Community</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="nav-link" href="Community Page/community.html">Events</a>                 
                      </li><li className="nav-item"><a className="nav-link" href="Community Page/community.html">Blogs</a>                 
                      </li></ul>
                  </li>
                  <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
                </ul>
                <div className="nav-right text-center text-lg-right py-4 py-lg-0">
                  <a className="button button-outline button-small" href="/register">Add Me</a>
                </div>
              </div> 
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
