import React from 'react';
import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h1>React Authentication Practice Project</h1>
      <h3>R.A.P.P.</h3>
      <Registration />
      <Login />
    </div>
  );
}

export default App;
