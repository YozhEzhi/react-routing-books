import React from 'react';

function Stats(props) {
  const totalCount = props.todos.length;
  const completedCount = props.todos.filter(todo => todo.completed).length;
  const uncompletedCount = totalCount - completedCount;

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Всего задач:</td>
          <td>{totalCount}</td>
        </tr>
        <tr>
          <td>Выполнено:</td>
          <td>{completedCount}</td>
        </tr>
        <tr>
          <td>Осталось:</td>
          <td>{uncompletedCount}</td>
        </tr>
      </tbody>
    </table>
  );
}

Stats.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.shape({
    completed: React.PropTypes.bool.isRequired,
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
  })).isRequired,
};

export default Stats;
