import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals.js';
import TodoList from './toDoList.jsx'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <TodoList/>
    </>
  
  </React.StrictMode>
);

reportWebVitals();