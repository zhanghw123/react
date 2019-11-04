import React, { Component } from 'react';

/**
 * 废弃
 * componentWillMount、componentWillReceiveProps以及componentWillUpdate
 * 
 * 新增
 * getDerivedStateFromProps、getSnapshotBeforeUpdate
 */
export default class ShowNumber extends Component {
    constructor() {
        super();
        this.state={

            number: 100 
        }
        this.myRef=React.createRef();
    }
    static getDerivedStateFromProps(props, state){
        console.log( '***** getDerivedStateFromProps *****' )
        console.log(props,state)
        console.log('---------------------------------------')
        return state
    }
    shouldComponentUpdate(nextProps, nextState) { // 组件Props或者state改变时触发，true：更新，false：不更新
        console.log('***** shouldComponentUpdate *****')
        console.log( 'this.props,nextState',this.props,nextState )
        console.log( 'nextProps,nextState',nextProps,nextState )
        console.log('---------------------------------------')
        return true
    }
    componentDidUpdate(prevProps,prevState) {
        console.log('***** componentDidUpdate *****')
        console.log( prevProps,prevState)
        console.log('---------------------------------------')
    }
    // getSnapshotBeforeUpdate(prevProps, prevState) { // 组件更新前触发
    //     console.log('***** getSnapshotBeforeUpdate *****')
    //     console.log( prevProps,prevState )
    // }
    componentDidMount() { // 挂载后
        console.log('***** componentDidMount *****')
        console.log('回调函数 获取ref',this.refDom)
        console.log('回调函数 获取ref',this.myRef.current)
        console.log('---------------------------------------')
    }   
    render() {
        console.log('***** render *****')
        return (
            <div>
                
                <p ref={(dom) => {this.refDom = dom}}>{this.props.number}</p>
                <p ref={this.myRef}>this is ref dom</p>
            </div>

        )
    }
    
}