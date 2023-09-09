import { Component } from "react";
import PropTypes from "prop-types";

export class ContactItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };

  render() {
    return (
      <li>
        {this.props.name} : {this.props.number}
        <button
          type="button"
          onClick={() => this.props.onDeleteContact(this.props.id)}
        >
          Delete
        </button>
      </li>
    );
  }
}
