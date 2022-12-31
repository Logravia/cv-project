import { Component } from "react";
import createDataContainer from "./helper.js"

class ShortDescription extends Component {
  render() {
    return (
      createDataContainer(this.props.short, "short", this.props.edit)
    );
  }
}
export default ShortDescription
