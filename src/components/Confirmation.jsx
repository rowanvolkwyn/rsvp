function Confirmation({ formData }) {
    const { name, attendees } = formData;

    return (
        <div id='Confirmation'>
            <h1 id='thank-you'>Thank you for responding!</h1>
            <p>{name}</p>
            <p>{attendees}</p>
            <h3>See you in September!</h3>
        </div>
    );

};

export default Confirmation;