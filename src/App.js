import React, { useState } from 'react';
import './style.css';
import { nanoid } from 'nanoid';

export default function App() {
  const [id, setId] = useState('xablau');

  return (
    <div>
      <h1>Id aleatório: {id}</h1>
      <button onClick={() => setId(nanoid())}>Clique aqui</button>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
