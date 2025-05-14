import React, {useState} from 'react';
import './Query.css';

function Query() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: 'sales',
        subject: '',
        priority: 'medium'
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleSubmit= (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Query submitted successfully');

        setFormData({
            name: '',
            email: '',
            department: 'sales',
            subject: '',
            message: '',
            priority: 'medium'
        });
    };

    return (
        <div className='page query-page'>
            <h1>Submit a Query</h1>

            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='name'>Full Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            required />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='email'>Email ID</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='department'>Department</label>
                        <select 
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                        >
                            <option value="Sales"> Sales </option>
                            <option value="support"> Support </option>
                            <option value="it"> IT </option>
                            <option value="marketing"> Marketing </option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='subject'>Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='message'>Message</label>
                        <textarea
                            id='message'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                        ></textarea>
                    </div>

                    <div className='form-group'>
                        <label>Priority</label>
                        <div className='radio-group'>
                            <label>
                                <input
                                    type='radio'
                                    name='priority'
                                    value='low'
                                    checked={formData.priority === 'low'}
                                    onChange={handleChange}
                                /> Low
                            </label>

                            <label>
                                <input
                                    type='radio'
                                    name='priority'
                                    value='medium'
                                    checked={formData.priority === 'medium'}
                                    onChange={handleChange}
                                /> Medium
                            </label>

                            <label>
                                <input
                                    type='radio'
                                    name='priority'
                                    value='high'
                                    checked={formData.priority === 'high'}
                                    onChange={handleChange}
                                /> High
                            </label>
                        </div>
                    </div>

                    <button type='submit' className='submit-btn'>Submit Query</button>
                </form>
            </div>

        </div>
    );
};

export default Query;