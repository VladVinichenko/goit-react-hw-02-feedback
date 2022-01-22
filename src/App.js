import Section from "./components/Section/Section";
import Feedback from "./components/Feedback/Feedback";
import Statistics from "./components/Statistics/Statistics";
import React, { Component } from "react";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  updateFeedback = evt => {
    // this.setState(prevState => )
    console.log(evt.target.name);
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Section>
          <Feedback state={this.state} click={this.updateFeedback} />
          <Statistics state={this.state} />
        </Section>
      </div>
    );

  }
}
export default App