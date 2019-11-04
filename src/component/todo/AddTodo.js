import React, { Component } from 'react';
import {connect} from 'react-redux'
import { actions } from '../../store/actions/todo'
class AddTodo extends Component {
    constructor() {
        super();
    }
    AddTodoClick() {
        console.log(this.props)
        let val = this.todoVal.value
        if(val=='') {
            return
        }else{
            this.props.addTodo(val)
            this.todoVal.value = ''
        }
    }
    render() {
        return (
            <div>
                <input  ref={x=>this.todoVal = x}/>
                <button onClick={()=>{this.AddTodoClick()}}>Add Todo</button>
            </div>
        )
    }
}

export default connect((state)=>({}),actions)(AddTodo)