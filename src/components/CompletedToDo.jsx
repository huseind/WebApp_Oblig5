import React from 'react';

const CompletedToDo = ({ title, author, description, date }) => (
  <li>
    <h4>{title}</h4>
    <h4>{author}</h4>
    <h4>{description}</h4>
    <h4>{date}</h4>
  </li>
);

export default CompletedToDo;
