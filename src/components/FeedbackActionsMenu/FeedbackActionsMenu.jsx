import  './FeedbackActionsMenu.scss'

// Custom Components

// Built-in Components
import { useContext } from 'react';
import { FaRegEye, FaRegPenToSquare, FaTrashCan } from "react-icons/fa6";

// Context
import FeedbackContext from '../../context/FeedbackContext';

// Data


const FeedbackActionsMenu = ({ isHovered, feedback }) => {
  const {deleteFeedback, showEditForm, showDetails} = useContext(FeedbackContext)

  return (
    <div className={`feedback-actions-card ${isHovered && "show"}`}>
      <div className="action-container" onClick={() => showDetails(feedback)}>
        <FaRegEye />
        <span>View Details</span>
      </div>
      <div className="action-container" onClick={() => showEditForm(feedback)}>
        <FaRegPenToSquare />
        <span>Edit Feedback</span>
      </div>
      <div className="action-container">
        <FaTrashCan className='delete-icon'/>
        <span className='delete-feedback' onClick={() => deleteFeedback(feedback._id)}>Delete Feedback</span>
      </div>
    </div>
  )
}

export default FeedbackActionsMenu
