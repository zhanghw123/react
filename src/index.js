import React, { Component } from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
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
              <Provider store={store}>
                <BrowserRouter>
                  {renderRoutes(routes)}
                </BrowserRouter>
              </Provider>
            </div>
        )
    }
}

render(<App/>,document.getElementById('root'))