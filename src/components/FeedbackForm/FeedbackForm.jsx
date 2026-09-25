import "./FeedbackForm.scss";

// Custom Components
import Rating from "../Rating/Rating";
import FeedbackText from "../FeedbackText/FeedbackText";
import Button from "../Button/Button";

// Built-in Components
import { useContext } from "react";

// Context
import FeedbackContext from "../../context/FeedbackContext";

const FeedbackForm = () => {
  const { submitFeedback, formData, setFormData } = useContext(FeedbackContext);

  // console.log(formData)

  const handleSubmit = (e) => {
    submitFeedback(e);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const textCount = formData.feedbackText.length;

  return (
    <section className="wrapper">
      <form onSubmit={handleSubmit} className="feedback-form-container">
        <Rating
          name="feedbackRating"
          onChange={handleChange}
          selectedValue={formData.feedbackRating}
        />
        <FeedbackText
          name="feedbackText"
          value={formData.feedbackText}
          textCount={textCount}
          onChange={handleChange}
        />
        <Button type="submit">Submit Feedback</Button>
      </form>
    </section>
  );
};

export default FeedbackForm;
