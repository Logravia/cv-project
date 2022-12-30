import { Component } from "react";

class ProfilePic extends Component {
  render() {
    return (
      <div id="pic-container">
        <img alt="profile-pic" src={this.props.url}/>
      </div>
    );
  }
}
export default ProfilePic
