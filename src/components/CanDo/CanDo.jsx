import "./CanDo.scss"

import {
  FaRegPenToSquare
} from "react-icons/fa6";

const CanDo = ({ heading, text, IconComponent, color }) => {
  return (
        <div className="what-you-can-do">
          <div className={`icon-container ${color}`}>
            <IconComponent className="icon" />
          </div>
          <div className="text-container">
            <h4>{heading}</h4>
            <p>{text}</p>
          </div>
        </div>
  )
}

export default CanDo
