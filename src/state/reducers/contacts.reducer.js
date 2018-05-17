import {
    GET_CONTACTS_PENDING,
    GET_CONTACTS_FULFILLED,
    GET_CONTACTS_REJECTED,
    ADD_CONTACT_PENDING,
    ADD_CONTACT_FULFILLED,
    ADD_CONTACT_REJECTED,
    EDIT_CONTACT,
    EDIT_CONTACT_PENDING,
    EDIT_CONTACT_FULFILLED,
    EDIT_CONTACT_REJECTED,
    DELETE_CONTACT_PENDING,
    DELETE_CONTACT_FULFILLED,
    DELETE_CONTACT_REJECTED
} from '../../common/constants';

//Default state is an array, which holds the contacts
const ContactDefaultState = [];
const ContactListDefaultState = {
    fetching: false,
    fetched: false,
    error: null,
    contactlist: []
};

const editContactListDefaultState = {
    fetching: false,
    fetched: false,
    error: null,
    editContactlist: []
};

const addcontactlistDefaultState = {
    fetching: false,
    fetched: false,
    error: null,
    contactId: {}
}

const deletecontactlistDefaultState = {
    fetching: false,
    fetched: false,
    error: null,
    response: {}
}

//Based on the case for the action, the following action on the state is done by the reducer and is updated in the store.
export const Contacts = (state = ContactDefaultState, action) => {
    switch (action.type) {
        // case 'ADD_CONTACT':
        //     return [ 
        //         ...state,
        //         action.Contact
        //     ];
        case 'REMOVE_CONTACT':
            return state.filter(({ id }) => id !== action.id);
        // case 'EDIT_CONTACT':
        //     return state.map((Contact) => {
        //         if(Contact.id === action.id){
        //             return {
        //                 ...Contact,
        //                 ...action.update
        //             }
        //     }
        //     else {
        //         return Contact
        //     }
        // });
        default:
            return state;
    }
};

export const addcontact = ( state = addcontactlistDefaultState, action ) => {
    switch (action.type) {
        case ADD_CONTACT_PENDING:
            return { ...state, fetching: true};
        case ADD_CONTACT_FULFILLED:
            return { ...state, fetching: false,  contactId: action.payload.data };
        case ADD_CONTACT_REJECTED:
            return { ...state, fetching: false, error: action.payload.error };
        default:
            return state;
    }
}

export const editcontact = (state = editContactListDefaultState, action )=> {
    switch (action.type) {
        case EDIT_CONTACT_PENDING:
            return { ...state, fetching: true};
        case EDIT_CONTACT_FULFILLED:
            return { ...state, fetching: false, editContactlist: action.payload.data };
        case EDIT_CONTACT_REJECTED:
            return { ...state, fetching: false, error: action.payload.error };
        default:
            return state;
    }
}

export const getcontacts = (state = ContactListDefaultState, action) => {
    switch (action.type) {
        case GET_CONTACTS_PENDING:
            return { ...state, fetching: true};
        case GET_CONTACTS_FULFILLED:
            return { ...state, fetching: false,  contactlist: action.payload.data.result };
        case GET_CONTACTS_REJECTED:
            return { ...state, fetching: false, error: action.payload.error };
        default:
            return state;
    }
};

export const deletecontacts = (state = deletecontactlistDefaultState, action) => {
    switch (action.type) {
        case DELETE_CONTACT_PENDING:
            return { ...state, fetching: true};
        case DELETE_CONTACT_FULFILLED:
            return { ...state, fetching: false,  resposne: action.payload.response };
        case DELETE_CONTACT_REJECTED:
            return { ...state, fetching: false, error: action.payload.error };
        default:
            return state;
    }
};



        