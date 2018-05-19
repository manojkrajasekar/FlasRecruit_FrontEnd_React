import React, { Component } from 'react';
import Contacts from '../../ContactsData/contacts.json';
import { addContact, getContact } from '../../state/actions/contacts.action';
import ContactList from '../../DisplayContacts/ContactList';
import AddContactForm from '../../AddContact/AddContactForm';
import store  from '../../state/store';
import './LandingPage.css';

class LandingPage extends Component {

    constructor(props){
        super(props);

         this.state = {
             isAddContact: false
         };

         
}

    updateAddContact = () => {
        console.log('Updateing vcou');
        this.setState({
            isAddContact: true
        })
    }

    componentWillMount() {
        
        if(!this.state.vCount) {
            {Contacts.map((contact) => {
                        console.log('CAlling addContact');
                    store.dispatch(addContact(
                            contact.firstName, 
                            contact.lastName, 
                            contact.email,
                            'asasasas'
                        )).then(() => {
                                store.dispatch(getContact())
                            })
                            .then(() => {
                                this.updateAddContact()
                            })
                })
            }
        }
    }

    render() {
        return (
            //Renders the column with the header column values
            <div className="landing-page-container">
                <div className="page-title">Contact List</div>
                    <table className="contact-heading-list">
                        <tbody>
                            <tr>
                                <th className="column-title">S.No.</th>
                                <th className="column-title">First Name</th>
                                <th className="column-title">Last Name</th>
                                <th className="column-title">Email</th>
                            </tr>
                        </tbody>
                    </table>
                    { /* Adds the contacts to the array from the given json file */}
                    <ContactList/>
                    <AddContactForm/>
            </div>
        );
    }
}

export default LandingPage;
