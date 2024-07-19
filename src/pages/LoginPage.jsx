import { useRecoilValue, useSetRecoilState } from "recoil"
import { jwtTokenState, signupResultState } from "../store/atoms/userAtoms"
import { useForm } from "react-hook-form"
import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const signupResult = useRecoilValue(signupResultState);
    const jwtToken = useSetRecoilState(jwtTokenState);
    console.log("SignIn component");

    const navigate = useNavigate();

    const navigateToTodos = () => {
        navigate('/todos');
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
    const onSubmit = (data) => {
        console.log(`Signin clicked. Username:${data.username}, Password:${data.password}`);
        axiosInstance.post('/user/signin', {
            "username": data.username,
            "password": data.password
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
    }

    return(
        <>
            {signupResult? <h3>Signup successfull, Please login with your credentials.</h3> : null}
            <h2>This is Login Page.</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Username:</h3>
                {/* register your input into the hook by invoking the "register" function */}
                <input placeholder="Enter Username" {...register("username", { required: true })} />
                <br/>
                {errors.username && <span>Username is required</span>}

                <h3>Password:</h3>
                {/* include validation with required or other standard HTML validation rules */}
                <input type="password" placeholder="Enter Password" {...register("password", { required: true })} />
                {/* errors will return when field validation fails  */}
                <br/>
                {errors.password && <span>Password is required</span>}
                <br/>
                <br/>
                <button type="submit">SignIn</button>
            </form>
        </>
    )
}