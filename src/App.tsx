import React, { useState } from 'react';
import './App.css';

import Test from "./Test";
import NewWord from "./NewWord";
import Dictionary from './Dictionary';

function App() {
  const [showMenu, setShowMenu] = useState(true);
  const [showTest, setShowTest] = useState(false);
  const [showNewWord, setShowNewWord] = useState(false);
  const [showDictionary, setShowDictionary] = useState(false);

  const onShowTest = () => {
    setShowMenu(false);
    setShowDictionary(false);
    setShowNewWord(false);
    setShowTest(true);
  }

  const onShowDictionary = () => {
    setShowMenu(false);
    setShowTest(false);
    setShowNewWord(false);
    setShowDictionary(true);
  }

  const onShowMenu = () => {
    setShowMenu(true);
    setShowTest(false);
    setShowNewWord(false);
    setShowDictionary(false);
  }

  const onShowNewWord = () => {
    setShowMenu(false);
    setShowTest(false);
    setShowDictionary(false);
    setShowNewWord(true);
  }

  return (
    <div className="App">
      <div className="body">
        {showMenu &&
					<div className='menu'>
						<div className={'buttonHold'}>
							<button
								className={`btn`}
								onClick={onShowTest}>Teszt
							</button>
						</div>
						<div className={'buttonHold'}>
							<button
								className={`btn`}
								onClick={onShowDictionary}>Szótár
							</button>
						</div>
					</div>
        }
        {showDictionary && <Dictionary showMenu={onShowMenu} showNewWord={onShowNewWord} />}
        {showTest && <Test showMenu={onShowMenu} />}
        {showNewWord && <NewWord showDictionary={onShowDictionary} />}
      </div>
    </div>
  );
}

export default App;
