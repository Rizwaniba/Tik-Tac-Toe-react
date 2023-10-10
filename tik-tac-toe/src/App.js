import './App.css';
import { useState } from 'react'; 
import Square from './Components/Square'
function App() {
    const [board, setBoard] = useState(["","","","","","","","",""])
  return (
    <div className="App">
    <div className='board'>
    <div className='row'>
    <Square value={board[0]} chooseSquare={()=>{alert(0)}}/>
    <Square value={board[1]} chooseSquare={()=>{alert(1)}}/>
    <Square value={board[2]} chooseSquare={()=>{alert(2)}}/>
    </div>
    <div className='row'>
    <Square value={board[0]} chooseSquare={()=>{alert(0)}}/>
    <Square value={board[1]} chooseSquare={()=>{alert(1)}}/>
    <Square value={board[2]} chooseSquare={()=>{alert(2)}}/>
    </div>
    <div className='row'>
    <Square value={board[0]} chooseSquare={()=>{alert(0)}}/>
    <Square value={board[1]} chooseSquare={()=>{alert(1)}}/>
    <Square value={board[2]} chooseSquare={()=>{alert(2)}}/>
    </div>
    </div>
    </div>
  );
}

export default App;
