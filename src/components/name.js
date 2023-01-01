import { Component } from "react";
import DataContainer from "./data-container"

class Name extends Component {
  render() {
    return (
      <DataContainer name="name" data={this.props.data} editTools={this.props.editTools}/>
    )
  }
}
export default Name
