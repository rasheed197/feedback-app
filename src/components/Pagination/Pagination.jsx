import "./Pagination.scss";
import PaginationBtn from "../PaginationBtn/PaginationBtn";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import { useContext, useEffect } from "react";

import FeedbackContext from "../../context/FeedbackContext";

const Pagination = () => {
  const {
    totalPages,
    currentPage,
    setCurrentPage,
    setSearchParams,
  } = useContext(FeedbackContext);

  useEffect(() => {
  }, [currentPage]);

  const handlePage = (page) => {
    setSearchParams({
      page,
    });
    setCurrentPage(page);
  };

  const visibleButtons = 3;

  const startPage = Math.max(1, currentPage - Math.floor(visibleButtons / 2));

  const endPage = Math.min(totalPages, startPage + visibleButtons - 1);

  const pageNumbers = [];

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-wrapper">
      <div className="pagination-container">
        {/* Prev */}
        <PaginationBtn
          onClick={() => handlePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaChevronLeft />
        </PaginationBtn>
        {/* Prev */}

        {pageNumbers.map((page) => (
          <PaginationBtn
            key={page}
            onClick={() => handlePage(page)}
            active={currentPage === page}
          >
            {page}
          </PaginationBtn>
        ))}

        {/* Next */}
        <PaginationBtn
          onClick={() => handlePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FaChevronRight />
        </PaginationBtn>
        {/* Next */}
      </div>

      <div style={{ margin: "20px 10px 0 10px", textAlign: "center" }}>
        <span>
          Page {currentPage} of {totalPages}
        </span>
      </div>
    </div>
  );
};

export default Pagination;
