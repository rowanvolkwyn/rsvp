export function handleSubmit() {
    
    let name = document.getElementById('name').value;
    let attendees = document.getElementById('attendees').value;
    let attending = false;
    let allergies = ['nuts', 'eggs', 'sesame seeds'];

    const rsvpInfo = {
        name: name,
        attending: attending,
        attendees: attendees,
        allergies: allergies
    };

    console.log(name);
    console.log(attendees);
    console.log(attending);
    console.log(allergies);

    console.log(rsvpInfo);
    document.getElementById('confirmation').innerHTML = `Hello: ${rsvpInfo.name}`;

    return rsvpInfo;
}