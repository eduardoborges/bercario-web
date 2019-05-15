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

export const List = styled.table`
  margin-top: 20px;
  width: 100%;
  text-align: left;
  padding: 15px;
  border-radius: 8px;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  thead th {
    font-size: 11px;
    color: #000;
    letter-spacing: 1.11px;
    font-weight: normal;
    text-transform: uppercase;

    padding: 5px 10px;

    &:last-child {
      text-align: left;
    }
  }
`;

export const Item = styled.tr`
  td {
    border-top: 1px solid #e0c3fc;
    font-size: 1.11em;
    line-height: 40px;
    padding: 0px 10px;
    background: 'tranparent';
    color: '#fff';

    &:first-child {
      width: 80px;
      text-align: right;
    }

    &:last-child {
      text-align: left;
    }
  }

  &:hover td {
    background: #e0c3fc;
  }
`;
