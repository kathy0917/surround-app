import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 20px;
  top: 80px;
`;

export const Title = styled.h1`
  font-size: 18px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BookImg = styled.img`
  width: auto;
  height: 60px;
  object-fit: contain;
  border-radius: 5px;
  margin-right: 10px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BookTitle = styled.h1`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: -2px;
`;

export const BookAuthor = styled.h1`
  font-size: 13px;
  font-weight: 400;
`;
