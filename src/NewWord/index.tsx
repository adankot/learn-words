import React, { useState } from 'react';

import './style.css';

function NewWord({ showDictionary }: { showDictionary: () => void }) {
  const [hungarianInput, setHungarianInput] = useState('');
  const [foreignInput, setForeignInput] = useState('');

  const saveWord = () => {
    const dictionary = JSON.parse(localStorage.getItem('dictionary') ?? '[]');
    localStorage.setItem('dictionary', JSON.stringify([...dictionary, {
      hungarian: hungarianInput,
      foreign: foreignInput
    }]));
    showDictionary();
  }

  return <div>
    <div>
      <input
        type='text'
        onChange={(e) => setHungarianInput(e.target.value)}
        placeholder={'magyar szó'}
        value={hungarianInput}
      ></input>
    </div>
    <div style={{ marginBottom: '10vh' }}>
      <input
        type='text'
        onChange={(e) => setForeignInput(e.target.value)}
        placeholder={'idegen szó'}
        value={foreignInput}
      ></input>
    </div>
    <div className='buttonHold'>
      <button
        className={`btn`}
        onClick={saveWord}>Mentés
      </button>
    </div>
    <div className='buttonHold'>
      <button
        className={`btn`}
        onClick={showDictionary}>Vissza
      </button>
    </div>
  </div>
}

export default NewWord;
