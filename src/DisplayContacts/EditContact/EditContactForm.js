import React, { Component } from 'react';
import store from '../../state/store';
import { editContact, getContact } from '../../state/actions/contacts.action';
import './EditContactForm.css';

class EditContactForm extends Component {
    constructor(props){
        super(props);

        //Setting the initial state of this component fields
        this.state = {
            firstName: this.props.contact.firstName,
            lastName:this.props.contact.lastName,
            email:this.props.contact.mailID,
            isEditContactFormVisible: true
        };
    }

    //These Methods handle the onchange event and updates the state value of the text fields
    editFirstName = (e) => {
        const firstName = e.target.value;
        this.setState(() => ({ firstName }));
    }
    
    editLastName = (e) => {
        const lastName = e.target.value;
        this.setState(() => ({ lastName }));
    }

    editEmail = (e) => {
        const email= e.target.value;
        this.setState(() => ({ email }));
    }

    onEditContactForm = () => {
        this.setState({
            isEditContactFormVisible: !this.state.isEditContactFormVisible
        })
    }

    onCancel = () => {
        this.setState({
            isEditContactFormVisible: !this.state.isEditContactFormVisible
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        //Check whether the new vaues aren't empty
        // if(this.state.firstName.length === 0 || this.state.lastName.length === 0 || this.state.email.length === 0  ) {
        //     alert('All the fileds must be filled !');
        // }
        // else {
            // const update = {
            //     firstName: this.state.firstName,
            //     lastName: this.state.lastName,
            //     email: this.state.email
            // }
    
            store.dispatch(editContact(
                this.props.contact.contactID,
                this.state.firstName,
                this.state.lastName,
                this.state.email
            )).then(() => {
                store.dispatch(getContact())
            });
                ;
        //}

        
        this.setState({
            firstName: '',
            lastName:'',
            email:'',
            isEditContactFormVisible: !this.state.isEditContactFormVisible
        })
        
    }

    render() {
        return (
            <div>
            {this.state.isEditContactFormVisible && 
                <div className="edit-contact-form-container">
                    <form className="edit-contact-form">
                        <span className="edit-first-name">
                            <span className="edit-title"> First name</span>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    autoFocus
                                    value={this.state.firstName}
                                    onChange={this.editFirstName}
                                />
                            </span>
                            <span className="edit-last-name">
                            <span className="edit-title">Last name</span>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    value={this.state.lastName}
                                    onChange={this.editLastName}
                                />
                            </span>
                            <div className="edit-email">
                            <span className="edit-title">Email</span>
                                <input
                                    type="text"
                                    id="email-title"
                                    placeholder="email"
                                    value={this.state.email}
                                    onChange={this.editEmail}
                                />
                            </div>
                    </form>
                    <div className="edit-buttonWrapper">
                            <button className="edit-save-contact" onClick={this.onSubmit}>Save</button>
                            <button className="edit-delete" onClick={this.onCancel}>Cancel</button>
                        </div>
                </div>
            }
            </div>
        );
    }
}

export default EditContactForm;