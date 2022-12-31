import { Component } from "react";
import createDataContainer from "./helper.js"

class Work extends Component {
  render() {
    return (
      createDataContainer(this.props.jobs, "jobs", this.props.edit)
    )
  }
}
export default Work
