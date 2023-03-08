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
    <div>
        <div className="header">{props.title}</div>
        <ul>
            {props.tasks.map(el => <li key={el.id}><input type="checkbox" checked={el.isDone}/>{el.name}</li>)}
        </ul>
        <button></button>
        <button></button>
        <button></button>
    </div>
    )
}