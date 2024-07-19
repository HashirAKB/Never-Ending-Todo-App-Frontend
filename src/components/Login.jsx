//src\components\Login.jsx
import { useRecoilValue, useSetRecoilState } from "recoil";
import { passwordState, jwtTokenState, usernameState } from "../store/atoms/userAtoms";
import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from 'react-router-dom';

export const SigninButton = () => {
    const username = useRecoilValue(usernameState);
    const password = useRecoilValue(passwordState);
    const jwtToken = useSetRecoilState(jwtTokenState);

    // const setSignupResult = useSetRecoilState(signupResultState);

    const navigate = useNavigate();

    const navigateToTodos = () => {
        navigate('/todos');
    }

    const handleSignin = () => {  
        console.log(`Signin clicked. Username:${username}, Password:${password}`);
        axiosInstance.post('/user/signin', {
            "username": username,
            "password": password
          })
          .then(function (response) {
            console.log(response.data);
            if(response.status == 200){
                jwtToken(response.data.token);
                navigateToTodos();
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    return(
        <button type="submit"
                onClick={
                    handleSignin
                }>SignIn</button>
    )
}
