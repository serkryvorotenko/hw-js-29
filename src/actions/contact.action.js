const setContacts = (contacts) => ({
    type: 'SET_CONTACTS',
    payload: contacts
})


export const getContacts = () => async (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            dispatch(setContacts(response))
        });

}

export const addContact = (name, surName, phone) => async (dispatch, getState) => {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            username: surName,
            phone: phone,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            dispatch(setContacts([...(getState().contacts.contacts), json]))
        });
}

export const deleteContact = (id) => async (dispatch, getState) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
    }).then(() => {
        dispatch(setContacts(getState().contacts.contacts.filter((contact) => {
            return contact.id !== id
        })))

    });
}