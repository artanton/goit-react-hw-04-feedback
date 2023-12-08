import { OptionList } from './FeedbackOptionsStyled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionList>
    {options.map(( option ) => (
      <li key={option}>
        <button value={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      </li>
    ))}
  </OptionList>
);

