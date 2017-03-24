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
    let highestId = Array.from(this.state.todos).sort((a, b) => a.id < b.id ? 1 : -1)[0].id;
    highestId += 1;
    return highestId;
  }

  handleStatusChange(id) {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });

    this.setState({ todos });
  }

  handleDelete(id) {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  }

  handleAdd(title) {
    const todo = {
      id: this.nextId(),
      title,
      completed: false,
    };
    const todos = [...this.state.todos, todo];

    this.setState({ todos });
  }

  handleEdit(id, title) {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === id) todo.title = title;
      return todo;
    });

    this.setState({ todos });
  }

  render() {
    return (
      <main>
        <Header title={this.props.title} todos={this.state.todos} />

        <section className="todo-list">
          {this.state.todos.map(todo =>
            <Todo
              id={todo.id}
              key={todo.id}
              title={todo.title}
              completed={todo.completed}
              onStatusChange={this.handleStatusChange}
              onDelete={this.handleDelete}
              onEdit={this.handleEdit}
            />)
          }
        </section>

        <Form onAdd={this.handleAdd} />
      </main>
    );
  }
}

App.propTypes = {
  title: React.PropTypes.string,
  initialData: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
  })).isRequired,
};

App.defaultProps = {
  title: 'React Todo',
};

ReactDOM.render(<App initialData={todos} />, document.getElementById('root'));
