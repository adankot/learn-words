import React, { useState } from 'react';

import './style.css';

function Test({ showMenu }: { showMenu: () => void }) {
  const dictionary: Array<{ hungarian: string, foreign: string }> = JSON.parse(localStorage.getItem('dictionary') ?? '[]');
  const [word, setWord] = useState(dictionary[Math.floor(Math.random() * dictionary.length)]);
  const [input, setInput] = useState('');
  const [showCorrect, setShowCorrect] = useState(false);
  const [correct, setCorrect] = useState<boolean | null>(null);

  const onNext = () => {
    setCorrect(null);
    setShowCorrect(false);
    setInput('');
    setWord(dictionary[Math.floor(Math.random() * dictionary.length)]);
  }

  const check = () => {
    setShowCorrect(true);
    setCorrect(word.foreign === input);
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      check();
    }
  };

  return <div>
    {dictionary.length ? <>
        <div className='test-word'>
          {
            correct === null ?
              <div> {word.hungarian}</div>
              : correct ?
                <div style={{ color: 'green' }}>{word.foreign}</div> :
                <div style={{ color: 'red' }}>{word.foreign}</div>
          }
        </div>
        <div>
          <input
            type='text'
            onChange={(e) => setInput(e.target.value)}
            placeholder={'megfejtés'}
            value={input}
            onKeyDown={handleKeyDown}
            disabled={showCorrect}
          ></input>
        </div>
        {showCorrect && <>
					<div className={'buttonHold'}>
						<button
							className={`btn`}
							onClick={onNext}>Következő
						</button>
					</div>
				</>}
        {!showCorrect &&
					<div className={'buttonHold'}>
						<button
							className={`btn`}
							onClick={check}>Ellenőrzés
						</button>
					</div>
        }
      </> :
      <div className={'test-warning'}>
        Kérlek adj hozzá szavakat a szótárban
      </div>
    }
    <div className={'buttonHold'}>
      <button
        className={`btn`}
        onClick={showMenu}>Vissza
      </button>
    </div>
  </div>
}

export default Test;
