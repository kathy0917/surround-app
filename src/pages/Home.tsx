import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
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
      <div>Home</div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="id" value={text} onChange={handleChange} />
      </form>
    </>
  );
}
