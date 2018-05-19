import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactListItem from '../DisplayContacts/ContactListItem';
import store from '../state/store';
import { updateIsFavorite, getContact } from '../state/actions/contacts.action';


class ContactList extends Component {
    constructor(props){
        super(props);

        this.state = {
            checkit: false
        };
    }

    componentWillMount() {
        store.dispatch(getContact());
    }

    toggleFavorite = (contactDetail) => {
        store.dispatch(updateIsFavorite(contactDetail.contactID))
                .then(() => {
                    store.dispatch(getContact())
                })

        this.setState({
            checkit: !this.state.checkit
        })
    }
   
    render() {
        var count=0;
        if(this.props.contactlist){
            return (
                <div>
                    <div>
                        {this.props.contactlist.contactlist.map((contact)=> {
                            if(contact.isFavorite){
                                return <ContactListItem key={contact.contactID} contactIndex={count} contact={contact} setfavorite={this.toggleFavorite.bind(this)} />
                            }
                        })}
                    </div>
                    <div>
                        {this.props.contactlist.contactlist.map((contact)=> {
                            if(!contact.isFavorite){
                                return <ContactListItem key={contact.contactID} contactIndex={count} contact={contact} setfavorite={this.toggleFavorite.bind(this)} />
                            }
                        })}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    {this.props.contacts.map((contact) => {
                        count++;
                        return <ContactListItem key={contact.id} contactIndex={count} contact={contact} setfavorite={this.toggleFavorite.bind(this)} />
                    })}
                </div>
            );
        }
    }
}
    
const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(ContactList);