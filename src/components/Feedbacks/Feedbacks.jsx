import "./Feedbacks.scss";

// Custom Components
import FeedbackItem from '../FeedbackItem/FeedbackItem'
import Pagination from "../Pagination/Pagination";
import Spinner from "../Spinner/Spinner";

// Built-in Components
import { useContext } from "react";

// Context
import FeedbackContext from "../../context/FeedbackContext";

// Data

const Feedbacks = () => {
  const { feedbacks, isLoading, topRef } = useContext(FeedbackContext);

  if(!isLoading && (!feedbacks || feedbacks.length === 0)){
        return <p style={{textAlign: "center", marginTop: "20px", marginBottom: "auto"}}>No Feedback Yet</p>
    }

  return isLoading ? <Spinner /> : (
    <section className="wrapper" ref={topRef}>
      <div className="feedback-container">
        <h3>Previous Feedback</h3>
        <p>Your past feedback submissions</p>
        <div className="feedbacks">
          {feedbacks.map((feedback, index) => {
            return <FeedbackItem key={index} feedback={feedback} />;
          })}
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default Feedbacks;
