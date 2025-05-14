import React from 'react';
import './Contact.css';


function Contact() {
    const contacts = [
        {id: 1, name: 'Mr Singh', department: 'Sales', email: 'abc@gmail.com', phone: '555-444-333'},
        {id: 2, name: 'Mr. Kumar', department: 'Support', email: 'xyz@gmail.com', phone: '666-444-777'},
        {id: 3, name: 'Mr. Das', department: 'IT', email: 'xyz1@gmail.com', phone: '111-444-777'},
        {id: 4, name: 'Mr. Kumari', department: 'IT', email: 'mno@gmail.com', phone: '222-444-777'},
    ];

    return (
        <div className='page contact-page'>
            <h1> Contact Information </h1>
            <div className='table-container'>
                <table className='contact-table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>

                    <tbody>
                        {contacts.map(contact => (
                            <tr key={contact.id}>
                                <td>{contact.id}</td>
                                <td> {contact.name} </td>
                                <td>{contact.department}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Contact;