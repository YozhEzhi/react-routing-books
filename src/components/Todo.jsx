import React from 'react';

import Button from './Button';
import Checkbox from './Checkbox';

function Todo(props) {
  return (
    <div className={`todo ${props.completed ? 'completed' : ''}`}>
      <Checkbox checked={props.completed} />
      <span className="todo-title">{props.title}</span>
      <Button className={'delete icon'} icon={'delete'} />
    </div>
  );
}

Todo.propTypes = {
  title: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
};

export default Todo;
