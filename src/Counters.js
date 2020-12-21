import React, { Component } from "react";
import Counter from "./Counter";

export default class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
      <table className="table table-sm table-responsive">
        <thead>
          <tr>
            <th>Product name</th>
            <th>Quantity</th>
            <th>Increase</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {counters &&
            counters.length > 0 &&
            counters.map((counter, index) => {
              return (
                <Counter
                  key={counter.id}
                  index={index}
                  // value={counter.value}
                  // id={counter.id}
                  counter={counter}
                  onDelete={onDelete}
                  onIncrement={onIncrement}
                />
              );
            })}
          <button className="btn btn-primary m-2" onClick={onReset}>
            Reset Cart
          </button>
        </tbody>
      </table>
    );
  }
}
