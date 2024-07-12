export const TodoItem = ({todo}) => {
    return(
        <>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button>Edit</button>
            <button>Delete</button>
        </>
    )
}