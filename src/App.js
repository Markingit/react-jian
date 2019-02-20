import React, { Fragment, Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyle } from './style'
import Header from './common/header'
import Home from './pages/home'
import Login from './pages/login'
import Detail from './pages/detail'
import store from './store'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Provider store={store}>
          
            <BrowserRouter>
              <div>
                <Header />
                <Route path='/' exact component={Home}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/detail/:id' exact component={Detail}></Route>
              </div>
            </BrowserRouter>
        </Provider>
      </Fragment>
     
    );
  }
}

export default App;
