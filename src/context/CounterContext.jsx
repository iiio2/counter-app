import { createContext, Component } from 'react';

export const CounterContext = createContext();

class CounterContextProvider extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    if (counters[index].value < 0) return null;
    this.setState({ counters });
  };

  reset = () => {
    const counters = [...this.state.counters];
    const reset = counters.map((counter) => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters: reset });
  };

  handleDelete = (counter) => {
    const counters = this.state.counters.filter((c) => c.id !== counter.id);

    this.setState({ counters });
  };

  totalCounters = () => {
    const counters = this.state.counters.filter((c) => c.value > 0).length;
    return counters;
  };

  render() {
    return (
      <CounterContext.Provider
        value={{
          ...this.state,
          inc: this.handleIncrement,
          reset: this.reset,
          dec: this.handleDecrement,
          onDelete: this.handleDelete,
          total: this.totalCounters,
        }}
      >
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}

export default CounterContextProvider;
