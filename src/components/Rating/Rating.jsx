import './Rating.scss'

// Custom Components
import RatingItem from '../RatingItem/RatingItem';

// Built-in Components

// Context

// Data
import { emojis } from '../../data'


const Rating = ({ name, onChange, selectedValue }) => {

  return (
    <>
      <h4>How was your experience?</h4>
      <div className="ratings-container">
        {emojis.map((emoji, index) => {
          return (
            <RatingItem
              key={index}
              emojiIcon={emoji.icon}
              value={emoji.value}
              color={emoji.color}
              name={name}
              onChange={onChange}
              selectedValue={selectedValue}
            />
          );
        })}
      </div>
    </>
  );
};

export default Rating;

