import React from 'react'

function Pagination({handleNext, handlePrev, page  }) {
  return (
    <div className="d-flex justify-content-center my-4">
      <button
        className="btn btn-outline-secondary me-2"
        onClick={handlePrev}
        disabled={page === 1}
      >
        ⬅ Previous
      </button>
      <button className="btn btn-outline-primary" onClick={handleNext}>
        Next ➡
      </button>
    </div>
  );
}

export default Pagination