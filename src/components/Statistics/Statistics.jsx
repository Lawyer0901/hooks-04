import { List, Item } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <List>
        <Item>
          <p>Good: {good}</p>
        </Item>
        <Item>
          <p>Neutral:{neutral}</p>
        </Item>
        <Item>
          <p>Bad: {bad}</p>
        </Item>
        <Item>
          <p>Total: {total}</p>
        </Item>
        <Item>
          <p>Positive feedback: {positivePercentage} %</p>
        </Item>
      </List>
    </>
  );
};

export default Statistics;
