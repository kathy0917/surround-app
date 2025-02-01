import { SearchBar } from '../../entities/SearchBar';
import { PopularList } from '../../entities/PopularList';

import * as S from './styles';

export default function Home() {
  return (
    <S.Container>
      <S.Logo />
      <S.Column>
        <SearchBar />
        <PopularList />
      </S.Column>
    </S.Container>
  );
}
