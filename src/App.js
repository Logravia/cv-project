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
                   graduation: "2bucks", title: "Barista",
               descr: "I did this and that", start: "2020", end: "2021"}],
       skills: [{name: "Programming", descr: "Really proficient"}],
      edit: {
        value: undefined,
        state: "name",
        index: 0,
        key: "name",
      }
    }
    //this.update = this.update.bind(this);
  }
  render() {
    return (
      <div className="App">
        <Name name={this.state.name} edit={this.state.edit}></Name>
        <ProfilePic url={this.state.image} edit={this.state.edit}></ProfilePic>
        <ShortDescription short={this.state.short} edit={this.state.edit}></ShortDescription>
        <Contacts contacts={this.state.contacts} edit={this.state.edit}></Contacts>
        <Education education={this.state.education} edit={this.state.edit}></Education>
        <Work jobs={this.state.jobs} edit={this.state.edit}></Work>
        <Skills skills={this.state.skills} edit={this.state.edit}></Skills>
      </div>
    );
  }
}

export default App;
