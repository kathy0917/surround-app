import * as S from './styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setText('');
    navigate(`/detail/${text}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <S.SearchInput type="text" placeholder="책 제목을 입력해주세요." value={text} onChange={handleChange} />
      </form>
    </>
  );
}
