import styled from 'styled-components';
import { IoPlayCircle } from 'react-icons/io5';

type Props = {
  src: string;
};

export const Container = styled.div`
  width: 75vw;
  margin-left: 3px;
`;

export const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 17px;
  margin-top: 25px;
`;

export const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const Li = styled.li`
  display: flex;
  margin-bottom: 30px;
  position: relative;
  top: 0px;
`;

export const BookImg = styled.img`
  width: auto;
  height: 50px;
  object-fit: contain;
  border-radius: 5px;
  margin-right: 10px;
`;

export const BookTitle = styled.h1`
  font-weight: 400;
  font-size: 16px;
  margin-top: 15px;
`;

export const PlayIcon = styled(IoPlayCircle)`
  font-size: 27px;
  position: absolute;
  right: 10px;
  top: 10px;
  color: #16421f;
`;
