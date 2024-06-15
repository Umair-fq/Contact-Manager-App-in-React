import { useEffect, useState } from 'react'
import AddContact from './AddContact'
import './App.css'
import ContactList from './ContactList'
import Header from './Header'
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as  Router, Route, Switch} from 'react-router-dom' 


function App() {

  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    const newContactWithId = { id: uuidv4(), ...newContact };
    setContacts([...contacts, newContactWithId]);
  }

  const handleDeleteContact = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id});
      setContacts(newContactList);
  }

  useEffect (() => {
    const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log("stored contact: "+storedContacts)
    if (storedContacts) {
      setContacts(storedContacts)
    }
  }, [])

  useEffect (() => {
    console.log("saving contact: "+ contacts)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path = "/add">
            <AddContact onAddContact = {handleAddContact} />
          </Route>
          <Route exact path = "/">
            <ContactList contacts = {contacts} onDelete = {handleDeleteContact}/>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
