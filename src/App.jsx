import React from 'react';
import ReactDOM from 'react-dom';

import todos from './todos';

import Form from './components/Form';
import Header from './components/Header';
import Todo from './components/Todo';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: this.props.initialData,
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  nextId() {
    const biggestId = (a, b) => (a.id < b.id) ? 1 : -1;
    let highestId = Array.from(this.state.todos).sort(biggestId)[0].id;
    highestId += 1;
    return highestId;
  }

  handleStatusChange(id) {
    const todosWithUpdatedStatus = this.state.todos.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });

    this.setState({ todos: todosWithUpdatedStatus });
  }

  handleDelete(id) {
    const todosWithoutRemoved = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: todosWithoutRemoved });
  }

  handleAdd(title) {
    const todo = {
      completed: false,
      id: this.nextId(),
      title,
    };
    const todosWithNew = [...this.state.todos, todo];

    this.setState({ todos: todosWithNew });
  }

  handleEdit(id, title) {
    const todosWithUpdatedTitle = this.state.todos.map((todo) => {
      if (todo.id === id) todo.title = title;
      return todo;
    });

    this.setState({ todos: todosWithUpdatedTitle });
  }

  render() {
    return (
      <main>
        <Header
          title={this.props.title}
          todos={this.state.todos}
        />

        <section className="todo-list">
          {this.state.todos.map(todo =>
            <Todo
              completed={todo.completed}
              id={todo.id}
              key={todo.id}
              onDelete={this.handleDelete}
              onEdit={this.handleEdit}
              onStatusChange={this.handleStatusChange}
              title={todo.title}
            />)
          }
        </section>

        <Form onAdd={this.handleAdd} />
      </main>
    );
  }
}

App.propTypes = {
  initialData: React.PropTypes.arrayOf(React.PropTypes.shape({
    completed: React.PropTypes.bool.isRequired,
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
  })).isRequired,
  title: React.PropTypes.string,
};

App.defaultProps = {
  title: 'React Todo',
};

ReactDOM.render(<App initialData={todos} />, document.getElementById('root'));
