import { BookInfo } from '../../entities/BookInfo/index';
import { RecommendMusic } from '../../entities/RecommendMusic/index';
import * as S from './styles';

export default function Detail() {
  return (
    <S.Container>
      <S.Title>나현 님의 검색 결과</S.Title>
      <BookInfo />
      <RecommendMusic />
    </S.Container>
  );
}
