import * as S from './styles';
import { MusicRegisterTitle, SearchBar } from '../../../features/index';
import { useState } from 'react';
import { SearchBook } from '../../../features';

export default function Step1_BookSearch() {
  const [searchWord, setSearchWord] = useState('');

  return (
    <S.Container>
      <MusicRegisterTitle />
      <S.Title>📚 책 제목을 입력해주세요.</S.Title>
      <SearchBar setSearchWord={setSearchWord} />
      <SearchBook searchWord={searchWord} />
    </S.Container>
  );
}
