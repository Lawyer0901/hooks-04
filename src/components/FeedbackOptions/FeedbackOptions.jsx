import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    // console.log(option);
    return (
      <Button key={option} name={option} onClick={onLeaveFeedback}>
        {option}
      </Button>
    );
  });
};

export default FeedbackOptions;
