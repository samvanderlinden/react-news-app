import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>, 
    document.getElementById('root'));

// ReactDOM.render(
//     <Provider store={createStoreWithMiddleware(reducers)}>
//       <BrowserRouter>
//       <div>
//         <Switch>
//           <Route path="/posts/new" component={PostsNew} />
//           <Route path="/" component={PostIndex} />
//         </Switch>
//       </div>
  
//       </BrowserRouter>
//     </Provider>
//     , document.querySelector('.container'));

