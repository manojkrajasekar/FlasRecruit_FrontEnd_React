import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger} from 'redux-logger';
import promise from 'redux-promise-middleware';
import { Contacts, getcontacts, addcontact, editcontact, deletecontacts } from '../state/reducers/contacts.reducer';

const store = createStore(
    combineReducers({
        contacts: Contacts,
        contactlist: getcontacts
    })
    , applyMiddleware(createLogger(), thunk,  promise()));

console.log(store.getState());
export default store;