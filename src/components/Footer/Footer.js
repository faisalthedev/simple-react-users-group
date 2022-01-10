import React from 'react';

const Footer = () => {
  const getDate = new Date();
  const year = getDate.getFullYear();

  return (
    <div className='bg-dark text-light text-center p-3 mt-5'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            Copyright &copy;{year} | All right reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;