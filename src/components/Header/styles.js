import styled from 'styled-components';

export const Container = styled.div`
  height: 76px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #8ec5fc;
  background-image: linear-gradient(30deg, #8ec5fc 0%, #e0c3fc 100%);

  padding: 12px;
  border-bottom: 1px solid #e0c3fc;
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
      color: #fff;
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
  font-size: 13px;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;
