import * as S from './styles';

export default function PopularList() {
  const popularList = [
    {
      img: 'https://image.aladin.co.kr/product/30383/10/cover500/k322830863_1.jpg',
      title: '가재가 노래하는 곳',
    },
    {
      img: 'https://image.aladin.co.kr/product/30383/10/cover500/k322830863_1.jpg',
      title: '사랑 후에 오는 것들',
    },
    { img: 'https://image.aladin.co.kr/product/30383/10/cover500/k322830863_1.jpg', title: '채식주의자' },
  ];
  return (
    <S.Container>
      <S.Title>실시간 인기 검색</S.Title>
      {popularList.map((list, idx) => (
        <S.Ul>
          <S.Li key={idx}>
            <S.BookImg src={list.img} />
            <S.BookTitle>{list.title}</S.BookTitle>
            <S.PlayBtn />
          </S.Li>
        </S.Ul>
      ))}
    </S.Container>
  );
}
