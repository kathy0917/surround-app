import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 75vw;
`;

export const SearchInput = styled.input`
  border-radius: 20px;
  width: 75vw;
  height: 40px;
  border: 1px solid #194924;
  padding-left: 10px;
  z-index: 1;
  outline: none;
  font-size: 17px;

  &::placeholder {
    font-size: 15px;
    padding-left: 10px;
  }
`;

export const SearchIcon = styled(IoSearch)`
  font-size: 23px;
  color: #325b3d;
  z-index: 2;
  position: absolute;
  right: 0px;
  top: 9px;
`;
