import { atom } from "recoil";

export const todoState = atom({
    key:"todoState",
    default:[],
});

export const editTodo = atom({
    key:"editTodoState",
    default:false,
});

export const TodoTitle = atom({
    key:"todoTitle",
    default:'',
});

export const TodoDescription = atom({
    key:"todoDescription",
    default:'',
});

export const NewTodoTitle = atom({
    key:"newtodoTitle",
    default:'',
});

export const NewTodoDescription = atom({
    key:"NewtodoDescription",
    default:'',
});