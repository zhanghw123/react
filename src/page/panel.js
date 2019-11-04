import React, { Component } from 'react';
import '../style/panel.scss'

export default class Panel extends Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <div className='canvas'>
                <div className='box'></div>
            </div>
        )
    }
}