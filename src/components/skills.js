import { Component } from "react";
import DataContainer from "./data-container";

class Skills extends Component {
  render() {
    return (
      <DataContainer name="skills" data={this.props.data} editTools={this.props.editTools}/>
    );
  }
}
export default Skills
