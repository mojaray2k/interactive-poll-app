import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddPoll } from "../actions/polls";

class AddPoll extends Component {
  state = {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
  };

  handleInputChange = (e) => {
    const { value, name } = e.target;

    this.setState(() => ({
      [name]: value,
    }));
  };

  isDisabled = () => {
    const { question, a, b, c, d } = this.state;

    return question === "" || a === "" || b === "" || c === "" || d === "";
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // redirect to "/"
    this.props.history.push("/");

    // console.log("Add poll", this.state);
    this.props.dispatch(handleAddPoll(this.state));
  };

  render() {
    const { question, a, b, c, d } = this.state;
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <h3 style={{ marginBottom: 5 }}>What is your question?</h3>
        <input
          type="text"
          name="question"
          value={question}
          onChange={this.handleInputChange}
          className="input"
        />

        <h3>What are the options</h3>
        <label htmlFor="a" className="label">
          A.
        </label>
        <input
          type="text"
          name="a"
          value={a}
          id="a"
          onChange={this.handleInputChange}
          className="input"
        />
        <label htmlFor="b" className="label">
          B.
        </label>
        <input
          type="text"
          name="b"
          value={b}
          id="b"
          onChange={this.handleInputChange}
          className="input"
        />
        <label htmlFor="c" className="label">
          C.
        </label>
        <input
          type="text"
          name="c"
          value={c}
          id="c"
          onChange={this.handleInputChange}
          className="input"
        />
        <label htmlFor="d" className="label">
          D.
        </label>
        <input
          type="text"
          name="d"
          value={d}
          id="d"
          onChange={this.handleInputChange}
          className="input"
        />
        <button className="btn" type="submit" disabled={this.isDisabled()}>
          Submit
        </button>
      </form>
    );
  }
}

export default connect()(AddPoll);
