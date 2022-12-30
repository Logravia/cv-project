import { Component } from "react";
import createDataContainer from "./helper.js"

class Name extends Component {
  render() {
    return (
      createDataContainer(this.props.name, "name")
    )
  }
}
export default Name
