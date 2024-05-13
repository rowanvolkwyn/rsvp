import React, { useState } from "react";
import Form from "../components/Form";
import Confirmation from "../components/Confirmation";


function Home() {

    const [formData, setFormData] = useState(null);

    const handleFormSubmit = (data) => {
        setFormData(data);
        console.log(data);
    };

    return (
        <div>
            {formData ? (<Confirmation formData={formData}/>) : (<Form onSubmit={handleFormSubmit}/>)}
        </div>

    );
    
};

export default Home;