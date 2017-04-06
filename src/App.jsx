import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import todos from './todos';

import Form from './components/Form';
import Header from './components/Header';
import Todo from './components/Todo';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    axios.get('/api/todos')
      .then(response => response.data)
      .then(todos => this.setState({ todos }))
      .catch(this.handleError);
  }

  handleStatusChange(id) {
    axios.patch(`/api/todos/${id}`)
      .then((response) => {
        const todosWithUpdatedStatus = this.state.todos.map((todo) => {
          if (todo.id === id) todo = response.data;
          return todo;
        });

        this.setState({ todos: todosWithUpdatedStatus });
      })
      .catch(this.handleError);
  }

  handleCreate(title) {
    axios.post('/api/todos', { title })
      .then(response => response.data)
      .then((todo) => {
        const todosWithNew = [...this.state.todos, todo];
        this.setState({ todos: todosWithNew });
      })
      .catch(this.handleError);
  }

  handleUpdate(id, title) {
    axios.put(`/api/todos/${id}`, { title })
      .then((response) => {
        const todosWithUpdatedTitle = this.state.todos.map((todo) => {
          if (todo.id === id) todo = response.data;
          return todo;
        });

        this.setState({ todos: todosWithUpdatedTitle });
      })
      .catch(this.handleError);
  }

  handleDelete(id) {
    axios.delete(`/api/todos/${id}`)
      .then(() => {
        const todosWithoutRemoved = this.state.todos.filter(todo => todo.id !== id);
        this.setState({ todos: todosWithoutRemoved });
      })
      .catch(this.handleError);
  }

  handleError(error) {
    console.error(error);
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
              onEdit={this.handleUpdate}
              onStatusChange={this.handleStatusChange}
              title={todo.title}
            />)
          }
        </section>

        <Form onAdd={this.handleCreate} />
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
