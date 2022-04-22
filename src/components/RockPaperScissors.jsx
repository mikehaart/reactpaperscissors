import React, {useState} from 'react';

// functional react component
const RockPaperScissors = () => {
    // destructure the state values (remmeber to import {useState})
    let [inProgress] = useState(false);
    let [computerChoice] = useState('')
    let [output, setOutput] = useState('')
    
    const options = ['rock', 'paper', 'scissors']

    const toggleGameState = () => {
        inProgress = !inProgress;
    }
    const computerSelect = () => {
        const min = 1, max = options.length;
        const randInt = Math.floor(Math.random() * (max - min + 1) + min);
        computerChoice = options[randInt];
    }

    const runGame = (userChoice) => {
        toggleGameState();
        computerSelect();

        setOutput("Computer:" + computerChoice + ", You: " + userChoice);

        toggleGameState();
    }

    return (
      <main className="rockpaperscissors">
              <h1>Rock, Paper, Scissors!</h1>
          <div className='playersides'>
              <div className="computer">
                  <img src="notfound.jpg" alt="" />
              </div>
              <div className="user">
                  <div className="userbuttons">
                    <button onClick={() => {runGame('rock')}}>Rock</button>
                    <button onClick={() => {runGame('paper')}}>Paper</button>
                    <button onClick={() => {runGame('scissors')}}>Scissors</button>
                  </div>
              </div>
          </div>
          <span className="output">{output}</span>
      </main>
      )
  }

  export {RockPaperScissors}