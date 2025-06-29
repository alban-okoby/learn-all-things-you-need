import { useState } from "react";

function ControlledInput() {
    const [value, setValue] = useState("");
    const handleChange = (e) => setValue(e.target.value);

    return (
        <>
            <input type="text" value={value} onChange={handleChange} title="My controlled input"/>
            <p>You typed : {value}</p>
        </>
    );
}

export default ControlledInput;