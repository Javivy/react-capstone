import React from 'react';
import Pagination from '@mui/material/Pagination';
import { useDispatch } from 'react-redux';
import { changePage } from '../../redux/Coincap';

const PaginationComponent = () => {
  const dispatch = useDispatch();

  const handleChangePage = (event, value) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    dispatch(changePage(value));
  };

  return (
    <div className="d-flex justify-content-center align-items-center my-3">
      <Pagination count={10} onChange={handleChangePage} />
    </div>
  );
};

export default PaginationComponent;
