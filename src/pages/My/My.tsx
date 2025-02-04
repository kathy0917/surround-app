import { BookInfo } from '../../entities/index';
import * as S from './styles';

export default function My() {
  return (
    <S.Container>
      <S.Title>My 리스트</S.Title>
      <BookInfo />
      <S.AddBtn />
    </S.Container>
  );
}
