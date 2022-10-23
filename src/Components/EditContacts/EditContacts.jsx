import React from "react";
import "./EditContacts.css";

const EditContacts = ({ contact, DeliteContact, HandleReadIndex }) => {
  return (
    <>
      {contact.map((item, index) => (
        <ul key={item.id}>
          <li>{item.name}</li>
          <li>{item.lastName}</li>
          <li>
            <img src={item.photo} />
          </li>
          <li>
            {/* вот тут на забываем что item.id виден вызываемой функции только внутри перебора */}
            <button onClick={() => DeliteContact(item.id)}>Удалить</button>
          </li>
          <li>
            <button onClick={() => HandleReadIndex(index)}>
              Редактировать
            </button>
          </li>
        </ul>
      ))}
    </>
  );
};
export default EditContacts;
