/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Addbtn = ({ handleShow }) => {
  // preventing the a tag from redirecting and showing form
  const handleHere = (e) => {
    e.preventDefault();
    handleShow();
  };
  return (
    <a href="#" onClick={handleHere} className="addToDo">
      + To do
    </a>
  );
};

export default Addbtn;
