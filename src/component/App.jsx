import React, {useEffect, useState} from "react";
import {Contact} from "./Contact.jsx";
import {NewContact} from "./NewContact.jsx";
import {connect} from "react-redux";
import {addContact, deleteContact, getContacts} from "../actions/contact.action";

function App({contacts, getContacts, addContact, deleteContact}) {
    const [isShowNewContact, setShowNewContact] = useState(false)

    useEffect(() => {
        getContacts();
    }, [])

    const showNewContact = () => {
        setShowNewContact(!isShowNewContact)
    }
    return (
        <main>
            <table>
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Телефон</th>
                    <th>(Удалить)</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map((contact) => {
                    return <Contact
                        name={contact.name}
                        surName={contact.username}
                        phone={contact.phone}
                        onDelete={() => deleteContact(contact.id)}
                    />
                })}
                </tbody>
            </table>
            <button onClick={showNewContact}>
                {isShowNewContact ? 'скрыть форму' : 'показать форму'}
            </button>
            {isShowNewContact ?
                <NewContact onCancel={showNewContact} onAdd={addContact}/> : ""}
        </main>

    )
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts.contacts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getContacts: () => dispatch(getContacts()),
        deleteContact: (id) => {
            dispatch(deleteContact(id))
        },
        addContact: (name, surName, phone) => {
            dispatch(addContact(name, surName, phone))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);