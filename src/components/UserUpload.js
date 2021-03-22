import React from 'react';
import Spinner from './Spinner';
import Button from './Button';

class UserUpload extends React.Component {
  render() {
    return (
      <div className="upload-background">
        <Spinner />
        <Button />
      </div>
    );
  };
}

export default UserUpload;
