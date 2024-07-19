//src\pages\TodoListPage.jsx
import { useRecoilState, useRecoilValue } from "recoil"
import { TodoItem } from "../components/TodoItem"
import { todoState } from "../store/atoms/todoAtoms"
import { AddTodo } from "../components/AddTodo";
import { jwtTokenState } from "../store/atoms/userAtoms";
import { useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";


export const TodoPage = () => {
    const navigate = useNavigate();
    const [todos, setTodos] = useRecoilState(todoState);
    const jwtToken = useRecoilValue(jwtTokenState);
    const fetchTodos = async () => {
        try{
            const response = await axiosInstance.get('/todos',{
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
        if (jwtToken === '') {
            navigate('/signin');
        }
        fetchTodos();
    },[jwtToken, navigate,]);

    return(
        <>
            <h2>This is Todo Page.</h2>
            <AddTodo fetchTodos={fetchTodos}/>
            {todos.map(todo => (
                <TodoItem key={todo._id} todo={todo} fetchTodos={fetchTodos}/>
            ))}
        </>
    )
}