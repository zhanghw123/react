    import React, { Component } from 'react';

    
    export default class TodoItem extends Component {
        constructor() {
            super();
        }
        render() {
            const {onClick,completed,text} = this.props
            return (
                <li
                    onClick={onClick}
                    style={{
                    textDecoration: completed ? 'line-through' : 'none'
                    }}
                >
                    {text}
                </li>
            )
        }
    }