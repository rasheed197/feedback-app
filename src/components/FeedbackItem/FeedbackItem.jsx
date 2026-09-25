import "./FeedbackItem.scss";

// Custom Components
import FeedbackActionsMenu from "../FeedbackActionsMenu/FeedbackActionsMenu";

// Built-in Components
import { FaCalendar, FaEllipsisVertical } from "react-icons/fa6";
import { useState, useContext } from "react";

// Context
import FeedbackContext from "../../context/FeedbackContext";

const FeedbackItem = ({ feedback }) => {
  const mongoDate = feedback.createdAt;

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(mongoDate));

  const formattedTime = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: '2-digit',
  hour12: true
}).format(new Date(mongoDate));

  const { showDetails, getRatingIconAndColor } = useContext(FeedbackContext);

  const [isHovered, setIsHovered] = useState(false);
  const { RatingIcon, iconColor } = getRatingIconAndColor(feedback);

  const handleMenuClick = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="feedback">
      <div className={`emoji-icon-container ${iconColor}`}>
        <RatingIcon className={`emoji-icon ${iconColor}`} />
      </div>
      <div className="review">
        <div className="review-data">
          <h4 className="rating-text">{feedback.feedbackRating}</h4>
          <p className="review-text" onClick={() => showDetails(feedback)}>
            {feedback.feedbackText.slice(0, 140)}
            {feedback.feedbackText.length > 140 && "..."}
          </p>
          <div className="date-container">
            <FaCalendar />
            <span className="date">
              {formattedDate} • {formattedTime}
            </span>
          </div>
          {feedback.edited && <p className="edited">edited</p>}
        </div>
        <div
          className="feedback-menu-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleMenuClick}
        >
          <span className="feedback-menu">
            <FaEllipsisVertical />
          </span>
          <FeedbackActionsMenu feedback={feedback} isHovered={isHovered} />
        </div>
      </div>
    </div>
  );
};

export default FeedbackItem;
