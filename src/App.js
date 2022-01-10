import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import User from './components/User/User';


function App() {
  const [cart, setCart] = useState([]);
  const handleAddUser = (user) => {
    const newCart = [...cart, user];
    setCart(newCart);
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-9 col-sm-8 col-xs-12 user-group">
            <div className="row">
              <h3>Users List</h3>
              <User handleAddUser={handleAddUser}></User>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12 user-cart">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
