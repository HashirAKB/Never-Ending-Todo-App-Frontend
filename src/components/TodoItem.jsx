//src\components\TodoItem.jsx
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useRecoilState, useRecoilValue } from "recoil";
import { jwtTokenState } from "../store/atoms/userAtoms";
import { editTodo, TodoDescription, TodoTitle } from "../store/atoms/todoAtoms";
import { useDeferredValue, useEffect } from "react";

export const TodoItem = ({todo, fetchTodos}) => {
    const jwtToken = useRecoilValue(jwtTokenState);
    const [todoTitle, settodoTitle] = useRecoilState(TodoTitle);
    const [todoDescription, settodoDescription] = useRecoilState(TodoDescription);
    const navigate = useNavigate();
    const [editTodoMode, setEditTodoMode] = useRecoilState(editTodo);
    useEffect(() => {
        settodoTitle(todo.title);
        settodoDescription(todo.description);
    },[todo]);
    
    console.log(`Todo edit mode: ${editTodoMode}`);

    const deleteTodo = (id) => {
        axios.delete(`http://localhost:3000/todos/${id}`,{
        headers:{
            'Authorization': `Bearer ${jwtToken}`
        }
        })
        .then(function (response) {
            console.log(response);
            if(response.status === 200){
                alert("Todo deleted succesfully!");
                fetchTodos();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const updateTodo = (id) => {
        axios.put(`http://localhost:3000/todos/${id}`,{
            "title": todoTitle,
            "description": todoDescription,
        },
            {
        headers:{
            'Authorization': `Bearer ${jwtToken}`
        }
        })
        .then(function (response) {
            console.log(response);
            if(response.status === 200){
                alert("Todo updated succesfully!");
                setEditTodoMode(false);
                fetchTodos();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return(
        <>
            {editTodoMode ?
                <>
                    <input type="text" value={todoTitle} onChange={(e) => {
                        settodoTitle(e.target.value);
                    }}/>
                    <input type="text" value={todoDescription} onChange={(e) => {
                        settodoDescription(e.target.value);
                    }}/>
                    <button onClick={() => {updateTodo(todo._id)}}>Update</button>    
                </>
                :
                <>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <button onClick={() => {
                            console.log("Edit button clicked.");
                            setEditTodoMode(true);
                        }
                    }>Edit</button>
                </>
            }          
            <button onClick={() => {deleteTodo(todo._id)}}>Delete</button>
        </>
    )
}