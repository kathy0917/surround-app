import * as S from './styles';
import { MusicRegisterTitle, SearchBar } from '../../../../features/index';
import { useNavigate } from 'react-router-dom';

export default function Step1_SearchBook() {
  const navigate = useNavigate();

  const handleSearch = (word: string) => {
    if (word.trim().length === 0) return;
    navigate(`/my/selectbook?query=${encodeURIComponent(word)}`);
  };

  return (
    <S.Container>
      <MusicRegisterTitle />
      <S.Title>📚 책 제목을 입력해주세요.</S.Title>
      <SearchBar setSearchWord={handleSearch} />
    </S.Container>
  );
}
