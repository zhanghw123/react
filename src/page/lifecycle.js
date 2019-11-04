import React, { Component } from 'react';
import ShowNumber from '../component/lifecycle/ShowNumber'
/**
 * 废弃
 * componentWillMount、componentWillReceiveProps以及componentWillUpdate
 * 
 * 新增
 * getDerivedStateFromProps、getSnapshotBeforeUpdate
 */
export default class Lifecycle extends Component {
    constructor() {
        super();
        this.state = {
            testNumber: 0
        }
    }
    setNumber() {
        let testNumber = this.state.testNumber + 1
        this.setState({
            testNumber
        })
    }
    render() {
        return (
            <div>
                Lifecycle
                <div>
                    <button onClick={()=>{this.setNumber()}}> + 1 </button>
                </div>
                
                <ShowNumber number={this.state.testNumber}></ShowNumber>
            </div>
        )
    }
}