// Pagination.tsx
import React from 'react';


interface PaginationProps {
  gotoNextPage: () => void;
  gotoPrevPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ gotoNextPage, gotoPrevPage }) => {
  return (
    <div>
     {gotoPrevPage && <button type="button" className="btn-btn primary" onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button type="button" className="btn-btn primary" onClick={gotoNextPage}>Next</button>}
    </div>
  );
};

export default Pagination;
