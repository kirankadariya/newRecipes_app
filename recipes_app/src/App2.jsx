import React, { useState } from 'react';

function App() {
    const [todos, setTodos] = useState(['Read book', 'Write Journal', 'Read Novel']);
    const [player, setPlayer] =useState({name: 'kiran', score:0})

    return (
        <>
        <h1>List of Array</h1>
        <ul> 
            {
                todos.map(todo=>(
                <li> {todo}</li>))
            }

        </ul>
            // Add 
        <button onClick={()=>setTodos([...todos, 'Do Homework', 'Do exericise'])}
        > Click</button>
        <button onClick={()=>setTodos(todos.filter (todo=>(todo !== "Write Journal")))}>Remove: {todos} </button>
        
        <button onClick={()=>setPlayer(player=>({...player, score:player.score+1}))}>{player.name} | {player.score} </button>
        
        </>
    );
}

export default App2;
