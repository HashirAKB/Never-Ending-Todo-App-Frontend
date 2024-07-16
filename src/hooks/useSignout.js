// src/hooks/useSignout.js
import { useSetRecoilState } from "recoil"
import { ConfirmPasswordState, IsEditingState, jwtTokenState, passwordState, usernameState } from "../store/atoms/userAtoms"
import { useNavigate } from "react-router-dom";
import { editTodo, todoState } from "../store/atoms/todoAtoms";

export const useSignout = () => {
    const clearJWT = useSetRecoilState(jwtTokenState);
    const clearTodos = useSetRecoilState(todoState);
    const clearUser = useSetRecoilState(usernameState);
    const clearPassword = useSetRecoilState(passwordState);
    const clearConfirmPassword = useSetRecoilState(ConfirmPasswordState);
    const clearIfIsEdit = useSetRecoilState(IsEditingState);
    const todoEditMode = useSetRecoilState(editTodo);
    const navigate = useNavigate();

    return () => {
        clearJWT('');
        clearTodos([]);
        clearUser('');
        clearPassword('');
        clearConfirmPassword('');
        clearIfIsEdit(false);
        todoEditMode(false);
        navigate('/');
    };
}