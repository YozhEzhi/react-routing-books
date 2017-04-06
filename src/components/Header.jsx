import React from 'react';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

function Header(props) {
  return (
    <header>
      <Stats todos={props.todos} />
      <h1>{props.title}</h1>
      <Stopwatch />
    </header>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  todos: React.PropTypes.arrayOf(React.PropTypes.shape({
    completed: React.PropTypes.bool.isRequired,
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
  })).isRequired,
};

export default Header;
