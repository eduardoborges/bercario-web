import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  flex: 1;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const Title = styled.h1`
  font-size: 48px;

  ${Spinner} {
    height: 24px;
  }
`;

export const List = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const Placar = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 250px;
  height: 200px;
  text-decoration: none;
  color: #000;
  background-color: #ffdee9;
  background-image: linear-gradient(0deg, #ffdee9 0%, #b5fffc 100%);

  border-radius: 8px;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  align-items: center;
  justify-content: space-around;

  > div {
    display: flex;
    justify-items: center;
    align-content: space-around;

    h1 {
      font-size: 2.8em;
    }
  }

  strong {
    font-size: 1.8em;
    margin-top: 10px;
  }

  img {
    height: 32px;
    margin-right: 4px;
  }

  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 1.1em;
    color: #333;
  }

  &:first-child {
    margin: 0;
  }
`;
