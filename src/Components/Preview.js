import React from 'react';

import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import {store} from './MarkdownStore.js';

class Preview extends React.Component {
  render() {
    return (
      <div>
        <p id="preview">{this.props.text}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const PreviewContainer = connect(mapStateToProps)(Preview);

class PreviewWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PreviewContainer />
      </Provider>
    );
  }
}

export default PreviewWrapper;
