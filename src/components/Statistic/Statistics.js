import { Notification } from 'components/Notification';
import { StatList } from './StatisticsStyled';

export const Statistics = ({
  value: { good, neutral, bad },
  total,
  positiveFeadback,
}) => {
  return (
    <StatList>
      {total > 0 ? (
        <>
          <p>Good: {good} </p>
          <p>Neutral: {neutral} </p>
          <p>Bad: {bad} </p>
          <p>Total: {total} </p>
          <p>Positive Feadback: {positiveFeadback}% </p>
        </>
      ) : (
        <Notification message="There is no feedback"/>       )}
    </StatList>
  );
};
