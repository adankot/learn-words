import React, { useMemo, useState } from 'react';

import './style.css';

function Dictionary({ showMenu, showNewWord }: { showMenu: () => void, showNewWord: () => void }) {
  const dictionary: Array<{ hungarian: string, foreign: string }> = useMemo(() => JSON.parse(localStorage.getItem('dictionary') ?? '[]'), []);
  const [wordList, setWordList] = useState(dictionary);

  const removeWord = (index: number) => {
    const newDictionary = wordList.filter((item, i) => index !== i);
    localStorage.setItem('dictionary', JSON.stringify(newDictionary));
    setWordList(newDictionary);
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
