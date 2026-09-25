import CanDo from "../CanDo/CanDo";
import "./About.scss";

import { Link } from "react-router-dom";

import { FaPenToSquare, FaPen ,FaShield, FaList   } from "react-icons/fa6";

import FeedbackContext from "../../context/FeedbackContext";
import { useContext } from "react";

const About = () => {
  const SubmitIcon = FaPen 
  const ViewIcon = FaList 
  const EditIcon = FaPenToSquare 
  const PrivacyIcon = FaShield 

  const { currentPage } = useContext(FeedbackContext)
  return (
    <section className="about-section">
      <header className="wrapper">
        <div className="about-header">
          <h1 className="about-title">About Feedback</h1>
          <h2 className="about-subtitle">Your voice. Our Priority</h2>
        </div>
      </header>

      <section className="wrapper">
        <div className="about-feedback-container">
          <p className="about-feedback">
            Feedbacks helps you share your thought. We use your feedback to
            improve our app andd deliver a better experience for everyone.
          </p>
        </div>
      </section>

      <section className="can-do-wrapper wrapper">
        <div className="what-you-can-do-container">
          <h3>What you can do</h3>

          <CanDo
            heading="Submit Feedback"
            text="Share your feedback in seconds."
            IconComponent = {SubmitIcon}
            color="green"
          />
          <hr className="divider" />
          <CanDo
            heading="View Your Feedback"
            text="Check the status and history of your feedback."
            IconComponent = {ViewIcon}
            color="blue"
          />
          <hr className="divider" />
          <CanDo
            heading="Edit or Delete"
            text="Update or remove your feedback anytime."
            IconComponent = {EditIcon}
            color="orange"
          />
          <hr className="divider" />
          <CanDo
            heading="Private and Secure"
            text="Your feedback is safe and only used to improve our app."
            IconComponent = {PrivacyIcon}
            color="blue"
          />
        </div>
      </section>
      
      <div className="back-to-home">
        <Link to={`/?page=${currentPage}`}>Back to Home</Link>
      </div>
    </section>
  );
};

export default About;
