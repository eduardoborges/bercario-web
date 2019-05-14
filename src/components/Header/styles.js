import styled from 'styled-components';

export const Container = styled.div`
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #8ec5fc;
  background-image: linear-gradient(30deg, #8ec5fc 0%, #e0c3fc 100%);

  padding: 12px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 220px;

  img {
    width: 195px;
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
  margin-right: 15px;
  color: #333;
  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin-right: 15px;
  }
`;
