import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[childName,setChildname]=useState("Default");
     const receiveName=(name)=>{
      setChildname(name);
     }
  return (
    <div className="App">
      <h2>Hello React I'm Parent</h2>
      <p>Parent:My child said:{childName}</p>
     
    </div>
  );
}

export default App;
