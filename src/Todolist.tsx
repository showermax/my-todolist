import {useState} from "react";

type PropsType = {
    title: string
    tasks: Array<TasksType>
    delete: (id: number) => void
    // filtering: (check: 'All'|"To-do"|'Done'|'3') => void
    deleteAll: () => void
}

type TasksType = {
    id: number,
    name: string,
    isDone: boolean
}
export const Todolist = (props: PropsType) => {
    const [check, setCheck] = useState ( 'All')
    // let [localTasks, setLocaltasks] = useState (props.tasks)
    let localTasks = props.tasks

    // let newListOfTasks=listOfTasks;
switch (check) {
    case "To-do": localTasks = props.tasks.filter(el=>!el.isDone)
    break
    case "Done": localTasks = props.tasks.filter(el=>el.isDone)
    break
    case "3": localTasks = props.tasks.filter(el=>el.id<4)
}
    function taskFilter(check: 'All'|"To-do"|'Done'|'3') {
      setCheck(check)
    }

    return (
    <div className = "wrapper">
        <h2 className="header">{props.title}</h2>
        <ul>
            {localTasks.map(el => <li key={el.id}>
                <input type="checkbox" checked={el.isDone}/>
                {el.name}
                <button onClick={()=>{props.delete(el.id)}}>X</button></li>)}
        </ul>
        <button onClick={()=>{props.deleteAll()}}>Delete all</button>
        <div className="buttons">
            <button onClick={()=>{taskFilter('All')}}>All</button>
            <button onClick={()=>{taskFilter('To-do')}}>To-do</button>
            <button onClick={()=>{taskFilter('Done')}}>Done</button>
            <button onClick={()=>{taskFilter('3')}}>First three</button>
        </div>
    </div>
    )
}