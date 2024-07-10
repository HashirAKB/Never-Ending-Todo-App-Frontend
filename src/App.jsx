// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { CreateTodo } from './components/CreateTodo';
// import { ToDo } from './components/Todos';

// function App() {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([
//     {
//     title:'go to gym',
//     description:'gym from 7 to 9',
//     completed: false
//     },
//     {
//         title:'Complete DSA class',
//         description:'DSA class from 9 to 11',
//         completed: true
//     },
//     {
//         title:'Complete DSA class 222',
//         description:'DSA class from 9 to 11',
//         completed: true
//     }]);
//   const Header = function ({title}){
//     return <div>
//       {title}
//     </div>
//   }
  

//   const setCounter = () => setCount(count + 1);
//   return (
//     <>
//       <CreateTodo/>
//       <ToDo todos={todos}/>
//     </>
//   )
// }

// export default App

import React, { useState, useCallback } from 'react';

const ChildComponent = ({ onClick }) => {
  console.log('ChildComponent rendering...');
  return <button onClick={onClick}>Click me</button>;
};

const CallbackExample = () => {
  const [count, setCount] = useState(0);

  // Regular callback function
  const handleClick = () => {
    console.log('Button clicked!');
    setCount((prevCount) => prevCount + 1);
  };

  // Memoized callback using useCallback
  const memoizedHandleClick = useCallback(handleClick, []);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={memoizedHandleClick} />
    </div>
  );
};

export default CallbackExample;
