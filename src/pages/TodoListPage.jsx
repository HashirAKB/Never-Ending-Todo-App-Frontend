//src\pages\TodoListPage.jsx
import { useRecoilState, useRecoilValue } from "recoil"
import { TodoItem } from "../components/TodoItem"
import { todoState } from "../store/atoms/todoAtoms"
import { jwtTokenState } from "../store/atoms/userAtoms";
import { useEffect } from "react";
import axios from 'axios';

export const TodoPage = () => {
    const [todos, setTodos] = useRecoilState(todoState);
    const jwtToken = useRecoilValue(jwtTokenState);
    const fetchTodos = async () => {
        try{
            const response = await axios.get('http://localhost:3000/todos',{
                headers:{
                    'Authorization': `Bearer ${jwtToken}`
                }
            });
            console.log(response.data);
            setTodos(response.data);
        }
        catch{

        }
    }

    useEffect(() => {
        fetchTodos();
    },[jwtToken]);

    return(
        <>
            <h2>This is Todo Page.</h2>
            {todos.map(todo => (
                <TodoItem key={todo._id} todo={todo}/>
            ))}
        </>
    )
}