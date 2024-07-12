import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

import { HomePage } from './pages/HomePage';
import { NavBar } from './components/NavBar';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { ProfilePage } from './pages/ProfilePage';
import { TodoPage } from './pages/TodoListPage';

function App() {
 return(
  <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/signin' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/todos' element={<TodoPage/>}/>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  </>
 );
}

export default App