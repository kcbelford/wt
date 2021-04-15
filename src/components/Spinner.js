import React from 'react';

class Spinner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uploading: false,
      percent: 0
    };
  }

  onStartClick(){
    this.setState({ uploading: true })

    for (let i = 0; i <= 100; i++) {
      setTimeout((i) => {
        this.setState({ percent: i })
      }, 100 * i, i)
    }
  }

  onEndClick(){
    this.setState({ uploading: false, percent: 0 })
  }

  render() {
    const { uploading } = this.state;
    return (
      <div className="upload-background">
        <div className="upload-info">
          <svg className="spinner-container" viewBox="-125 -155 250 275">
            <circle className="spinner-path" cx="0" cy="0" r="110" ></circle>
            <circle className={`spinner ${uploading ? 'spin' : ''}`} cx="0" cy="0" r="110" ></circle>
          </svg>
          <div className="number-percent">
            <p className="number">{this.state.percent}</p>
            <p className="percent">%</p>
          </div>
          <div className="transferring">
            <p className={`${!uploading ? 'hide-transfer' : ''}`}>Transferring...</p>
          </div>
        </div>
        <div className="buttons">
          <button className={`${uploading ? 'hide-start-btn' : ''}`} onClick={() => this.onStartClick()}>Start</button>
          <button className={`${!uploading ? 'hide-end-btn' : ''}`} onClick={() => this.onEndClick()}>End</button>
        </div>
      </div>
    );
  };
}

export default Spinner;
