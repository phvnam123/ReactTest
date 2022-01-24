import React, { Component } from 'react';
import Edit from './Edit';

var IdTask = "";
var Ids = [];
class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id:"",
          name: "",
          descreption:"",
          dueDate:"",
          piority:""
        };
    }

    Delete = () => {
        this.props.DeleteTask(this.props.id);
    }
    Edit = (value) => {
        this.props.ChangEditStatus();      
        IdTask = value.props.id;            
    }
    GetInfoTask = (info) => {
        this.props.GetInfoTask(info);
    }
    CheckEditForm = () => {
        if(this.props.editStatus === true && this.props.id === IdTask){
            return <Edit 
            GetInfoTask = {(info)=>this.GetInfoTask(info)}
            checkEdit={this.state.checkEdit}
            id={this.props.id}
            name={this.props.name}
            descreption={this.props.descreption}
            dueDate={this.props.dueDate}
            piority={this.props.piority}
            ChangEditStatus={()=>this.props.ChangEditStatus()}>
            </Edit>;
        }
    }
    
    ChangeCheckBox = (e, id) => {
        if(Ids.indexOf(id) === -1 && e.target.checked === true){
            Ids.push(id);
        } else if(Ids.indexOf(id) !== -1 && e.target.checked === false){
            Ids = Ids.filter(item => item !== id);
        }     
        this.props.RemoveIds(Ids);
    }
    componentDidUpdate() {
        document.querySelector('.form-check-input').checked = false;
    }
    render() {
        return (
            <div className='task' >
                <div className={this.props.editStatus && this.state.checkEdit ? "row form-row task-bottom" : "row form-row item-center" }>
                    <div className="col-md-8">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" onChange={(e)=>this.ChangeCheckBox(e, this.props.id)}/>
                        <label className="form-check-label">
                        {this.props.name}
                        </label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="even-task">
                        <button type="button" className="btn btn-sm btn-primary btn-details" onClick={()=>this.Edit(this)}>Details</button>
                        <button type="button" className="btn btn-sm btn-danger btn-remove" onClick={()=>this.Delete()}>Remove</button>
                        </div>                
                    </div>
                </div>
                {this.CheckEditForm()}
            </div>
            
        );
    }
}

export default Task;