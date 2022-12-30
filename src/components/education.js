import { Component } from "react";
import createDataContainer from "./helper.js"

class Education extends Component {
  render() {
    return (
      createDataContainer(this.props.education, "education")
    );
  }
}
export default Education
