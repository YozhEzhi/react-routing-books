import React from 'react';

import Button from './Button';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const title = this.state.title;

    if (title) {
      this.props.onAdd(title);
      this.setState({ title: '' });
    }
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          placeholder="Что нужно сделать?"
          type="text"
          value={this.state.title}
        />
        <Button type="submit">Добавить</Button>
      </form>
    );
  }
}

Form.propTypes = {
  onAdd: React.PropTypes.func.isRequired,
};

export default Form;
