import { SearchBar } from '../../entities/index';
import { PopularList } from '../../entities/index';

import * as S from './styles';

export default function Home() {
  return (
    <S.Container>
      <S.Logo />
      <S.Column>
        <SearchBar placeholder="책 제목을 입력하세요." />
        <PopularList />
      </S.Column>
    </S.Container>
  );
}
