import { SearchBar } from '../../features/index';
import { PopularList } from '../../features/index';
import { useState } from 'react';
import * as S from './styles';

export default function Home() {
  const [searchWord, setSearchWord] = useState('');

  return (
    <S.Container>
      <S.Logo />
      <S.Column>
        <SearchBar placeholder="책 제목을 입력하세요." setSearchWord={setSearchWord} />
        <PopularList />
      </S.Column>
    </S.Container>
  );
}
