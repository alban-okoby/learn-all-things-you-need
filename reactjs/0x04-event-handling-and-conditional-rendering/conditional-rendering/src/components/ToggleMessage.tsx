import { useState } from "react";

function ToggleMessage() {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <button onClick={() => setVisible(!visible)}>
                {visible ? 'Hide' : 'Show'} message
            </button>
            {visible && <p>This is a toggle message for you !</p>}
        </>
    )
}

export default ToggleMessage;