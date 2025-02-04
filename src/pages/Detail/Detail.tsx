import { BookInfo } from '../../entities/index';
import { RecommendMusic } from '../../entities/index';
import * as S from './styles';

export default function Detail() {
  return (
    <S.Container>
      <S.Title>나현 님의 검색 결과</S.Title>
      <S.Column>
        <S.SubTitle>책 상세</S.SubTitle>
        <BookInfo />
      </S.Column>
      <RecommendMusic />
    </S.Container>
  );
}
