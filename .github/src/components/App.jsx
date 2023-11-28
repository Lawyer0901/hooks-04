import { Component } from 'react';
// import MainTitle from './MainTitle/MainTitle';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import NotificationMessage from './NotificationMessage/NotificationMessage';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    // console.log(event.target);
    const { name } = event.target;
    this.setState(prevState => {
      // console.log(prevState);
      return { [name]: prevState[name] + 1 };
    });
  };
  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((previousValue, number) => {
      // console.log(number);
      return previousValue + number;
    }, 0);
    return total;
  };
  countPositiveFeedbackPercentage() {
    const { good, bad } = this.state;
    const total = this.countTotalFeedback();
    if (!total) {
      return;
    }
    const positive = (good / total) * 100;
    const negative = (bad / total) * 100;
    const result = (positive - negative).toFixed(2);
    return Number(result);
  }

  render() {
    const option = Object.keys(this.state);
    const isShown = Object.values(this.state).reduce(
      (previousValue, number) => {
        return previousValue + number;
      },
      0
    );

    return (
      <div>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={option}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title="Statistics">
          {isShown ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <NotificationMessage message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
