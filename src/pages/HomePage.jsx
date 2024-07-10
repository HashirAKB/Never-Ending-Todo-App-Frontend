import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
// import { userState } from '../recoil/atoms';

export function HomePage() {
//   const user = useRecoilValue(userState) || null;
    const user = {"username": "hashir"};

  return (
    <div className="home-page">
      <h1>Welcome to Your Todo App</h1>
      
      {/* {user ? (
        <div>
          <p>Hello, {user.username}!</p>
          <Link to="/todos">View Your Todos</Link>
        </div>
      ) : (
        <div>
          <p>Get organized and boost your productivity with our simple todo app.</p>
          <div className="cta-buttons">
            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-secondary">Log In</Link>
          </div>
        </div>
      )}
      
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Create and manage your todo list</li>
          <li>Edit and delete tasks</li>
          <li>Mark tasks as complete</li>
          <li>Secure user authentication</li>
        </ul>
      </section> */}
    </div>
  );
}