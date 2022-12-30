import { Component } from "react";
import createDataContainer from "./helper.js"

class ShortDescription extends Component {
  render() {
    return (
      createDataContainer(this.props.short, "short")
    );
  }
}
export default ShortDescription
