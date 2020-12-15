import React from 'react';

class Preview extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Preview;
