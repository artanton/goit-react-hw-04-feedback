import 'modern-normalize';
import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Statistics } from './Statistic/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateFeedback = feedbackType => {
    switch (feedbackType) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        throw new Error(`Unknown type - ${feedbackType}`);
    }
  };

  const feedbackOptions = [
    { name: 'good', value: good },
    { name: 'neutral', value: neutral },
    { name: 'bad', value: bad },
  ];

  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage =
    countTotalFeedback > 0 ? Math.round((good / countTotalFeedback) * 100) : 0;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Section title=" Please leave feadback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={updateFeedback}
        />
      </Section>

      <Section title=" Statistics">
        <Statistics
          value={{ good, neutral, bad }}
          total={countTotalFeedback}
          positiveFeadback={countPositiveFeedbackPercentage}
        />
        <GlobalStyle />
      </Section>
    </div>
  );
};
