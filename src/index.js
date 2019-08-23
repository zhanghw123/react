import React, { Component } from 'react';
import { render } from 'react-dom';

export default class App extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
      console.log(this.props)
      // this.props.history.listen(res=>{
      //   console.log(res)
      // })
    }
    render() {
        return (
            <div>
              zhanghw
            </div>
        )
    }
}

render(<App/>,document.getElementById('root'))