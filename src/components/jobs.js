import { Component } from "react";
import DataContainer from "./data-container";

class Jobs extends Component {
  render() {
    return (
      <DataContainer name="jobs" data={this.props.data} editTools={this.props.editTools}/>
    );
  }
}
export default Jobs
