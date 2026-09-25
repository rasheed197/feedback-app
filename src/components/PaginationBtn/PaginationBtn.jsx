import "./PaginationBtn.scss";

const PaginationBtn = ({ children, active, onClick, disabled }) => {
  return (
    <button
      className={`pagination-btn ${active && "active"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PaginationBtn;
