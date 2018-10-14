import React from 'react';

import Counter from '../Counter';
import IncrementButton from '../IncrementButton';
import DecrementButton from '../DecrementButton';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);

    this.state = {
      counter: props.counter,
    };
  }

  incrementCounter() {
    this.setState((state) => {
      return {
        counter: state.counter + 1,
      };
    });
  }

  decrementCounter() {
    this.setState((state) => {
      return {
        counter: state.counter - 1,
      };
    });
  }

  render() {
    const {counter} = this.state;
    return (
      <>
        <Counter value={counter} />
        <IncrementButton onClick={this.incrementCounter} />
        <DecrementButton onClick={this.decrementCounter} />
      </>
    );
  }
}
