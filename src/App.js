import React, { Component } from 'react';
import ArticleContainer from './containers/article_container';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My News App!</h1>
        <ArticleContainer />
      </div>
    );
  }
}

export default App;
