import React, { Component } from 'react';
class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id:this.props.id,
          name: this.props.name,
          descreption:this.props.descreption,
          dueDate:this.props.dueDate,
          piority:this.props.piority
        };
    }

    IsChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    Save = () =>{
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.descreption = this.state.descreption;
        info.dueDate = this.state.dueDate;
        info.piority = this.state.piority;
        this.props.GetInfoTask(info);
        this.props.ChangEditStatus(); //an form
    }
    render() {
        return (
            <div className="container mb-3 mt-0">
                <form>
                <div className="form-group mb-3">
                    <input type="text" name="name" className='btn-block' placeholder="  Edit new task..." onChange={(event)=>this.IsChange(event)} defaultValue={this.props.name}/>
                </div>
                <div className="form-group mb-3">
                <h6 htmlFor="Descreption">Descreption</h6>
                <textarea name="descreption" className="w-100 border-dark" id="Descreption" rows={3} onChange={(event)=>this.IsChange(event)} defaultValue={this.props.descreption}/>
                </div>
                <div className="row form-row mb-3">
                <div className="col-md-6">
                    <h6 htmlFor="inputState">State</h6>
                    <div className="input-group">
                    <input className="w-100 date" name='dueDate' min={new Date().toISOString().slice(0, -8)} id="date" type="datetime-local" onChange={(event)=>this.IsChange(event)} defaultValue={this.props.dueDate}/>
                    </div>
                </div> 
                <div className="col-md-6">
                    <h6 htmlFor="inputState">State</h6>
                    <select defaultValue={this.props.piority} name='piority' id="inputState" className="w-100 select-state border-dark" onChange={(event)=>this.IsChange(event)}>
                    <option value={1}>low</option>
                    <option value={2}>normal</option>
                    <option value={3} >high</option>
                    </select>
                </div>
                </div>
                <div className="">
                    <input type="button" className="btn btn-block btn-success btn-lg" onClick={()=>this.Save()} value="Edit"/>
                </div>
                </form>
            </div>
        );
    }
}

export default Edit;