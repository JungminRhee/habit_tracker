import React, { PureComponent } from "react";

class Habit extends PureComponent {
  componentDidMount() {
    console.log(`habit: ${this.props.habit.name} mounted`);
  }
  componentWillUnmount() {
    console.log(`habit: ${this.props.habit.name} umounted`);
  }

  handleIncreament = () => {
    this.props.onIncrement(this.props.habit);
  };
  handleDecreament = () => {
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncreament}
        >
          <i className="fas fa-plus-square" />
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecreament}
        >
          <i className="fas fa-minus-square" />
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash" />
        </button>
      </li>
    );
  }
}

export default Habit;
