import React, { useEffect, useState } from 'react';
import Data from './app.json';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [data, setData] = useState([]);
  const [feedback, setFeedback] = useState({}); 

  useEffect(() => {
    setData(Data);
  }, []);

  const handleKeyDown = (e, correctAnswer, index) => {
    if (e.key === 'Enter') {
      const inputValue = e.target.value;
      setFeedback((prev) => ({
        ...prev,
        [index]: inputValue === correctAnswer ? "correct" : "wrong"
      }));
    }
  };

  return (
    <div className='love'>
      <h2>Find who i am</h2>
    <div className='hi'>
      {data.map((item, index) => (
        <div className='hlo' key={index}>
          <img src={item.image} alt={`Image of ${item.Hint1}`} className='how' />
          <ul className='hints'>
            <li>{item.Hint1}</li>
            <li>{item.Hint2}</li>
            <li>{item.Hint3}</li>
            <li>
              {feedback[index] === "correct" && (
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} />
              )}
              {feedback[index] === "wrong" && (
                <FontAwesomeIcon icon={faTimesCircle} style={{ color: 'red' }} />
              )}
            </li>
          </ul>
          <input
            type='text'
            placeholder='Enter here'
            onKeyDown={(e) => handleKeyDown(e, item.Answer, index)} 
            className='input'
          />
          <br />
        </div>
      ))}
      <div>
        <h2 id='vv'>Thanks for play</h2>
      </div>
    </div>
    </div>
  );
};

export default App;
