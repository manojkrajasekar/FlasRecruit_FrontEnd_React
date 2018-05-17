import React, { Component } from 'react';
import { addContact, getContact } from '../../src/state/actions/contacts.action';
import store from '../state/store';
import './AddContactForm.css';
import AddIcon from '@material-ui/icons/Add';


class AddContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email:'',
            isAddContactFormVisible: false
        };
    }
    // These Methods handle the onchange event and updates the state value of the text fields
    onFirstNameChange = (e) => {
        const firstName = e.target.value;
        this.setState(() => ({ firstName }));
    }
    
    onLastNameChange = (e) => {
        const lastName = e.target.value;
        this.setState(() => ({ lastName }));
    }

    onEmailChange = (e) => {
        const email= e.target.value;
        this.setState(() => ({ email }));
    }

    onAddContactForm = () => {
        this.setState({
            isAddContactFormVisible: !this.state.isAddContactFormVisible
        })
    }

    //Once the user submits, this method is called, which dispatches the AddContactaction.
    onSubmit = (e) => {
        e.preventDefault();
        
        //Checks whether the user entered vaues aren't empty
        if(this.state.firstName.length === 0 || this.state.lastName.length === 0 || this.state.email.length === 0  ) {
            alert('All the fileds must be filled !');
        }
        else {
            store.dispatch(addContact(
                this.state.firstName,
                this.state.lastName, 
                this.state.email,
                'asasasas'
            )).then(() => {
                store.dispatch(getContact())
            });
        }

        //Once the actoin is called, the initial values in the form are set back to empty
        this.setState({
            isAddContactFormVisible: !this.state.isAddContactFormVisible,
            firstName: '',
            lastName: '',
            email:'',
        })
    }
    
    render() {
        return(
            <div>
                {this.state.isAddContactFormVisible && 
                    <div className="add-contact-form-container">
                        <form className="add-contact-form">
                            <span className="first-name">
                               <span className="title"> First name</span>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    autoFocus
                                    value={this.state.firstName}
                                    onChange={this.onFirstNameChange}
                                />
                            </span>
                            <span className="last-name">
                            <span className="title">Last name</span>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    value={this.state.lastName}
                                    onChange={this.onLastNameChange}
                                />
                            </span>
                            <span className="email">
                            <span className="title">Email</span>
                                <input
                                    type="text"
                                    placeholder="email"
                                    value={this.state.email}
                                    onChange={this.onEmailChange}
                                />
                            </span>
                        </form>
                        <div className="buttonWrapper">
                            <button className="save-contact" onClick={this.onSubmit}>Add</button>
                            <button className="delete" onClick={this.onAddContactForm}>Cancel</button>
                        </div>
                    </div>
                }
            <div className="add-contact" onClick={this.onAddContactForm}>Add a new contact</div>
            </div>
        );
    }
}

export default AddContactForm;