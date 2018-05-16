import React from 'react';

export default class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
    }
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    this.setState({
      counter: this.state.counter -1,
    })
  }

  handleIncrement() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  render(){
    return(
      <div>
        <h1>
          {this.state.counter}
        </h1>
        <button onClick={this.handleDecrement}>
          -
        </button>
        <button onClick={this.handleIncrement}>
          +
        </button>
      </div>
    )
  }
}

const Buttons = ({onDecrement, onIncrement}) => (
  <div>
    <button onClick={onDecrement}>
      -
    </button>
    <button onClick={onIncrement}>
      +
    </button>
  </div>
)

const Display = ({counter}) => (
  <h1>
    {counter}
  </h1>
)
