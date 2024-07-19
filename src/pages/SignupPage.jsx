import { useForm } from "react-hook-form"
import { useRecoilState, useSetRecoilState } from "recoil";
import {signupResultState } from "../store/atoms/userAtoms";
import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from 'react-router-dom';

export const SignupPage = () => {
    console.log("Signup Page Component");
    const setSignupResult = useSetRecoilState(signupResultState);

    const navigate = useNavigate();
    const navigateToSignin = () => {
        navigate('/signin');
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
    const onSubmit = (data) => {
        console.log(data.username, data.password);
        axiosInstance.post('/user/signup', {
            "username": data.username,
            "password": data.password
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
    }
    return(
        <>
            <h2>This is Signup Page.</h2>
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
                <button type="submit">Signup</button>
            </form>           
        </>
    )
}