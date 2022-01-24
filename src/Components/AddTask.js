import React, { Component } from 'react';
import './../FileCss/Todolist.scss';
class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          descreption:"",
          dueDate:"",
          piority:"",
          error:""
        };
    }
    IsChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
        
        var item = {};
        item.name = this.state.name;
        item.AddTask = this.state.AddTask;
        item.dueDate = this.state.dueDate;
        item.piority = this.state.piority;
    }
    Add = () => {
        this.props.Add(this.state.name,this.state.descreption,this.state.dueDate,this.state.piority);
        this.setState({
            name: "",
            descreption:"",
            dueDate:"",
            piority:""
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <form>
                    <h1 className="text-center mb-3">NEW TASK</h1>
                    <div className="form-group mb-3">
                        <input type="text" required name="name" className='btn-block' placeholder="  Add new task..." onChange={(event)=>this.IsChange(event)}/>
                        
                    </div>
                    <div className="form-group mb-3">
                    <h6 htmlFor="Descreption">Descreption</h6>
                    <textarea name="descreption" className="w-100 border-dark" id="Descreption" rows={3} onChange={(event)=>this.IsChange(event)} />
                    </div>
                    <div className="row form-row mb-3">
                    <div className="col-md-6">
                        <h6 htmlFor="inputState">State</h6>
                        <div className="input-group">
                        <input className="w-100 date" name='dueDate' min={new Date().toISOString().slice(0, -8)} id="date" type="datetime-local" onChange={(event)=>this.IsChange(event)}/>
                        </div>
                    </div> 
                    <div className="col-md-6">
                        <h6 htmlFor="inputState">State</h6>
                        <select defaultValue={2} name='piority' id="inputState" className="w-100 select-state border-dark" onChange={(event)=>this.IsChange(event)}>
                        <option value={1}>low</option>
                        <option value={2}>normal</option>
                        <option value={3} >high</option>
                        </select>
                    </div>
                    </div>
                    <div className="">
                        <input type="reset" className="btn btn-block btn-success btn-lg" onClick={()=>this.Add()} value="Add"/>
                    </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddTask;