import React, { useState, useEffect } from 'react';
import './App.css';
import { Card } from './Card';

function App() {
    const [second, setSecond] = useState(0);
    const[count, setCount] = useState(0);

    useEffect(() =>{
            document.title = `Click ${count}`;
    })

    

    useEffect(() => {
        const interval = setInterval(() => {
            setSecond(prevSecond => prevSecond + 1);
        }, 1000); 
        return () => clearInterval(interval)
    }, []);

    return<Card>
    
        <p>Here is Timer: {second}</p>;
    

    <button onClick={()=>setCount(precount=>precount+1)}>Updates: {count}</button>
   </Card>
}

export default App;
