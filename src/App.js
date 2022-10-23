import { useState, useEffect } from "react";
import "./App.css";
import AddContacts from "./Components/AddContacts/AddContacts";
import EditContacts from "./Components/EditContacts/EditContacts";
import ReadContacts from "./Components/ReadContacts/ReadContacts";

function App() {
  const [contact, setContact] = useState([]);
  const [readCont, setReadCont] = useState({});
  const [isRead, setIsRead] = useState(false);

  function AddObjContacts(addCont) {
    let newCont = [...contact];
    newCont.push(addCont);
    setContact(newCont);
  }

  function DeliteContact(id) {
    let addNewCont = contact.filter(item => {
      return item.id !== id;
    });
    setContact(addNewCont);
  }

  function HandleReadIndex(index) {
    setIsRead(true);
    setReadCont(contact[index]);
  }

  function modalClose() {
    setIsRead(false);
  }

  function SaveNewContact(saveNewModal) {
    let saveNewItemContact = contact.map(item => {
      if (item.id === saveNewModal.id) {
        return saveNewModal;
      }
      return item;
    });
    setContact(saveNewItemContact);
    setIsRead(false);
  }
  console.log(contact);
  useEffect(() => {
    if (localStorage.getItem("contact") === null) {
      localStorage.setItem("contact", JSON.stringify([]));
    } else {
      let dataCont = localStorage.getItem("contact");
      setContact(JSON.parse(dataCont));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contact));
  }, [contact]);

  return (
    <div className="container">
      <AddContacts AddObjContacts={AddObjContacts} />
      <EditContacts
        contact={contact}
        DeliteContact={DeliteContact}
        HandleReadIndex={HandleReadIndex}
      />
      {isRead ? (
        <ReadContacts
          readCont={readCont}
          modalClose={modalClose}
          SaveNewContact={SaveNewContact}
        />
      ) : null}
    </div>
  );
}

export default App;
