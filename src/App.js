import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "John Doe",
      image: "",
      short: "I am a hardworking work-a-holic",
      contactInfo: [{address: "Helmdeep"}, {phone: 123},
                    {email: "email@mail.com"}, {online: "Linkedin: ABC"}],
      education: [{institution: "Harvard", enrollment:"2019",
                   graduation: "2020", title: "MA in BA"}],
      work: [{workplace: "Starbucks", responsibilites: "Coffee Making"}],
      skills: [{name: "Programming", description: "Really proficient"}]
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
