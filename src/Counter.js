import React, { Component } from "react";

export default class Counter extends Component {
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  // state = {
  //   value: this.props.counter.value,
  //   //tags: [1, 2, 3, 4, 5],
  // };

  counterValue = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

  // handleIncrement = () => {
  //   this.setState({
  //     value: this.state.value + 1,
  //   });
  // };

  //   handleIncrement() {
  //     console.log(this.state.value);
  //   }

  //   tagsList = () => {
  //     console.log("hello");
  //     const { tags } = this.state;
  //     return tags.length > 0 ? (
  //       <ul>
  //         {tags.map((tag) => {
  //           return <li key={tag}>{tag}</li>;
  //         })}
  //       </ul>
  //     ) : (
  //       <h4>No Tag</h4>
  //     );
  //   };
  render() {
    const { onDelete, onIncrement, counter, index } = this.props;

    return (
      <tr>
        <td>
          <span className="badge badge-primary m-2">{counter.name}</span>
        </td>
        <td>
          {counter.value === 0 ? (
            <span className="badge badge-warning m-2">
              {" "}
              {this.counterValue()}
            </span>
          ) : (
            <span className="badge badge-primary m-2">
              {this.counterValue()}
            </span>
          )}
        </td>
        <td>
          <button
            className="btn btn-primary m-2"
            onClick={() => onIncrement(index)}
          >
            Increment
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger m-2"
            onClick={() => onDelete(counter.id)}
          >
            Delete
          </button>
        </td>
      </tr>

      // {/* {this.tagsList()} */}
    );
  }
}
