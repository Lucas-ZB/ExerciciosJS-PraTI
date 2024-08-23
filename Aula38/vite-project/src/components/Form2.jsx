import { useState } from "react";

function Form2() {
    const [adress, setAdress] = useState({
        street: '',
        city: '', // Added city to the state
        postalCode: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAdress(prevState => ({
            ...prevState,
            [name]: value
        }));
    }; // Added missing closing brace here

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents form submission

        // Check if any of the fields are empty
        if (!adress.street.trim() || !adress.city.trim() || !adress.postalCode.trim()) {
            alert('Por favor, preencha todos os campos.');
            return; // Stops execution if any field is empty
        }

        alert(`Endereço: ${adress.street}, ${adress.city}, ${adress.postalCode}`);
        // Here you can continue with the form submission logic
        // For example, sending the data to an API
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Rua:
                <input type="text" value={adress.street} onChange={handleChange} name="street"/>
            </label>
            <label>
                Cidade:
                <input type="text" value={adress.city} onChange={handleChange} name="city"/>
            </label>
            <label>
                CEP:
                <input type="text" value={adress.postalCode} onChange={handleChange} name="postalCode"/>
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Form2;