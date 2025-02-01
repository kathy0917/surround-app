import styled from 'styled-components';
import { IoPlayCircle } from 'react-icons/io5';

export const Container = styled.div`
  position: absolute;
  left: 20px;
  top: 210px;
  width: 75vw;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 18px;
  margin-right: 5px;
`;

export const MoreBtn = styled.h1`
  font-size: 10px;
  font-weight: 400;
  color: #091e0d;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: inherit;
  align-items: center;
  margin-bottom: 10px;
`;

export const MusicImg = styled.img`
  width: 50px;
  height: 60px;
  object-fit: contain;
  border-radius: 10px;
  margin-right: 10px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MusicTitle = styled.h1`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: -2px;
`;

export const Singer = styled.h1`
  font-size: 13px;
  font-weight: 400;
`;

export const PlayBtn = styled(IoPlayCircle)`
  position: absolute;
  right: 10px;
  font-size: 27px;
  color: #16421f;
`;
