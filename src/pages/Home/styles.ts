import styled from 'styled-components';
import mainLogo from '../../shared/assets/logo.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
`;

export const Logo = styled.div`
  background-image: url(${mainLogo});
  width: 100px;
  height: 150px;
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 100px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  justify-content: center;
  align-items: center;
`;
