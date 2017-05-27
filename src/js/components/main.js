import React from 'react';
import {AddNewTask} from './addtask';
import {ToDoAppList} from './applist';

export class Todo extends React.Component{
  constructor(props){
    super();

    this.state = {tasks: props.tasks}
    this.updateList = this.updateList.bind(this)
    this.removeTasks = this.removeTasks.bind(this)
    this.completedTasks = this.completedTasks.bind(this)
  }
  updateList(text){
    var updatedTasks = this.state.tasks;
    if(!updatedTasks.includes(text)){
      updatedTasks.unshift(text)
      this.setState({tasks:updatedTasks})
      this.updateLocalStorage(updatedTasks);
      $('form p').text("")
    }
    else{
      $('form p').text("Error, item already exists")
    }
  }
  removeTasks(text){
    var updatedTasks = this.state.tasks;
    updatedTasks.splice(updatedTasks.indexOf(text),1)

    this.setState({tasks:updatedTasks})
    this.updateLocalStorage(updatedTasks);
  }

  completedTasks(text){
    var updatedTasks = this.state.tasks;
    // console.log( text.innerText.strike());

    var target = updatedTasks.indexOf(text);

    if (!(text.indexOf("✓ - ") >= 0)){
      updatedTasks[target] = '✓ - ' + text
    }
    else{
      var res = text.replace("✓ - ", "");
      updatedTasks[target] = res
    }

    this.setState({tasks:updatedTasks})
    this.updateLocalStorage(updatedTasks);
  }

  updateLocalStorage(updatedTasks){

    localStorage.setItem('storedTasks',JSON.stringify(updatedTasks))
  }

  render(){
    return(
      <div>
        <h1>Todo list</h1>
        <AddNewTask updateList={this.updateList} />
        <ToDoAppList tasks={this.state.tasks} remove={this.removeTasks} check={this.completedTasks}/>
      </div>
    )
  }
}
