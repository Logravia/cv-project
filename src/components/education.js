import { Component } from "react";
import DataContainer from "./data-container";

class Education extends Component {
  render() {
    return (
      <DataContainer name="education" data={this.props.data} editTools={this.props.editTools}/>
    );
  }
}
export default Education
