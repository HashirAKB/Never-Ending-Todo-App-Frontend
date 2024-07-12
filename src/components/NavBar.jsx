import { Link } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { jwtTokenState } from "../store/atoms/userAtoms"
import { SignoutButton } from "./SignoutButton"
export const NavBar = () => {
    const jwtToken = useRecoilValue(jwtTokenState);
    return(
        <>
            <Link to="/">
                <h2>ToDo</h2>
            </Link>                     
            <Link to={"/todos"}>
                <button>Todos</button>
            </Link>
            <Link to={"/profile"}>
                <button>View profile</button>
            </Link> 
            {jwtToken ?
                    <SignoutButton/>
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