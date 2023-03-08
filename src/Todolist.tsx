type PropsType = {
    title: string
    tasks: Array<TasksType>
    delete: (id: number) => void
    filtering: (check: 'All'|"To-do"|'Done') => void
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
            {props.tasks.map(el => <li key={el.id}>
                <input type="checkbox" checked={el.isDone}/>
                {el.name}
                <button onClick={()=>{props.delete(el.id)}}>X</button></li>)}
        </ul>
        <div className="buttons">
            <button onClick={()=>{props.filtering('All')}}>All</button>
            <button onClick={()=>{props.filtering('To-do')}}>To-do</button>
            <button onClick={()=>{props.filtering('Done')}}>Done</button>
        </div>
    </div>
    )
}