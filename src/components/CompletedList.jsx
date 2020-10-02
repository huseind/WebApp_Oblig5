import React, { useState } from 'react';
import CompletedToDo from './CompletedToDo';
import Search from './Search';

const CompletedList = ({ completedList, searchCompleted }) => (
  <section className="completed">
    <h3 className="completedHeader">Completed todos</h3>
    <Search searchCompleted={searchCompleted} />
    <ul className="completedTableHeader">
      <li>
        <h4>Title</h4>
        <h4>Author</h4>
        <h4>Description</h4>
        <h4>Completed date</h4>
      </li>
    </ul>
    <ul className="tableItems" id="completedWrapper">
      {completedList.map((completed) => (
        <CompletedToDo
          title={completed.title}
          description={completed.description}
          author={completed.author}
          date={new Date().toLocaleDateString()}
        />
      ))}
    </ul>
  </section>
);

export default CompletedList;
