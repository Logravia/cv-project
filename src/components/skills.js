import { Component } from "react";
import createDataContainer from "./helper.js"

class Skills extends Component {
  render() {
    return (
      createDataContainer(this.props.skills, "skills")
    );
  }
}
export default Skills