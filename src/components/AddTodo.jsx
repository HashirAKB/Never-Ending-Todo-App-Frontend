import { useRecoilState, useRecoilValue } from "recoil"
import { NewTodoDescription, NewTodoTitle } from "../store/atoms/todoAtoms"
import { jwtTokenState } from "../store/atoms/userAtoms";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { useEffect } from "react";

export const AddTodo = ({fetchTodos}) => {
    const [title, setTitle] = useRecoilState(NewTodoTitle);
    const [description, setDescription] = useRecoilState(NewTodoDescription);
    const jwtToken = useRecoilValue(jwtTokenState);
    const navigate = useNavigate();
    console.log(title);
    console.log(description);

    const handleAddTodo = () => {
        console.log(`AddTodo clicked. Title:${title}, Description:${description}`);
        axiosInstance.post('/todos', {
            "title": title,
            "description": description
        },
        {headers:
            {
                'Authorization': `Bearer ${jwtToken}`
            }
        })
        .then(function (response) {
            console.log(response);
            if(response.status === 201){
                fetchTodos();
                setTitle('');
                setDescription('');
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return(
        <>
            <b>Title:</b>
            <input type="text" placeholder="Insert Title" value={title} onChange={(e) => {
                setTitle(e.target.value);
            }}/>
            <br/>
            <br/>
            <b>Description:</b>
            <input type="text" placeholder="Insert Description" value={description} onChange={(e) => {
                setDescription(e.target.value);
            }}/>
            <br/>
            <br/>
            <button type="submit" onClick={handleAddTodo}>Add New Todo</button>
        </>
    )       
}