import { useRecoilValue } from "recoil";
import { passwordState, usernameState } from "../store/atoms/userAtoms";

export const SignupButton = () => {
    const username = useRecoilValue(usernameState);
    const password = useRecoilValue(passwordState);

    const handleSignup = () => {  
        console.log(`Signup clicked. Username:${username}, Password:${password}`);
        
    };

    return(
        <button type="submit"
                onClick={
                    handleSignup
                }>Signup</button>
    )
}
