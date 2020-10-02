import React, { useState } from 'react';

import Topbar from './src/components/Topbar';
import Main from './src/components/Main';
import PopupForm from './src/components/PopupForm';

const App = () => {
  // hiding and showing form
  const [hideForm, setHideForm] = useState(true); // state that controls if the form is shown or not
  const hideIt = (e) => {
    if (e !== undefined) e.preventDefault(); // checking if the method is called from and button or not
    setHideForm(true);
  };
  const showIt = () => {
    setHideForm(false);
  };

  // list of card elements from form
  const [cards, setCards] = useState([]);
  // list of completed todos
  const [completed, setCompleted] = useState([]);
  // the list of completed that gets rendered, needed to filter when searching
  const [completedToSend, setCompletedToSend] = useState([]);

  // creating a card, adding it to the list and hiding the form after creation
  const createCards = ({ inptTitle, inptDescription, inptAuthor }) => {
    const oneCard = {
      title: inptTitle,
      description: inptDescription,
      author: inptAuthor,
      id: inptTitle.length + inptDescription,
    };
    // checking if there are more than three cards, if so, removing the last and adding the new one
    {
      cards.length < 3 ? setCards((prev) => [oneCard, ...prev]) : cards.pop();
      setCards(() => [oneCard, ...cards]);
    }
    hideIt();
  };

  // method to delete a card based on the id
  const deleteCard = (id) => {
    const filteredList = cards.filter((card) => card.id !== id);
    setCards(filteredList);
  };
  // method that moves a todo from the todolist to completed list
  const completeToDo = (id) => {
    const completedCard = cards.find((card) => card.id === id);
    setCompleted((prev) => [completedCard, ...prev]);
    setCompletedToSend((prev) => [completedCard, ...prev]);
    deleteCard(id);
  };

  const searchCompleted = (word) => {
    if (word === '') {
      setCompletedToSend(completed);
    } else {
      const filtered = completed.filter((todo) => todo.title.includes(word));
      setCompletedToSend(filtered);
    }
  };


  return (
    <div>
      <Topbar />
      <Main
        show={showIt}
        createdCards={cards}
        deleteCard={deleteCard}
        completeToDo={completeToDo}
        completedList={completedToSend}
        searchCompleted={searchCompleted}
      />
      {hideForm ? null : <PopupForm hide={hideIt} handleCard={createCards} />}
    </div>
  );
};

export default App;
