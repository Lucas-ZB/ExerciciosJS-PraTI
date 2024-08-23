import { useState } from 'react';

function StdForm() {
    const [name, setName] = useState(''); // variavel nome

    const handleChange = (event) => {
        setName(event.target.value);
    }; // Added missing closing brace

    const handleSubmit = (event) => { // Added event parameter
        event.preventDefault();
        alert(`Olá ${name}`); // Corrected syntax
    };

    return (
        <form onSubmit={handleSubmit}> {/* Added onSubmit handler */}
            <label>
                Nome:
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <button type="submit">Enviar</button>

            
        </form> // Corrected closing tag
    );
}

export default StdForm;