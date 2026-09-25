import './Button.scss'

// Custom Components

// Built-in Components

// Context

// Data

const Button = ({ children, type="button", buttonType="", onClick}) => {
  return (
    <div className="button-container">
      <input className={`${buttonType}`} type={type} value={children} onClick={onClick} />
    </div>
  );
};

export default Button;