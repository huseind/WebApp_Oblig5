import React from 'react';

const TodoCard = ({ title, description, id, deleteCard, completeToDo }) => {
  const removeCard = () => {
    // method do delete a card, uses method in app
    deleteCard(id);
  };
  // method to complete a todo
  const moveToCompleted = () => {
    completeToDo(id);
  };
  return (
    <article className="latestToDo">
      <h4>{title} </h4>
      <p>{description}</p>
      <button type="button" className="deleteButton" onClick={removeCard}>
        Delete
      </button>
      <button
        type="button"
        className="completeButton"
        onClick={moveToCompleted}
      >
        Complete
      </button>
    </article>
  );
};

export default TodoCard;
