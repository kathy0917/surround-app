import * as S from './styles';
import { MusicRegisterTitle, SearchBar } from '../../../entities/index';

export default function Step1_BookSearch() {
  return (
    <S.Container>
      <MusicRegisterTitle />
      <S.Title>📚 책 제목을 입력해주세요.</S.Title>
      <SearchBar />
    </S.Container>
  );
}
