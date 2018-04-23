import React, { Component } from 'react';

export default class ReactComponent extends Component {
    render() {
        const { children, className } = this.props;
        return (
           <div className={className}>
               {children}
           </div>
        );
    }
}
