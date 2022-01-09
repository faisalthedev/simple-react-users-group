import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import UsersData from '../../data';



const User = () => {
  return (
    UsersData.map((user, id, phone) => {
      return (
        <div className="col-md-4 col-sm-4 col-xs-6 mt-4" key={id}>
          <div className="card">
            <img src={user.photo} className="card-img-top" alt={user.name} />
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text fst-italic">
                {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><span className='fw-bold'>Phone:</span> {user.phone}</li>
              <li className="list-group-item"><span className='fw-bold'>Email:</span> {user.email}</li>
              <li className="list-group-item"><span className='fw-bold'>Income:</span> {user.income}</li>
            </ul>
            <div className="card-body">
              <button className="btn btn-dark">
                Add to cart <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
        </div>
      )
    })
  )
};

export default User;