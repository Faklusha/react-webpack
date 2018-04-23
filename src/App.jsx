import React, {Component} from 'react';
import ReactComponent from './components/Component';
import ReactPureComponent from './components/PureComponent';
import ReactFunctionalComponent from './components/FunctionalComponent';
import './App.css';

export default class App extends Component {
    render() {
        const title = 'Hello World';
        const className = "title";
        const children = (
          <span>
            {title}
          </span>
        );

        return (
            <div className="App">
                <ReactComponent className={className}>
                  {children}
                </ReactComponent>
                <ReactPureComponent className={className}>
                  {children}
                </ReactPureComponent>
                <ReactFunctionalComponent className={className}>
                  {children}
                </ReactFunctionalComponent >
                {
                  React.createElement('div', {className: className}, React.createElement('span', {}, title))
                }
            </div>
        );
    }
}
