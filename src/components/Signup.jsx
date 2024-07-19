import { useRecoilValue, useSetRecoilState } from "recoil";
import { passwordState, signupResultState, usernameState } from "../store/atoms/userAtoms";
import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from 'react-router-dom';

export const SignupButton = () => {
    const username = useRecoilValue(usernameState);
    const password = useRecoilValue(passwordState);
    const setSignupResult = useSetRecoilState(signupResultState);


    const navigate = useNavigate();

    const navigateToSignin = () => {
        navigate('/signin');
    }

    const handleSignup = () => {  
        console.log(`Signup clicked. Username:${username}, Password:${password}`);
        axiosInstance.post('/user/signup', {
            "username": username,
            "password": password
          })
          .then(function (response) {
            console.log(response);
            if(response.status == 200){
                setSignupResult(true);
                navigateToSignin();
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    return(
        <button type="submit"
                onClick={
                    handleSignup
                }>Signup</button>
    )
}
