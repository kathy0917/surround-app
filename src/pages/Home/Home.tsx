import { SearchBar } from '../../entities/index';
import { PopularList } from '../../entities/index';

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
