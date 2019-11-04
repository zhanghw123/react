import React, { Component } from 'react';
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    constructor() {
        super();
    }
    render() {
        const {todos,toggleTodo} = this.props
        return (
            <ul>
                {todos.map(todo =>
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        onClick={() => toggleTodo(todo.id)}
                    />
                )}
            </ul>
        )
    }
}