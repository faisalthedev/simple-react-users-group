import React from 'react';

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, YearlyIncome) => total + YearlyIncome.income, 0);
  const avgIncome = total / cart.length;

  return (
    <div class="card bg-dark text-light">
      <div class="card-header">
        <h4>Cart Summary</h4>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>Total Persons:</b> { cart.length }</li>
        <li class="list-group-item"><b>Total Salary:</b> ${ total.toLocaleString() }</li>
      </ul>
      <div class="card-footer">
        <b>Averge Income:</b> ${avgIncome ? avgIncome.toLocaleString() : 0}
      </div>
    </div>
  );
};

export default Cart;