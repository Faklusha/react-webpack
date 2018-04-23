import React from 'react';

const ReactFunctionalComponent = ({children, className}) => (
    <div className={className}>
      {children}
    </div>
);
export default ReactFunctionalComponent;