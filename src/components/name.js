import { Component } from "react";
import createDataContainer from "./helper.js"

class Name extends Component {
  render() {
    return (
      createDataContainer(this.props.name, "name", this.props.edit)
    )
  }
}
export default Name
