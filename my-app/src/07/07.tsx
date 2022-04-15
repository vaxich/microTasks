import React, {useState} from 'react';

import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
export type todolistsType = {
    id: string, 
    title: string, 
    filter:FilterValuesType
}
export function Todolist_Main() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1=v1();
    let todolistID2=v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]:[
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]:[
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });



    function removeTask(todolistId:string, id: string) {
        setTasks( {...tasks, [todolistId]:tasks[todolistId].filter(t => t.id != id)});
        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);
    }

    function addTask(todolistId:string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks( {...tasks, [todolistId]:[ newTask, ...tasks[todolistId]]});
        // let task = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(todolistId:string, taskId:string, isDone: boolean) {
        setTasks({...tasks, [todolistId]:tasks[todolistId].map(m => m.id ===taskId ? {...m, isDone} : m)});
        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }

        // setTasks([...tasks]);
    }


    //let tasksForTodolist = tasks;

    // if (filter === "active") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === false);
    // }
    // if (filter === "completed") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === true);
    // }

    function changeFilter(todolistId:string, value: FilterValuesType) {
        console.log(todolistId);
        setTodolists(todolists.map( filtered => filtered.id === todolistId ? {...filtered, filter:value} : filtered) );
        // setFilter(value);
    }


    return (
        <div className="App">
            {todolists.map( (mapTodolists) => {
                let tasksForTodolist = tasks[mapTodolists.id];
                if (mapTodolists.filter === "active") {
                    tasksForTodolist = tasks[mapTodolists.id].filter(t => t.isDone === false);
                }
                if (mapTodolists.filter === "completed") {
                    tasksForTodolist = tasks[mapTodolists.id].filter(t => t.isDone === true);
                }
                return (
                    <Todolist 
                    key={mapTodolists.id}
                    todolistId={mapTodolists.id}
                    title={mapTodolists.title}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={mapTodolists.filter}
          />
                )
            })}
            
        </div>
    );
}

export default Todolist_Main;
