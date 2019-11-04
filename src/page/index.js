import React, { Component } from 'react';
import '../style/home.scss'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            pages: [
                
                {
                    name: '生命周期页面',
                    path: 'lifecycle'
                },{
                    name: 'redux页面',
                    path: 'redux'
                },{
                    name: 'hooks页面',
                    path: 'hooks'
                },{
                    name: 'context页面',
                    path: 'context'
                },{
                    name: 'canvas页面',
                    path: 'panel'
                }
            ]
        }
    }

    pagesClick(item) {
        console.log(this.props)
        this.props.history.push(`/${item.path}`)
    
    }   

    render() {
        const { pages } = this.state
        return (
            <div>
                <ul>
                    {pages.map((item,index)=>{
                        return (
                            <li onClick={()=>{this.pagesClick(item)}} key={index}>{item.name}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}