import React, { Component } from 'react';
import {Todolist} from './todolist';
import {TodoForm} from './todoform';
import {Header} from './inc/header';
import {Footer} from './inc/footer';

    


class App extends Component {
constructor(){
  super();
  this.state={myList:[
    {text:"Yapılacak ilk iş",status:"passive"},
    {text:"film izle",status:"passive"},
    {text:"okula git",status:"passive"},
    {text:"alışveriş yap",status:"passive"}
  ]  };
  this.addTask=this.addTask.bind(this);
  this.doneTask=this.doneTask.bind(this);
  this.removeTask=this.removeTask.bind(this);
}

  addTask(val){
    let updatedList=this.state.myList;
    updatedList.push({text:val, status:"passive"});
    this.setState({myList: updatedList});
  }

  doneTask(task_id){
    task_id=task_id.replace('task_','');
    let updatedList=this.state.myList;
    let newStatus='active';
    let currentStatus=updatedList[task_id].status;
    if(currentStatus==='active'){
      newStatus='passive;'
    }
    updatedList[task_id].status=newStatus;
    this.setState({myList: updatedList});
  }

  removeTask(task_id){
    task_id=task_id.replace('task_','');
    let updatedList=this.state.myList;
    updatedList.splice(task_id,1);
    this.setState({myList: updatedList});
    
  }

  render() {
    return (
      <div className="content">
        <Header/>
        <TodoForm addTask={this.addTask}/>
        <Todolist myList={this.state.myList}
          doneTask={this.doneTask} 
          removeTask={this.removeTask} />
        <Footer/>
      </div>
    );
  }
}

export default App;
