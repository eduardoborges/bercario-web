import React, { Component } from 'react';

import {
  Container, Title, List, Placar,
} from './styles';

import Qty from '../../assets/images/qty.svg';

export default class Dash extends Component {
  render() {
    return (
      <Container>
        <Title>Seja Bem-Vindo!</Title>
        <List>
          <Placar to="/">
            <strong>Alunos</strong>
            <div>
              {/* <img src={Qty} alt="Total de Alunos" /> */}
              <h1>37</h1>
            </div>
            <p>matrículado(s).</p>
          </Placar>
          <Placar to="/">
            <strong>Turma(s)</strong>
            <div>
              <h1>6</h1>
            </div>
            <p>em andamento.</p>
          </Placar>
          <Placar to="/">
            <strong>Mensagens</strong>
            <div>
              <h1>17</h1>
            </div>
            <p>não lida(s).</p>
          </Placar>
        </List>
      </Container>
    );
  }
}
