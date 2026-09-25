import "./RatingItem.scss";

// Custom Components

// Built-in Components

// Context

// Data

const RatingItem = ({
  name,
  value,
  selectedValue,
  onChange,
  emojiIcon,
  color,
}) => {
  const EmojiIcon = emojiIcon;

  return (
    <div>
      <label>
        <input
          type="radio"
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
          checked={selectedValue === value}
        />

        <span className={`emoji-container ${color}`}>
          <EmojiIcon
            className="emoji"
            style={{ color: color === "yellow" ? "#F6BE00" : color }}
          />
          <p>{value}</p>
        </span>
      </label>
    </div>
  );
};

export default RatingItem;
