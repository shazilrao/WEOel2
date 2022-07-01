function navbar() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg abc">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{color: 'black'}}>Car Company</a>
            {/* <button className="navbar-toggler mBtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              Option
              <span className="navbar-toggler-icon" />
            </button> */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" style={{color: 'black'}}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{color: 'black'}}>Gallery</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{color: 'black'}}>Contact Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{color: 'black'}}>About Us</a>
                </li>
              </ul>
              {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn" type="submit" id="myBtn">Search</button>
              </form> */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
  export default navbar;









