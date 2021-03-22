import React from 'react';

class Spinner extends React.Component {
  render() {
    return (
      // <div className="spinner">
      //   <div className="circle">Spinner</div>
      // </div>
      <div>
        <svg className="spinner-container">
          <circle className="spinner" cx="90" cy="90" r="90" ></circle>
        </svg>
        <div>
          <h2>65<span>%</span></h2>
        </div>
        <h2>Transferring...</h2>
      </div>
    );
  };
}

export default Spinner;
