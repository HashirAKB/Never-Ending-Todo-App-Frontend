import { useRecoilState, useRecoilValue } from "recoil"
import { ConfirmPasswordState, IsEditingState, passwordState, usernameState, jwtTokenState } from "../store/atoms/userAtoms"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { decode } from 'jwt-js-decode';
import axios from 'axios';
import { useSignout } from "../hooks/useSignout";

export const ProfilePage = () => {
    const [username, setusername] = useRecoilState(usernameState);
    const [password, setpassword] = useRecoilState(passwordState);
    const [isEditing, setIsEditing] = useRecoilState(IsEditingState);
    const [confirmpassword, setConfirmPasswordState] = useRecoilState(ConfirmPasswordState);
    const jwtToken = useRecoilValue(jwtTokenState);
    const navigate = useNavigate();
    const signout = useSignout();

    console.log("is editit?:", isEditing);
    const updateProfile = () => {
        if(password != confirmpassword){
            console.log("Passwords don't match!");
            alert("Passwords don't match!");
        }
        else if(password === '' || username === ''){
            console.log("Enter missing credentials!");
            alert("Enter missing credentials!");
        }
        else{
            let userId = decode(jwtToken).payload.userId;
            console.log(`User id is ${userId}`);
            console.log(`Update clicked. Username:${username}, Password:${password}`);
            axios.put(`http://localhost:3000/user/${userId}`, {
                "username": username,
                "password": password
            }, {
            headers:{
                'Authorization': `Bearer ${jwtToken}`
            }
            })
            .then(function (response) {
                console.log(response);
                if(response.status === 200){
                    alert("Profile updated succesfully!");
                    signout();
                    // navigateToSignin();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            }
        setConfirmPasswordState('');
    }

    const deleteProfile = () => {
            let userId = decode(jwtToken).payload.userId;
            console.log(`User id is ${userId}`);
            console.log(`Delete clicked. userId:$ {userId}`);
            axios.delete(`http://localhost:3000/user/${userId}`,{
            headers:{
                'Authorization': `Bearer ${jwtToken}`
            }
            })
            .then(function (response) {
                console.log(response);
                if(response.status === 200){
                    alert("Profile deleted succesfully!");
                    signout();
                    // navigateToSignin();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        if (jwtToken === '') {
            navigate('/signin');
          }
    },[jwtToken, navigate])

    return(
        <>
            <h2>This is Profile Page.</h2>
            {isEditing ? <h3>Please enter your new credentials</h3> : null}
            <div>Username:</div>
            <input type="text" defaultValue={username} readOnly={!isEditing} onChange={(e) => {
                setusername(e.target.value)
            }}></input>
            <div>Password:</div>
            <input type="password" defaultValue={password} readOnly={!isEditing} onChange={(e) => {
                setpassword(e.target.value)
            }}></input>
            { isEditing ?
                <>
                <div>Re-Enter Password:</div>
                <input type="password" defaultValue={confirmpassword} readOnly={!isEditing} onChange={(e) => {
                setConfirmPasswordState(e.target.value)
            }}></input>
                </>
                :
                null 
            }
            <br/>
            <br/>
            {isEditing ?
                <button onClick={updateProfile}>Update profile</button>
                :
                <button onClick={() => {setIsEditing(true)}}>Edit Profile/ Change Password</button>
            }
            <br/>
            <br/>
            <button onClick={deleteProfile}>Delete Profile</button>

        </>
    )
}