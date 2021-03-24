import React from 'react';

class Spinner extends React.Component {
  render(){
    return (
      <div className="upload-info">
        <svg className="spinner-container" viewBox="-125 -125 250 250">
          <circle className="spinner-path" cx="0" cy="0" r="100" ></circle>
          <circle className="spinner spin" cx="0" cy="0" r="100" ></circle>
        </svg>
        <div className="percent">
          <h2>65<span>%</span></h2>
        </div>
        <h2>Transferring...</h2>
      </div>
    );
  };
}


export default Spinner;
