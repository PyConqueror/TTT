import Square from "./Square";
import { useState } from "react";

function TicTacToe() {
    const [currentPlayer, setPlayer] = useState('X')
    const [reset, setReset] = useState(false)

    function changePlayer() { 
        setPlayer((prevPlayer) => (prevPlayer === 'X' ? 'O' : 'X'));
    };

    function resetGame() {
        setReset(true)
        setPlayer('X')
        setTimeout(() => setReset(false), 1); 
    } 
    return (
        <div className="board"> 
        <Square key={1} currentPlayer={currentPlayer} changePlayer={changePlayer} reset={reset}/>
        <Square key={2} currentPlayer={currentPlayer} changePlayer={changePlayer} reset={reset}/>
        <Square key={3} currentPlayer={currentPlayer} changePlayer={changePlayer} reset={reset}/>
        <Square key={4} currentPlayer={currentPlayer} changePlayer={changePlayer} reset={reset}/>
        <Square key={5} currentPlayer={currentPlayer} changePlayer={changePlayer} reset={reset}/>
        <Square key={6} currentPlayer={currentPlayer} changePlayer={changePlayer} reset={reset}/>
        <Square key={7} currentPlayer={currentPlayer} changePlayer={changePlayer} reset={reset}/>
        <Square key={8} currentPlayer={currentPlayer} changePlayer={changePlayer} reset={reset}/>
        <Square key={9} currentPlayer={currentPlayer} changePlayer={changePlayer} reset={reset}/>
        <button onClick={resetGame}>RESET GAME</button>
        </div>
    ); 
};

export default TicTacToe