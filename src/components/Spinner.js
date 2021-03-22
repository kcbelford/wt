import React from 'react';

class Spinner extends React.Component {
  render() {
    return (
      // <div className="spinner">
      //   <div className="circle">Spinner</div>
      // </div>
      <div className="upload-info">
        <svg className="spinner-container" viewBox="-125 -125 250 250">
          <circle className="spinner-path" cx="0" cy="0" r="90" ></circle>
          <circle className="spinner" cx="0" cy="0" r="90" ></circle>
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
