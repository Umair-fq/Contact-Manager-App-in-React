// ContactList.js
import React from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const ContactList = ({ contacts, onDelete }) => {
    return (
        <div className="contact-list-container">
            {contacts.map((contact) => (
                <div className="contact-item" key={contact.id}>
                    <h3 className="contact-name">{contact.name}</h3>
                    <p className="contact-email">{contact.email}</p>
                    <p className="contact-phoneno">{contact.phoneNo}</p>
                    <button onClick={() => onDelete(contact.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ContactList;
