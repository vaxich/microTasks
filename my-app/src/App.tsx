import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NewConponent } from './02/newComponent';
import { Buttons } from './03/03';
import { State } from './04/04';
import { MetodFilter } from './05/05';
import { SuperInput } from './06/06';
import { Todolist_Main } from './07/07';

const students = [
  {id: 1, name: "James", age: 8},
  {id: 2, name: "Robert", age: 18},
  {id: 3, name: "John", age: 28},
  {id: 4, name: "Michael", age: 38},
  {id: 5, name: "William", age: 48},
  {id: 6, name: "David", age: 58},
  {id: 7, name: "Richard", age: 68},
  {id: 8, name: "Joseph", age: 78},
  {id: 9, name: "Thomas", age: 88},
  {id: 10, name: "Charles", age: 98},
  {id: 11, name: "Christopher", age: 100},
]


function App() {

  const button1Foo =(subscriber:string, age:number) => {
    console.log(subscriber, age);
    
  }
  const button2Foo =(subscriber:string) => {
    console.log(subscriber);
    
  }
  const button3Foo =() => {
    console.log("stupid BUTTON");
    
  }
  return (
    <div>
    <NewConponent students={students}/>
    <Buttons name="MyYoutubeChanel-1" callback={ () =>button1Foo("Vasia", 21)}/>
    <Buttons name="MyYoutubeChanel-2" callback={ () =>button2Foo("Ivan")}/>
    <Buttons name="I`m stupid button" callback={button3Foo}/>
    <State />
    <MetodFilter />
    <SuperInput />
    <Todolist_Main />
    </div>
  );
}

export default App;
