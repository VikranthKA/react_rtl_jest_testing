import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [username,setUsername] = useState("user1")
  return (
    <div className="App">
react test case
<input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} name='username' id='userId' placeholder='enter your name'/>
<img title='Jesko car img' alt='car' src="https://imgs.search.brave.com/Tx8gK39p_ez0uEs33e-yT18lV3BcQsJxZmr-3twQTNQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdlLzcz/LzA3LzdlNzMwNzVh/YmM1ODdkZGFmMmNh/MzVmOTgzYzc2OTE2/LmpwZw"/>
    </div>
  );
}

export default App;
