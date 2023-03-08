import React, {useState} from 'react';
import './App.css';
import { Todolist } from './Todolist';


function App() {
  let [listOfTasks, setListOfTasks] = useState( [
    {id: 1, name: "go for a walk", isDone: true},
    {id: 2, name: "finish the todolist with buttons", isDone: true},
    {id: 3, name: "style the todolist", isDone: true},
    {id: 4, name: "get drunk", isDone: false}
  ])
  const [check, setCheck] = useState ( 'All')
  const listOfTasks2 = [
    {id: 1, name: "search script", isDone: false},
    {id: 2, name: "finish the articles", isDone: false},
    {id: 3, name: "contact form", isDone: false},
    {id: 4, name: "contact page", isDone: false},
    {id: 5, name: "deploy on githubpages", isDone: false}
  ]
  const listOfTasks3 = [
    {id: 1, name: "choose the template", isDone: false},
    {id: 2, name: "proceed with the hosting of hauz.tech", isDone: false},
    {id: 3, name: "deploy", isDone: false}
  ]

  function remove(id:number){
    setListOfTasks(listOfTasks.filter(el=>el.id!=id))
  }
  let newListOfTasks=listOfTasks;

  if (check === "To-do") {
    newListOfTasks = listOfTasks.filter(el=>!el.isDone)
  }
  if (check === "Done") {
    newListOfTasks = listOfTasks.filter(el=>el.isDone)
  }
  if (check === "3") {
    newListOfTasks = listOfTasks.filter(el=>el.id<4)
  }
  function taskFilter(check: 'All'|"To-do"|'Done'|'3') {
    setCheck(check)
  }
  function deleteAll () {
    listOfTasks=[]
    setListOfTasks(listOfTasks)
  }


  return (
    <div className="App">
     <Todolist title='One' tasks={newListOfTasks} delete={remove} filtering={taskFilter} deleteAll={deleteAll}/>
     {/*<Todolist title='Code grabbers' tasks={listOfTasks2}/>*/}
     {/*<Todolist title='Health aging' tasks={listOfTasks3}/>*/}
    </div>
  );
}

export default App;
