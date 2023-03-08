type PropsType = {
    title: string
    tasks: Array<TasksType>

}

type TasksType = {
    id: number,
    name: string,
    isDone: boolean
}
export const Todolist = (props: PropsType) => {
    return (
    <div className = "wrapper">
        <h2 className="header">{props.title}</h2>
        <ul>
            {props.tasks.map(el => <li key={el.id}><input type="checkbox" checked={el.isDone}/>{el.name}</li>)}
        </ul>
        <div className="buttons">
            <button>All</button>
            <button>To-do</button>
            <button>Done</button>
        </div>
    </div>
    )
}