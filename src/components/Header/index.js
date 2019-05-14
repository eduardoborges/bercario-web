import React, { Component } from 'react';

import {
  Container, Logo, Alert, User,
} from './styles';

import Slogan from '../../assets/images/logo.svg';

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Logo>
          <img src={Slogan} alt="Logo" />
        </Logo>
        <Alert />
        <User>
          <img src="https://avatars0.githubusercontent.com/u/2077886?v=4" alt="Avatar" />
          Jean Cabral
        </User>
      </Container>
    );
  }
}
