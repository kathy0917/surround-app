import { EditBtn } from '../../entities/index';
import { DeleteBtn } from '../../entities/index';
import { BookInfo } from '../../entities/index';
import * as S from './styles';

export default function My() {
  return (
    <S.Container>
      <S.Title>My 리스트</S.Title>
      <S.Column>
        <S.Row>
          <BookInfo />
          <S.BtnRow>
            <EditBtn />
            <DeleteBtn />
          </S.BtnRow>
        </S.Row>
      </S.Column>
      <S.AddBtn />
    </S.Container>
  );
}
