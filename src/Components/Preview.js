import React from 'react';

import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import {store} from './MarkdownStore.js';

class Preview extends React.Component {
  render() {
    return (
      <div>
        <h1>Preview</h1>
        <div id="preview" dangerouslySetInnerHTML={{__html: this.props.text}} />
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
