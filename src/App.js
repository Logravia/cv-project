import { Component } from 'react';
import './App.css';

import Contacts from './components/contacts';
import Education from './components/education';
import Name from './components/name';
import ProfilePic from './components/profile-pic';
import Description from './components/description';
import Skills from './components/skills';
import Jobs from './components/jobs';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: [{name: "John Doe"}],
      imgUrl: "",
      description: [{intro: "I am a workaholic"}],
      contacts: [{type: "Phone", value: 123}],
      education: [{name: "Harvard", enrollment:"2019",
                   graduation: "2020", title: "MA in BA", descr: "I learned this, that"}],
      jobs: [{employer: "Starbucks", title: "Barista",
                   graduation: "2bucks",
               descr: "I did this and that", start: "2020", end: "2021"}],
       skills: [{name: "Programming", descr: "Really proficient"}],
      edit: {
        value: undefined,
        state: undefined,
        index: undefined,
        key:   undefined,
      }
    }
    this.noteEdit = this.noteEdit.bind(this);
    this.clearEdit = this.clearEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.elementToEdit = this.elementToEdit.bind(this);
    this.updateEditVal = this.updateEditVal.bind(this);

    this.editTools = {noteEdit: this.noteEdit,
                      updateEditVal: this.updateEditVal,
                      elementToEdit: this.elementToEdit}
  }

  noteEdit(e) {
    e.stopPropagation();
    let el = e.currentTarget;
    let value = el.textContent;
    let key = el.parentElement.dataset.key;
    let index = Number(el.parentElement.parentElement.dataset.index);
    let state = el.parentElement.parentElement.parentElement.dataset.state;

    this.setState({edit: {value, key, index, state}})
  }

  clearEdit() {
    this.setState({edit: {}});
  }

  saveEdit(e){
    if (!this.state.edit.state) { return }
    if (e.target.className === "editing")  {return}

    let {value, state, index, key} = this.state.edit;
    let currentList = this.state[state];
    currentList[index][key] = value
    this.setState({state: currentList})
    console.log("SAVED EDIT")
    this.clearEdit();
  }

  updateEditVal(e){
    e.stopPropagation();
    let val = e.target.value;
    let edit = this.state.edit
    edit.value = val
    this.setState({edit: edit});
  }

  elementToEdit(name, index, key) {
    let edit = this.state.edit;
    return (edit.key === key && edit.state === name && edit.index === index)
  }

  render() {
    return (
      <div className="App" onClick={this.saveEdit}>
        <div className="paper">
          <div className="intro">
            <Name data={this.state.name} editTools={this.editTools} />
            <Description data={this.state.description} editTools={this.editTools} />
          </div>

          <aside>
            <ProfilePic url={this.state.imgUrl} />
            <Contacts data={this.state.contacts} editTools={this.editTools} />
          </aside>

          <Education data={this.state.education} editTools={this.editTools} />
          <Jobs data={this.state.jobs} editTools={this.editTools} />
          <Skills data={this.state.skills} editTools={this.editTools} />
        </div>
      </div>
    );
  }
}

export default App;
