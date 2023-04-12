import React, { useState } from 'react';

import './style.css';

function Dictionary({ showMenu, showNewWord }: { showMenu: () => void, showNewWord: () => void }) {
  const dictionary: Array<{ hungarian: string, foreign: string }> = JSON.parse(localStorage.getItem('dictionary') ?? '[]');
  const [wordList, setWordList] = useState(dictionary);

  const removeWord = (index: number) => {
    dictionary.splice(index, 1);
    localStorage.setItem('dictionary', JSON.stringify(dictionary));
    setWordList(dictionary);
  }

  return <div>
    <div className='wordList'>
      {wordList.map(({ hungarian, foreign }, i: number) => (
        <div className={'wordListItem'} key={i}>
          <div className={'wordListItemWord'}>{hungarian}</div>
          <div className={'wordListItemWord'}>{foreign}</div>
          <div className={'wordListItemRemover'} onClick={() => removeWord(i)}>X</div>
        </div>
      ))}
    </div>
    <div className='buttonHold'>
      <button
        className={`btn`}
        onClick={showMenu}>Vissza
      </button>
    </div>
    <div className='buttonHold'>
      <button
        className={`btn`}
        onClick={showNewWord}>Új szó
      </button>
    </div>
  </div>;
}

export default Dictionary;
