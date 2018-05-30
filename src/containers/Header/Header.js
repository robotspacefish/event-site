import React from 'react';

const Header = () => {
  return(
    <header>
      <div className="row align-items-center">
        <div className="col-sm-12 col-md-6">
          <h1 className="site-name"><span>Memphis</span> Live</h1>
        </div>
        <div className="col-sm-12 col-md-6">
          <nav>
            <ul>
              <li><a href="#event-list">View Upcoming Events</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
