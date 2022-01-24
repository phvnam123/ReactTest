import React, { Component } from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import ToDoList from './Components/ToDoList';
import dataTask from './Data.json';
import { v4 as uuidv4 } from 'uuid';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editStatus: false,
      data: [],
      searchText: "",
      error: true,
      checkAdd: "",
    };
  }
  
  componentWillMount() {
    if(localStorage.getItem('TaskData')=== null){
      localStorage.setItem('TaskData',JSON.stringify(dataTask));
    } else { 
      this.setState({
        data:JSON.parse(localStorage.getItem('TaskData'))
      })
    }
  }
  
  ChangEditStatus = () =>{
    this.setState({
      editStatus: !this.state.editStatus
    })
  }
  AddTask = (name,descreption, dueDate, piosrity) => {
    if(piosrity === ""){
        piosrity = 2;
    }
    if(name ===""){
      this.setState({
        error: false
      })
      return;
    } else{
      this.setState({
        error: true
      })
    }

    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.descreption = descreption;
    item.dueDate = dueDate;
    item.piority = piosrity;
    var items = this.state.data;
    items.push(item);
    this.setState({
        data: items
    })
    
  }
  GetInfoTask = (info) =>{
    this.state.data.forEach((value, key)=>{
      if(value.id === info.id){
        value.name = info.name;
        value.descreption = info.descreption;
        value.dueDate = info.dueDate;
        value.piority = info.piority;
      }
    });
    localStorage.setItem('TaskData',JSON.stringify(this.state.data));
  }
  DeleteTask = (id) => {
    console.log(id);
    var newData = this.state.data.filter(item=>item.id !== id);
    this.setState({
      data: newData
    });
    localStorage.setItem('TaskData',JSON.stringify(newData));
  }
  SearchTask = (value) =>{
    this.setState({
      searchText: value
    })
  }
  RemoveList = (ids) =>{
    var newData = this.state.data.filter(item => !ids.includes(item.id));
    this.setState({
      data: newData
    });
    localStorage.setItem('TaskData',JSON.stringify(newData));
  }
  Validator = () => {
    if(this.state.error === false){
      return <div className=""> <span>Name is not empty</span></div>
    }else{
      return "";
    }
  }
  render() {
    var result = [];
    this.state.data.forEach((value, key)=>{
      if(value.name.indexOf(this.state.searchText) !== -1){
        result.push(value);
      }
    })
    return (
      <div className="">
            {this.Validator()}
            <AddTask 
            checkAdd = {this.state.checkAdd}
            Add={(name, descreption, dueDate, piosrity)=>this.AddTask(name, descreption, dueDate, piosrity)}
            />
            <ToDoList
            SearchTask = {(value)=>this.SearchTask(value)}
            GetInfoTask={(info)=>this.GetInfoTask(info)}
            editStatus={this.state.editStatus}
            ChangEditStatus={()=>this.ChangEditStatus()}
            dataList = {result}
            DeleteTask = {(id)=>this.DeleteTask(id)}
            RemoveList = {(ids)=>this.RemoveList(ids)}
            />
          </div>
        );
  }
}

export default App;
