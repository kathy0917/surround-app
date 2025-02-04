import styled from 'styled-components';
import { IoAddCircleSharp } from 'react-icons/io5';

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

export const AddBtn = styled(IoAddCircleSharp)`
  position: absolute;
  font-size: 39px;
  color: #16421f;
  right: 0px;
  bottom: 0px;
`;
