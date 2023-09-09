import { Component } from "react";
import PropTypes from "prop-types";

export class Filter extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
  };

  render() {
    return (
      <>
        <label>Find contacts by name</label>
        <br />
        <input
          type="text"
          name="filter"
          value={this.props.value}
          onChange={this.props.onFilterChange}
          placeholder="Enter contact to search"
        ></input>
      </>
    );
  }
}
