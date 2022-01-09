import React from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import User from './components/User/User';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-9 col-sm-8 col-xs-12 user-group">
            <div className="row">
              <h3>Users List</h3>
              <User></User>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12 user-cart">
            <Cart></Cart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
