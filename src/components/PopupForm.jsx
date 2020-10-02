import React, { useState } from 'react';
// hide from parrent, hides the form
const PopupForm = ({ hide, handleCard }) => {
  const [inptTitle, setTitle] = useState('');
  const [inptDescription, setDescription] = useState('');
  const [inptAuthor, setAuthor] = useState('');
  const [charLeft, setCharLeft] = useState(50);
  // setting title, author and handling description(handling and counting char)
  const handleTitle = (e) => {
    const input = e.target.value;
    setTitle(input);
  };
  const handleDescription = (e) => {
    // handles description input
    const input = e.target.value;
    setDescription(input);
    setCharLeft(50 - input.length);
  };
  const handleAuthor = (e) => {
    const input = e.target.value;
    setAuthor(input);
  };
  // checking that all fields are filled and calling handleCard from app
  const createCard = (e) => {
    if (inptTitle !== '' && inptDescription !== '' && inptAuthor !== '') {
      e.preventDefault();
      handleCard({ inptTitle, inptDescription, inptAuthor });
    }
  };

  return (
    <section className="popupFormWrapper" id="formWrapper">
      <section className="popupFormMain">
        <section className="popupFormHeader">
          <h3>New Todo</h3>
          <a href="#" onClick={hide}>
            &#10005;
          </a>
        </section>
        <section>
          <form className="popupform">
            <section className="popupFormTitle">
              <label htmlFor="title">Title</label>
              <input
                autoFocus
                value={inptTitle}
                required
                type="text"
                id="title"
                name="title"
                className="inputField"
                onChange={handleTitle}
              />
            </section>

            <section className="popupFormDescription">
              <label htmlFor="description" id="descriptionLabel">
                Description {charLeft} char left
              </label>
              <input
                value={inptDescription}
                required
                maxLength="50"
                type="text"
                id="description"
                name="description"
                className="inputField"
                onChange={handleDescription}
              />
            </section>

            <section className="popupFormAuthor">
              <label htmlFor="autor">Author</label>
              <input
                value={inptAuthor}
                required
                type="text"
                id="author"
                name="author"
                className="inputField"
                onChange={handleAuthor}
              />
            </section>
            <input
              type="submit"
              value="Create todo"
              className="createTodoButton"
              onClick={createCard}
            />
          </form>
        </section>
      </section>
    </section>
  );
};

export default PopupForm;
