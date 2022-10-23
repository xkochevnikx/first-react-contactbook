import React from "react";
import { useState } from "react";
import "./ReadContacts.css";

const ReadContacts = ({ readCont, modalClose, SaveNewContact }) => {
  const [name, setName] = useState(readCont.name);
  const [lastName, setLastName] = useState(readCont.lastName);
  const [photo, setPhoto] = useState(readCont.photo);

  function SaveModal() {
    let saveNewModal = { ...readCont };
    saveNewModal.name = name;
    saveNewModal.lastName = lastName;
    saveNewModal.photo = photo;

    SaveNewContact(saveNewModal);
  }

  return (
    <>
      <div className="modal_window">
        <div className="modal">
          <input
            type="text"
            placeholder="Введите имя"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Введите фамилию"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <input
            type="url"
            placeholder="Прикрепите фото"
            value={photo}
            onChange={e => setPhoto(e.target.value)}
          />
          <button onClick={() => modalClose()}>Закрыть </button>
          <button onClick={() => SaveModal()}>Сохранить</button>
        </div>
      </div>
    </>
  );
};
export default ReadContacts;
