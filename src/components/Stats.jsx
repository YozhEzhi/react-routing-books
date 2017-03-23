import React from 'react';

function Stats(props) {
  const totalCount = props.todos.length;
  const completedCount = props.todos.filter(todo => todo.completed).length;
  const uncompletedCount = totalCount - completedCount;

  return (
    <table>
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
  todos: React.PropTypes.array.isRequired,
};

export default Stats;
