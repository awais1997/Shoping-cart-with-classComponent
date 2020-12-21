import { Component } from "react";
import "./App.css";
import Counters from "./Counters";
import Nav from "./Nav";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        name: "Leather-jacket",
        value: 0,
      },
      {
        id: 2,
        name: "black-pant",
        value: 0,
      },
      {
        id: 3,
        name: "nike-shoes",
        value: 0,
      },
    ],
  };
  handleDelete = (id) => {
    const counter = this.state.counters.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      counters: counter,
    });
  };

  handleIncrement = (index) => {
    // const counters = [...this.state.counters];
    // const index = counters.indexOf(counter);
    // counters[index] = { ...counter };
    // counters[index].value++;
    // this.setState({ counters: counters });

    // this.state.counters[index].value++;
    // this.setState(this.state.counters);

    //this.setState({ counters: this.state.counters[index].value++ });

    const Updatedcounter = [...this.state.counters];
    Updatedcounter[index].value++;
    this.setState({ counters: Updatedcounter });
  };

  handleReset = () => {
    const counters = this.state.counters.map((item) => {
      item.value = 0;
      return item;
    });
    this.setState({
      counters,
    });
  };
  render() {
    const { counters } = this.state;
    return (
      <div className="app">
        <Nav
          totalCounters={
            counters &&
            counters.length > 0 &&
            counters.filter((i) => i.value > 0)
          }
        />
        <Counters
          counters={counters}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}

export default App;
