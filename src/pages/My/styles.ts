import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 100px;
  left: 40px;
  width: 80vw;
  height: 78vh;
`;

export const Title = styled.h1`
  font-size: 23px;
`;

export const Column = styled.div`
  width: inherit;
  height: inherit;
  overflow: auto;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BtnRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 110px;
  align-items: center;
`;
