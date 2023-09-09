import PropTypes from "prop-types";
import { Component } from "react";

export class ContactForm extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  };
  constructor() {
    super();
    this.state = {
      name: "",
      number: "",
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    this.props.onFormSubmit(this.state);
    form.reset();
  }

  render() {
    return (
      <form on onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
        />
        <br />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
        />
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
