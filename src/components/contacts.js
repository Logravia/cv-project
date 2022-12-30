import { Component } from "react";
import createDataContainer from "./helper.js"

class Contacts extends Component {
  render() {
    return (
      createDataContainer(this.props.contacts, "contacts")
    );
  }
}
export default Contacts
