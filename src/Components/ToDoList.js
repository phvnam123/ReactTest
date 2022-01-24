import React, { Component } from 'react';
import './../FileCss/Todolist.scss';
import Task from './Task';

var Ids = [];
class ToDoList extends Component {
    
    IsChange = (event) => {
        this.props.SearchTask(event.target.value);
    }

    LoopData = () => this.props.dataList.map((value,key) => {
        return (
            <Task 
            RemoveIds = {(ids)=>this.RemoveIds(ids)}
            DeleteTask = {(id)=>this.props.DeleteTask(id)}
            editStatus = {this.props.editStatus}
            GetInfoTask = {(info)=>this.props.GetInfoTask(info)}
            ChangEditStatus={()=>this.props.ChangEditStatus()} 
            id={value.id}
            name={value.name} 
            key={key}
            dueDate={value.dueDate}
            descreption = {value.descreption} 
            piority={value.piority}>
            </Task>
        )
    })
    
    RemoveIds = (ids) =>{
        Ids = ids;
    }
    RemoveList = () => {
        this.props.RemoveList(Ids);
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="text-center">To Do List</h1>
                </div>
                <div className="container">
                    <div className="form-group mb-3">
                        <input type="text" className='w-100' placeholder="  Search..." onChange={(value)=>this.IsChange(value)} />
                    </div>
                        {this.LoopData()}
                    <div className="footer">
                    <div className="row form-row bulk-action">
                        <div className="col-md-8">
                        <div className ="text-left">
                            <label className ="text-left">bulk action:</label>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="even-task">
                            <button type="button" className="btn btn-sm btn-primary btn-details">Done</button>
                            <button type="button" className="btn btn-sm btn-danger btn-remove" onClick={()=>this.RemoveList()}>Remove</button>
                        </div>                
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoList;