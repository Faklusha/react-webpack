import React, { PureComponent } from 'react';

export default class ReactPureComponent extends PureComponent {
    render() {
        const { children, className } = this.props;
        return (
            <div className={className}>
                {children}
            </div>
        );
    }
}
