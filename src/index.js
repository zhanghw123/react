import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import routes from './router/index.js';
export default class App extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
      //console.log(this.props)
      // this.props.history.listen(res=>{
      //   console.log(res)
      // })
    }
    render() {
        return (
            <div>
              <BrowserRouter>
                     {renderRoutes(routes)}
                </BrowserRouter>
            </div>
        )
    }
}

render(<App/>,document.getElementById('root'))