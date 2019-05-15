import styled from 'styled-components';
import { Spinner } from '../Loading/styles';

export const Container = styled.aside`
  height: 100%;
  width: 240px;
  background-color: #f9f9f9;
  background-image: linear-gradient(0deg, #8ec5fc 0%, #dbc3fc 100%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    overflow-y: auto;
  }
`;

export const MainNav = styled.ul`
  list-style: none;
  padding-top: 25px;

  &:first-child {
    margin: 0;
  }
`;

export const MainNavItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 15px;
  height: 28px;
  margin-bottom: 15px;

  a {
    color: inherit;
    text-decoration: none;
    font-size: 18px;
    line-height: 32px;
    font-weight: ${props => (props.main ? 'bold' : 'normal')};

    &:hover {
      color: #fff;
    }
  }
  img {
    margin-right: 10px;
    width: 36px;
    height: 36px;
    padding: 5px;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 25px;
  padding-left: 25px;
  &:first-child {
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;

    a {
      color: inherit;
      text-decoration: none;
      font-size: 1em;
      line-height: 32px;
      font-weight: ${props => (props.main ? 'bold' : 'normal')};

      &:hover {
        color: #fff;
      }
    }

    span {
      color: #000;
      font-size: 11px;
      text-transform: uppercase;
      line-height: 22px;
      letter-spacing: 1.11px;
      font-weight: 300;
    }

    ${Spinner} {
      margin-left: 5px;
      height: 15px;
    }
  }
`;

export const NewPlaylist = styled.button`
  background: transparent;

  border: 0;
  color: #000;
  font-size: 16px;

  display: flex;
  align-items: center;
  padding: 25px;

  @media (max-width: 1440px) {
    height: 100px;
  }

  &:hover {
    color: #fff;
  }

  img {
    height: 16px;
    margin-right: 10px;
  }
`;
