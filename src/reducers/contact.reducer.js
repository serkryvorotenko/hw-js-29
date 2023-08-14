const initialState = {contacts: []};

export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CONTACTS': {
            state = {...state, contacts: action.payload}
            break;
        }

    }

    return state;
}
