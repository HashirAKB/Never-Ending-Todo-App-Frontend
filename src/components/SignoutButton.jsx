import { useRecoilValue, useSetRecoilState } from "recoil"
import { jwtTokenState, passwordState, usernameState } from "../store/atoms/userAtoms"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { todoState } from "../store/atoms/todoAtoms";

//src\components\SignoutButton.jsx
export const SignoutButton = () => {
    const clearJWT = useSetRecoilState(jwtTokenState);
    const clearTodos = useSetRecoilState(todoState);
    const clearUser = useSetRecoilState(usernameState);
    const clearPassword = useSetRecoilState(passwordState);
    const navigate = useNavigate();
    const handleOnClick = () => {
        clearJWT('');
        clearTodos([]);
        clearUser('');
        clearPassword('');
        navigate('/');
    }
    return(
        <button onClick={handleOnClick}>SignOut</button>
    )
}