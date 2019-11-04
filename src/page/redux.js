import React, { Component } from 'react';
import '../style/redux.scss'
import {connect} from 'react-redux'
import actions from '../store/actions/counter'

import Todo from '../component/todo/Todo';

class Redux extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <div>
                    计数器：{this.props.num}
                    <div>
                        <button onClick={()=>{
                             console.log(this.props)
                            this.props.add(1)
                        }}> + </button>
                        <button onClick={()=>{
                            this.props.minus(1)
                        }}> - </button>
                    </div>
                    
                </div>

                <div className='top-line'>
                    <Todo></Todo>
                </div>
                
            </div>
        )
    }
}
export default connect((state)=>({
    num: state.counter.number
}),actions)(Redux)