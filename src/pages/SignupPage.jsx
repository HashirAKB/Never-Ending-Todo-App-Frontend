import { useRecoilState } from "recoil";
import { SignupButton } from "../components/Signup"
import { passwordState, usernameState } from "../store/atoms/userAtoms";
export const SignupPage = () => {
    const [username, setUsername] = useRecoilState(usernameState);
    const [password, setPassword] = useRecoilState(passwordState);
    return(
        <>
            <h2>This is Signup Page.</h2>
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
            <SignupButton/>           
        </>
    )
}