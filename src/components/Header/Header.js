import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/">Simple React User Collection</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#user">Users</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#cart">Cart</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#checkout">Checkout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;