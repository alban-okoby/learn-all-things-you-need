import { useState } from "react";
import './style.css';

function NameInput() {
    const [name, updateName] = useState("Alban");
    const handleChange = (e) => {
        updateName(e.target.value);
    };

    return (
        <div className="input-group">
            <input type="text" value={name} onChange={handleChange} />
            <p>Your name is : <b>{name}</b></p>
        </div>
    );
}

export default NameInput;

