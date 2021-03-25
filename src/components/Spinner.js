import React from 'react';

class Spinner extends React.Component {
  constructor(props) {
    super(props);

    this.state = { uploading: false };
  }

  onStartClick(e){
    console.log('start clicked');
    e.preventDefault();
    this.setState({ uploading: true })
  }

  onEndClick(e){
    console.log('end clicked');
    e.preventDefault();
    this.setState({ uploading: false })
  }


  render() {
    const { uploading } = this.state;
    return (
      <div className="upload-background">
        <div className="upload-info">
          <svg className="spinner-container" viewBox="-125 -125 250 250">
            <circle className="spinner-path" cx="0" cy="0" r="100" ></circle>
            <circle className={`spinner ${uploading ? 'spin' : ''}`} cx="0" cy="0" r="100" ></circle>
          </svg>
          <div className="percent">
            <h2>65<span>%</span></h2>
          </div>
          <h2>Transferring...</h2>
        </div>
        <div className="buttons">
          <button onClick={(e) => this.onStartClick(e)}>Start</button>
          <button onClick={(e) => this.onEndClick(e)}>End</button>
        </div>
      </div>
    );
  };
}

export default Spinner;
