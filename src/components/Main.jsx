import React from 'react';
import Addbtn from './Addbtn';
import CardList from './CardList';
import CompletedList from './CompletedList';

const Main = ({
  show,
  createdCards,
  deleteCard,
  completeToDo,
  completedList,
  searchCompleted,
}) => (
  <main>
    <Addbtn handleShow={show} />
    {createdCards.length === 0 ? (
      <h1>Jippi! Ingen todos i dag</h1>
    ) : (
      <CardList
        cardList={createdCards}
        deleteCard={deleteCard}
        completeToDo={completeToDo}
      />
    )}
    <CompletedList
      completedList={completedList}
      searchCompleted={searchCompleted}
    />
  </main>
);

export default Main;
