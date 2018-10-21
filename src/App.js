import React, { Component } from 'react';
import ArticleContainer from './containers/article-container';
import ArticlesList from './containers/article-list';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My News App!</h1>
        <ArticleContainer />
        <ArticlesList />
      </div>
    );
  }
}

export default App;
