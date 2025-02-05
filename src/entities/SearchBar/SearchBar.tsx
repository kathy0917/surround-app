import * as S from './styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({ placeholder }: SearchBarProps) {
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
    <S.Container>
      <form onSubmit={handleSubmit}>
        <S.SearchInput type="text" value={text} onChange={handleChange} placeholder={placeholder} />
        <S.SearchIcon />
      </form>
    </S.Container>
  );
}
