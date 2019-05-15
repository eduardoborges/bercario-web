import styled from 'styled-components';

import { Form, Input } from '@rocketseat/unform';

import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  flex: 1;
  margin-top: 40px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const Button = styled.button`
  background-image: linear-gradient(to right, #6441a5 0%, #2a0845 51%, #6441a5 100%);
  height: 32px;
  width: 96px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  border-radius: 24px;
  color: #fff;
  line-height: 32px;
  border: 0;
  margin-top: 10px;
  font-size: 14px;
  letter-spacing: 1.11px;

  &:hover {
    background-position: right center;
  }
`;

export const Title = styled.h1`
  font-size: 48px;

  ${Spinner} {
    height: 24px;
  }
`;

export const Formulary = styled(Form)`
  flex: 1;
  margin-top: 40px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  label {
    margin: 10px 0px;
    font-size: 11px;
    color: #000;
    letter-spacing: 1.11px;
    font-weight: normal;
    text-transform: uppercase;
  }

  span {
    margin: 0px 15px;
    font-size: 12px;
    color: #ff0033;
    font-weight: normal;
    padding-bottom: 10px;
  }
`;

export const Field = styled(Input)`
  height: 32px;
  width: 100%;
  max-width: 400px;
  padding: 0 20px;
  border-radius: 16px;
  border: 1px solid #6441a5;
  margin-bottom: 10px;
  font-size: 12px;
  letter-spacing: 1.11px;
`;
