import React, { Component } from 'react';
import CounterHooks from '../component/hooks/counter-hooks'

export default class Hooks extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                Hooks
                <CounterHooks></CounterHooks>
            </div>
        )
    }
}