import React from 'react';
import { useLocation } from 'react-router-dom';
import './Details.scss';

const Details = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div>{state.state.name}</div>
  );
};

export default Details;
