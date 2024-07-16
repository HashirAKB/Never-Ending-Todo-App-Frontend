import { atom } from "recoil";

export const usernameState = atom({
    key:'usernameState',
    default:'',
});

export const passwordState = atom({
    key:'passwordState',
    default:'',
});

export const ConfirmPasswordState = atom({
    key:'confirmPasswordState',
    default:'',
});

export const signupResultState = atom({
    key:'signupResultState',
    default:false,
})

export const jwtTokenState = atom({
    key:'jwtTokenState',
    default:''
})

export const IsEditingState = atom({
    key:'isEditingState',
    default:false,
})