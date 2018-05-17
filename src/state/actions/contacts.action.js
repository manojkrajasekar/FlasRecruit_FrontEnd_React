import uuid from 'uuid';
import axios from 'axios';
import {
    ADD_CONTACT,
    GET_CONTACTS,
    EDIT_CONTACT,
    DELETE_CONTACT,
    UPDATE_FAV
} from '../../common/constants';

const API = 'http://localhost:8080'



//Action for adding the contact
//uuid is a package provided by node, which automatically generates an id
// export const addContact = (
//         { 
//             id = 0,
//             firstName = '', 
//             lastName = '',
//             email = '',
//             isFavorite = false
//         } = {}
//     ) => ({
//         type: 'ADD_CONTACT',
//         Contact: {
//             id: uuid(),
//             firstName, 
//             lastName,
//             email,
//             isFavorite
//         }
//     });



 export const addContact = (first_name, last_name, email, contact_uid) => {
    return {
        type: ADD_CONTACT,
        payload: axios.post(`${API}/add_contact`, {first_name, last_name, email, contact_uid})   
    }
};
  
export const getContact = () => {
    return {
        type: GET_CONTACTS,
        payload: axios.get(`${API}/get_contacts`)   
    }
};

//Action for editing the contact
export const editContact = (contact_id, first_name, last_name, email) => {
    return {
        type: EDIT_CONTACT,
        payload: axios.put(`${API}/update_contact`, {
            contact_id, 
            first_name, 
            last_name, 
            email
        })   
    }
};

//Action for removing the contact
export const deleteContact = (contact_id) => ({
    type: DELETE_CONTACT,
    payload: axios.delete(`${API}/delete_contact`, { 
        data: { contact_id } 
    }) 
});
    

export const updateIsFavorite = (contactId) => {
    return {
        type: UPDATE_FAV,
        payload: axios.put(`${API}/update_favorite`, {
            contactId
        })   
    }
}

