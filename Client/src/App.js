import React from 'react';
import logo from './logo.svg';
import './App.css';
import  BookSearchForm  from './Components/BookSearchForm'
import  BookInputForm  from './Components/BookInputForm'
function App() {
  return (
    <div className="App">
      < BookSearchForm />
      < BookInputForm/>
    </div>
  );
}

export default App;
