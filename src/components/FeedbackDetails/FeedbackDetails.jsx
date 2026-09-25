import "./FeedbackDetails.scss";

// Custom Components
import IconButton from "../IconButton/IconButton";

// Built-in Components
import {
  FaXmark,
  FaCircle,
  FaRegPenToSquare,
  FaTrashCan,
} from "react-icons/fa6";
import { useContext } from "react";

// Context
import FeedbackContext from "../../context/FeedbackContext";

// Data

const FeedbackDetails = () => {
  const {
    showFeedbackDetails,
    setShowFeedbackDetails,
    activeFeedback,
    showEditForm,
    deleteFeedback,
    getRatingIconAndColor,
  } = useContext(FeedbackContext);

  const closeDetails = () => {
    setShowFeedbackDetails(false);
  };

  const { RatingIcon, iconColor } = getRatingIconAndColor(activeFeedback);

  let formattedDate;
  let formattedTime;

  if (activeFeedback.createdAt) {
    const mongoDate = activeFeedback.createdAt;

    formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(mongoDate));

    formattedTime = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(new Date(mongoDate));
  }

  return (
    <div
      className={`feedback-details-container ${showFeedbackDetails && "show"}`}
    >
      <div className="feedback-details">
        <div className="heading">
          <h2 className="title">Feedback Details</h2>
          <span className="close" onClick={closeDetails}>
            <FaXmark />
          </span>
        </div>

        <div className="tags">
          <span className={`rating ${iconColor}`}>
            <RatingIcon className="emoji" />
            <span className="text">{activeFeedback.feedbackRating}</span>
          </span>

          {activeFeedback.edited && (
            <span className="rating edited">Edited</span>
          )}
        </div>

        <div className="feedback-content feedback-details-section">
          <h3>Your Feedback</h3>
          <p className="feedback-text">{activeFeedback.feedbackText}</p>
        </div>

        <div className="feedback-status feedback-details-section">
          <h3>Status</h3>
          <div className="submitted-date">
            <FaCircle className="bullet" />
            <div>
              <p>Submitted</p>
              <span className="date">
                {activeFeedback.createdAt && formattedDate} • {activeFeedback.createdAt && formattedTime}
              </span>
            </div>
          </div>
        </div>

        <div className="feedback-actions feedback-details-section">
          <h3>Actions</h3>
          <div className="action-button-container">
            <IconButton
              text="Edit Feedback"
              buttonIcon={FaRegPenToSquare}
              onClick={() => showEditForm(activeFeedback)}
              color=""
            />
            <IconButton
              text="Delete Feedback"
              buttonIcon={FaTrashCan}
              onClick={() => deleteFeedback(activeFeedback._id)}
              color="rgba(255, 0, 0, 1)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetails;
