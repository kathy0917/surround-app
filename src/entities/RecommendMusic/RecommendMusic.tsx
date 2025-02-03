import * as S from './styles';

export default function RecommendMusic() {
  const music = [
    { id: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRgbDs4AfnRX4hQhhs-fdFb9iow-TtZqwpg&s', title: 'Carolina', singer: 'Taylor swift' },
    { id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRgbDs4AfnRX4hQhhs-fdFb9iow-TtZqwpg&s', title: 'Carolina', singer: 'Taylor swift' },
  ];

  return (
    <S.Container>
      <S.TitleRow>
        <S.Title>추천 음악 리스트</S.Title>
        <S.MoreBtn>카테고리별 더보기 👉</S.MoreBtn>
      </S.TitleRow>
      {music.map((item) => (
        <S.Row key={item.id}>
          <S.MusicImg src={item.img} />
          <S.Column>
            <S.MusicTitle>{item.title}</S.MusicTitle>
            <S.Singer>{item.singer}</S.Singer>
          </S.Column>
          <S.PlayBtn />
        </S.Row>
      ))}
    </S.Container>
  );
}
