import { Link } from "react-router-dom"
export const NavBar = () => {
    return(
        <>
            <Link to="/">
                <h2>ToDo</h2>
            </Link>
            <Link to={"/signup"}>
                <button>SignUp</button>
            </Link>
            <Link to={"/signin"}>
                <button>SignIn</button>
            </Link>
            <Link to={"/profile"}>
                <button>View profile</button>
            </Link>
            <Link to={"/"}>
                <button>SignOut</button>
            </Link>
            <Link to={"/todos"}>
                <button>Todos</button>
            </Link>
        </>
    )
}