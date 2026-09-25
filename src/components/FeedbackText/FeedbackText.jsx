import './FeedbackText.scss'

// Custom Components

// Built-in Components

// Context

// Data


const FeedbackText = ({ name, value, textCount, onChange }) => {

  return (
    <div className="feedback-text-container">
      <h4>Tell us more (optional)</h4>
      <textarea
        className="feedback-text"
        name={name}
        placeholder="Share your feedback..."
        maxLength={500}
        value={value}
        onChange={onChange}
      />
      <div id="charCount">{`${textCount}/500`}</div>
    </div>
  );
};

export default FeedbackText;
