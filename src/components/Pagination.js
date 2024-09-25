import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);


  const handlePrevPage = () => paginate(currentPage - 1);
  const handleNextPage = () => paginate(currentPage + 1);

  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Show "First" and "Prev" buttons
    if (currentPage > 1) {
      pageNumbers.push(
        <li key="prev" className="page-item">
          <a onClick={handlePrevPage} href='#!' className="page-link">
            Prev
          </a>
        </li>
      );
    }

    // Always show the first page
    pageNumbers.push(
      <li key={1} className={`page-item ${currentPage === 1 ? 'active' : ''}`}>
        <a onClick={() => paginate(1)} href='#!' className="page-link">
          1
        </a>
      </li>
    );

    // Show ellipsis if current page is more than a few pages from the start
    if (currentPage > 3) {
      pageNumbers.push(
        <li key="start-ellipsis" className="page-item disabled">
          <span className="page-link">...</span>
        </li>
      );
    }

    // Show the current page, and up to 2 surrounding pages
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
          <a onClick={() => paginate(i)} href='#!' className="page-link">
            {i}
          </a>
        </li>
      );
    }

    // Show ellipsis if current page is far from the last page
    if (currentPage < totalPages - 2) {
      pageNumbers.push(
        <li key="end-ellipsis" className="page-item disabled">
          <span className="page-link">...</span>
        </li>
      );
    }

    // Always show the last page
    if (totalPages > 1) {
      pageNumbers.push(
        <li
          key={totalPages}
          className={`page-item ${currentPage === totalPages ? 'active' : ''}`}
        >
          <a onClick={() => paginate(totalPages)} href='#!' className="page-link">
            {totalPages}
          </a>
        </li>
      );
    }

    // Show "Next" and "Last" buttons
    if (currentPage < totalPages) {
      pageNumbers.push(
        <li key="next" className="page-item">
          <a onClick={handleNextPage} href='#!' className="page-link">
            Next
          </a>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <nav>
      <ul className="pagination">
        {renderPageNumbers()}
      </ul>
    </nav>
  );
};

export default Pagination;
