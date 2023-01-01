import { Component } from "react";
import DataContainer from "./data-container";

class Description extends Component {
  render() {
    return (
      <DataContainer name="description" data={this.props.data} editTools={this.props.editTools}/>
    );
  }
}
export default Description
