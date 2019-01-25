import React, { Fragment, Component } from 'react';
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import Header from './common/header'
import store from './store'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Provider store={store}>
          <Header />
        </Provider>
      </Fragment>
     
    );
  }
}

export default App;
