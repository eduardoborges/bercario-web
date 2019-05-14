import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './config/reactotron';

import GlobalStyle from './styles/global';
import Sidebar from './components/Sidebar';
import Menu from './components/Menu';

import { Wrapper, Container, Content } from './styles/components';
import Routes from './routes';
import store from './store';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <Wrapper>
            <Header />
            <Container>
              <Sidebar />
              <Content>
                <Menu />
                <Routes />
              </Content>
            </Container>
          </Wrapper>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
