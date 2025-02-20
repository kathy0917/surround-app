import * as S from './styles';
import React, { useState } from 'react';

interface SearchBarProps {
  placeholder?: string;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ placeholder, setSearchWord }: SearchBarProps) {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchWord(text);
  };
  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <S.SearchInput type="text" onSubmit={handleSubmit} value={text} onChange={handleChange} placeholder={placeholder} />
        <S.SearchIcon onSubmit={handleSubmit} />
      </form>
    </S.Container>
  );
}
