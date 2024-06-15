// AddContact.js
import React, { useState } from 'react';
import './App.css';

const AddContact = ({onAddContact}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePhoneNoChange(e) {
        setPhoneNo(e.target.value);
    }

    const handleSave = (e) => {
        e.preventDefault();
        if(name !== '' && email !== '' && phoneNo !== '') {
            const newContact = {name, email, phoneNo};
            onAddContact(newContact);

            //reset the values
            setName('');
            setEmail('');
            setPhoneNo('');
        }
    }

    return (
        <>
            <div className="add-contact-container">
                <h1>Add Contact</h1>
                <form onSubmit = { handleSave }>
                    <label htmlFor="Name">Name</label>
                    <input type="text" value = { name } onChange = { handleNameChange } placeholder="Enter Name" />
                    <label htmlFor="Email">Email</label>
                    <input type="email" value = { email } onChange = { handleEmailChange } placeholder="Enter Email" />
                    <label htmlFor="phoneno">Phone No</label>
                    <input type="text" value = {phoneNo} onChange={handlePhoneNoChange} placeholder="Enter Phone No" />
                    <button type='submit'>Save</button>
                </form>
            </div>
        </>
    );
}

export default AddContact;
