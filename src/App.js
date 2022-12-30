import './App.css';
import { Component } from 'react';
import Name from './components/name'
import ProfilePic from './components/profile-pic'
import ShortDescription from './components/short-description'
import Contacts from './components/contacts'
import Education from './components/education'
import Work from './components/work'
import Skills from './components/skills'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: [{name: "John Doe"}],
      image: "",
      short: [{intro: "I am a workaholic"}],
      contacts: [{type: "Phone", value: 123}],
      education: [{name: "Harvard", enrollment:"2019",
                   graduation: "2020", title: "MA in BA", descr: "I learned this, that"}],
      jobs: [{employer: "Starbucks", title: "Barista",
              descr: "I did this and that", start: "2020", end: "2021"}],
      skills: [{name: "Programming", descr: "Really proficient"}],

      edit: {
        editValue: undefined,
        stateToChange: undefined,
        indexToChange: undefined,
        keyToChange: undefined,
      }
    }
    //this.update = this.update.bind(this);
  }
  render() {
    return (
      <div className="App">
        <Name name={this.state.name}></Name>
        <ProfilePic url={this.state.image}></ProfilePic>
        <ShortDescription short={this.state.short}></ShortDescription>
        <Contacts contacts={this.state.contacts}></Contacts>
        <Education education={this.state.education}></Education>
        <Work jobs={this.state.jobs}></Work>
        <Skills skills={this.state.skills}></Skills>
      </div>
    );
  }
}

export default App;
