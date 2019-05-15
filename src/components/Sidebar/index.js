import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Nav, MainNav, MainNavItem, NewPlaylist,
} from './styles';

import AddPlayListIcon from '../../assets/images/add_playlist.svg';
import Appoinment from '../../assets/images/appointment.svg';
import Diary from '../../assets/images/diary.svg';
import Students from '../../assets/images/baby.svg';
import Loading from '../Loading';
import Menu from '../Menu';

export default class Sidebar extends Component {
  render() {
    return (
      <Container>
        <div>
          <MainNav>
            <MainNavItem>
              <img src={Diary} alt="Adiconar playlist" />
              <Link to="/">Diários</Link>
            </MainNavItem>
            <MainNavItem>
              <img src={Students} alt="Adiconar playlist" />
              <Link to="/">Alunos</Link>
            </MainNavItem>
            <MainNavItem active>
              <img src={Appoinment} alt="Adiconar playlist" />
              <Link to="/">Calendários</Link>
            </MainNavItem>
          </MainNav>
          <Nav>
            <li>
              <span>MENU</span>
            </li>
            <li>
              <Link to="/activities">Atividades</Link>
            </li>
            <li>
              <a href="">Suprimentos</a>
            </li>
            <li>
              <a href="">Turmas</a>
            </li>
            <li>
              <a href="">Pessoas</a>
            </li>
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlayListIcon} alt="Novo Aluno" />
          Novo Aluno
        </NewPlaylist>
      </Container>
    );
  }
}
