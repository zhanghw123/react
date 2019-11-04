import React, { Component } from 'react';
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
export default class Todo extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <p>Todo</p>
                <AddTodo></AddTodo>
                <VisibleTodoList></VisibleTodoList>
            </div>
        )
    }
}