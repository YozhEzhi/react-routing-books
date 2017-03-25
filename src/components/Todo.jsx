import React from 'react';

import Button from './Button';
import Checkbox from './Checkbox';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onEdit(this.props.id, this.refs.title.value);
    this.setState({ editing: false });
  }

  renderDisplay() {
    return (
      <div className={`todo ${this.props.completed ? 'completed' : ''}`}>
        <Checkbox
          checked={this.props.completed}
          onChange={() => this.props.onStatusChange(this.props.id)}
        />
        <span className="todo-title">{this.props.title}</span>
        <Button
          className="edit icon"
          icon="edit"
          onClick={() => this.setState({ editing: true })}
        />
        <Button
          className="delete icon"
          icon="delete"
          onClick={() => this.props.onDelete(this.props.id)}
        />
      </div>
    );
  }

  renderForm() {
    return (
      <form className="todo-edit-form" onSubmit={this.handleSubmit}>
        <input type="text" ref="title" defaultValue={this.props.title} />
        <Button className="save icon" icon="save" type="submit" />
      </form>
    );
  }

  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay();
  }
}

Todo.propTypes = {
  completed: React.PropTypes.bool.isRequired,
  id: React.PropTypes.number.isRequired,
  onDelete: React.PropTypes.func.isRequired,
  onEdit: React.PropTypes.func.isRequired,
  onStatusChange: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default Todo;
