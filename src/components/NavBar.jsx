import { Link } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { jwtTokenState } from "../store/atoms/userAtoms"
import { useSignout } from "../hooks/useSignout"
export const NavBar = () => {

    const jwtToken = useRecoilValue(jwtTokenState);
    const signout = useSignout();

    return(
        <>
            <Link to="/">
                <h2>ToDo</h2>
            </Link>                      
            {jwtToken ?
                <>
                    <Link to={"/todos"}>
                        <button>Todos</button>
                    </Link>
                    <Link to={"/profile"}>
                        <button>View profile</button>
                    </Link>
                    <button onClick={() => {signout()}}>SignOut</button>
                </>
                    :
                    <>
                        <Link to={"/signup"}>
                            <button>SignUp</button>
                        </Link>
                        <Link to={"/signin"}>
                            <button>SignIn</button>
                        </Link>
                    </>
            }
        </>
    )
}