import "./EditFeedbackForm.scss";

// Custom Components
import Button from "../Button/Button";
import Rating from "../Rating/Rating";
import FeedbackText from "../FeedbackText/FeedbackText";

// Built-in Components
import { useContext, useEffect } from "react";
import { FaXmark, FaCircleInfo } from "react-icons/fa6";

// Context
import FeedbackContext from "../../context/FeedbackContext";

// Data

const EditFeedbackForm = ({ feedback }) => {
  const {
    showEditFeedbackForm,
    activeFeedback,
    editFormData,

    setEditFormData,
    setShowEditFeedbackForm,

    updateFeedback,
  } = useContext(FeedbackContext);

  useEffect(() => {
    setEditFormData({ ...activeFeedback });
  }, [activeFeedback, setEditFormData]);

  const closeEditFeedbackForm = () => {
    setShowEditFeedbackForm(!showEditFeedbackForm);
  };

  // console.log(EditFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  // console.log(editFormData)

  const handleUpdate = () => {
    updateFeedback(editFormData._id, editFormData);
  };

  return (
    <div
      className={`feedback-edit-container ${showEditFeedbackForm && "show"}`}
    >
      <form className="feedback-edit-form">
        <span className="close" onClick={closeEditFeedbackForm}>
          <FaXmark />
        </span>
        <h2>Edit Feedback</h2>
        <Rating
          name="feedbackRating"
          onChange={handleChange}
          selectedValue={editFormData.feedbackRating}
        />
        <FeedbackText
          name="feedbackText"
          value={editFormData.feedbackText}
          textCount={editFormData.feedbackText.length}
          onChange={handleChange}
        />
        <div className="info-container">
          <FaCircleInfo className="info-icon" />
          <p className="info-text">
            Editing your feedback will update your previous submission
          </p>
        </div>
        <div className="edit-button-container">
          <Button buttonType="invert" onClick={closeEditFeedbackForm}>
            Cancel
          </Button>
          <Button onClick={handleUpdate}>Save Changes</Button>
        </div>
      </form>
    </div>
  );
};

export default EditFeedbackForm;
