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
          <svg className="spinner-container" viewBox="-125 -125 250 250">
            <circle className="spinner-path" cx="0" cy="0" r="100" ></circle>
            <circle className={`spinner ${uploading ? 'spin' : ''}`} cx="0" cy="0" r="100" ></circle>
          </svg>
          <div className="percent">
            <h2>{this.state.percent}<span>%</span></h2>
          </div>
          <div className="transferring">
            <h2 className={`${!uploading ? 'hide-transfer' : ''}`}>Transferring...</h2>
          </div>
        </div>
        <div className="buttons">
          <button onClick={() => this.onStartClick()}>Start</button>
          <button onClick={() => this.onEndClick()}>End</button>
        </div>
      </div>
    );
  };
}

export default Spinner;
