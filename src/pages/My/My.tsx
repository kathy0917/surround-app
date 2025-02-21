import { EditBtn, AddBtn, DeleteBtn, BookInfo } from '../../features/index';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export default function My() {
  const navigate = useNavigate();

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
      <AddBtn onClick={() => navigate('/my/searchbook')} />
    </S.Container>
  );
}
