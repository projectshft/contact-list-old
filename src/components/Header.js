/************************
 * A Header for layout/design purposes. A functional component. No state.
 *************************/
import React from 'react';

const Header = props => {
  return (
    <div>
      <h1>{props.psTitle}</h1>
    </div>
  );
};

export default Header;
