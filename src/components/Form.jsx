import React, { useState } from "react";

function Form({ onSubmit }) {

    const [name, setName] = useState('');
    const [attendees, setAttendees] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ name, attendees });
    };

    return (
        <div id='Home'>
            <h1>We're excited for you to come to our wedding!</h1>
            <h2>Please fill out the information below to RSVP</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName.apply(e.target.value)} required />
                <label htmlFor="attendees">Number of attendees:</label>
                <input type="text" id="attendees" name="attendees" value={attendees} onChange={(e) => setAttendees.apply(e.target.value)} required />
                <button type='submit' >RSVP</button>
            </form>
            <p id='confirmation'>Howdy</p>
        </div>
    );
};

export default Form;