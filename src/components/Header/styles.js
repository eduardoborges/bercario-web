import styled from 'styled-components';

export const Container = styled.div`
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #8ec5fc;
  background-image: linear-gradient(30deg, #e0c3fc 0%, #8ec5fc 100%);
  box-shadow: inset 0px -3px 11px -7px rgba(0, 0, 0, 0.84);

  padding: 12px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 220px;

  img {
    width: 172px;
  }

  div {
    margin-left: 12px;
    display: flex;
    flex-direction: column;

    span {
      font-size: 13px;
      color: #000;
    }

    small {
      font-size: 11px;
      color: #b3b3b3;
      margin-top: 5px;
    }
  }
`;

export const Alert = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 300;
  margin-right: 15px;
  color: #333;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 15px;
    border: 2px solid #f3f3f3;
  }
`;
