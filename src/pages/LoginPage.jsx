import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil"
import { jwtTokenState, signupResultState } from "../store/atoms/userAtoms"
import { usernameState, passwordState } from "../store/atoms/userAtoms";
import { SigninButton } from "../components/Login";

export const LoginPage = () => {
    const [username, setUsername] = useRecoilState(usernameState);
    const [password, setPassword] = useRecoilState(passwordState);
    const signupResult = useRecoilValue(signupResultState);
    console.log(signupResult);
    return(
        <>
            {signupResult? <h3>Signup successfull, Please login with your credentials.</h3> : null}
            <h2>This is Login Page.</h2>
            <h3>Username:</h3>
            <input 
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <h3>Password:</h3>
            <input
                type="password" 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                />
            <br/>            
            <br/> 
            <SigninButton/>
        </>
    )
}