import { Component } from "react";
import DataContainer from "./data-container";

class Contacts extends Component {
  render() {
    return (
      <DataContainer name="contacts" data={this.props.data} editTools={this.props.editTools}/>
    );
  }
}
export default Contacts
