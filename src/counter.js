import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: 0,
      count: 0,
    };
  }
  stepsPlus = () => {
    this.setState({ steps: this.state.steps + 1 });
  };
  stepsMinus = () => {
    this.setState({ steps: this.state.steps - 1 });
  };

  countsplus = () => {
    this.setState({ count: this.state.count + this.state.steps });
  };
  countsMinus = () => {
    this.setState({ count: this.state.count - this.state.steps });
  };

  render() {
    let dateval = new Date();

    dateval.setDate(dateval.getDate() + this.state.count);

    let currentDay = dateval.toLocaleDateString(undefined, {
      weekday: "long",
    });
    let curentMonth = dateval.toLocaleDateString(undefined, {
      month: "long",
    });
    let curentDate = dateval.toLocaleDateString(undefined, {
      day: "numeric",
    });
    let curentYear = dateval.toLocaleDateString(undefined, {
      year: "numeric",
    });

    let textCount = Math.abs(this.state.count);

    return (
      <div className="counter-section">
        <h4>Date Counter in Class Component</h4>
        <div className="steps">
          <button onClick={this.stepsMinus}>-</button>
          <h4>
            Steps: <span>{this.state.steps}</span>
          </h4>
          <button onClick={this.stepsPlus}>+</button>
        </div>
        <div className="counts">
          <button onClick={this.countsMinus}>-</button>
          <h4>
            Counts: <span>{this.state.count}</span>
          </h4>
          <button onClick={this.countsplus}>+</button>
        </div>
        <div className="date-format">
          <p>
            {this.state.count >= 0
              ? this.state.count === 0
                ? `Today is`
                : `${this.state.count} Days from Today is`
              : `${textCount} Days ago was`}{" "}
          </p>
          <b>{currentDay}</b>
          <b>{curentMonth}</b>
          <b> {curentDate}</b>
          <b>{curentYear}</b>
        </div>
      </div>
    );
  }
}

export default Counter;
