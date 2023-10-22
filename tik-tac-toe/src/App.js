import './App.css';
import { useState } from 'react'; 
import Square from './Components/Square'
import square from './Components/Square';
function App() {
    const [board, setBoard] = useState(["","","","","","","","",""])
    const [player, setPlayer]=useState("X"); 
    const chooseSquare = (square) => {
      setBoard(board.map((val, idx) => {
        if (idx == square && val == ""){
          return player
        }
        return val;
      }))
      if (player == "X"){
        setPlayer("O")
      }
      else{
        setPlayer("X")
      } 
    };
  return (
    <div className="App">
    <h1>Tic Tac Toe</h1>
    <div className='board'>
    <div className='row'>
    <Square value={board[0]} chooseSquare={()=>{chooseSquare(0)}}/>
    <Square value={board[1]} chooseSquare={()=>{chooseSquare(1)}}/>
    <Square value={board[2]} chooseSquare={()=>{chooseSquare(2)}}/>
    </div>
    <div className='row'>
    <Square value={board[0]} chooseSquare={()=>{alert(3)}}/>
    <Square value={board[1]} chooseSquare={()=>{alert(4)}}/>
    <Square value={board[2]} chooseSquare={()=>{alert(5)}}/>
    </div>
    <div className='row'>
    <Square value={board[0]} chooseSquare={()=>{alert(6)}}/>
    <Square value={board[1]} chooseSquare={()=>{alert(7)}}/>
    <Square value={board[2]} chooseSquare={()=>{alert(8)}}/>
    </div>
    </div>
    </div>
  );
}

export default App;
