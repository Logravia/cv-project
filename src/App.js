import './App.css';
import { Component } from 'react';

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

    this.addTo = this.addTo.bind(this);
    this.removeFrom = this.removeFrom.bind(this);
    this.update = this.update.bind(this);
  }

  addTo(prop, value) {
    let list = this.state[prop];
    this.setState({[prop]: list.concat(value)})
  }

  removeFrom(prop, thisIndex){
    let list = this.state[prop];
    list.splice(thisIndex, 1);
    this.setState({[prop]: list});
  }

  update(prop, value) {
    this.setState({[prop]: value});
  }

  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
      </div>
    );
  }
}

export default App;
