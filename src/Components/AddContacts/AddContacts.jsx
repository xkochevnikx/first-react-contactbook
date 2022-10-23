import React, { useState } from "react";
import "./AddContacts.css";

const AddContacts = ({ AddObjContacts }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photo, setPhoto] = useState("");

  function ObjContacts() {
    let addCont = {
      name,
      lastName,
      photo,
      id: Date.now(),
    };
    AddObjContacts(addCont);
    setName("");
    setLastName("");
    setPhoto("");
  }

  return (
    <>
      <div className="AddContactsBox">
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
        <button onClick={ObjContacts}>Создать карточку</button>
      </div>
    </>
  );
};

export default AddContacts;
