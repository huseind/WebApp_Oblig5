import React, { useState } from 'react';
import TodoCard from './TodoCard';

const CardList = ({ cardList, deleteCard, completeToDo }) => (
  <section className="toDo">
    {cardList.map((card) => (
      <TodoCard
        title={card.title}
        description={card.description}
        author={card.author}
        id={card.id}
        deleteCard={deleteCard}
        completeToDo={completeToDo}
      />
    ))}
  </section>
);

export default CardList;
