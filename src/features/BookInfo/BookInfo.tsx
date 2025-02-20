import * as S from './styles';

export default function BookInfo() {
  const img = 'https://image.aladin.co.kr/product/30383/10/cover500/k322830863_1.jpg';

  return (
    <>
      <S.Row>
        <S.BookImg src={img} />
        <S.Column>
          <S.BookTitle>가재가 노래하는 곳</S.BookTitle>
          <S.BookAuthor>델리아오언스</S.BookAuthor>
        </S.Column>
      </S.Row>
    </>
  );
}
