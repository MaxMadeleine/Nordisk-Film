import { useState } from 'react'; 
import { Main } from "../../Components/MainComponent/Main"; 
import './ContactPage.scss'; 

export const ContactPage = () => {
    // state til at gemme form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    // State til at gemme valideringsfejl
    const [errors, setErrors] = useState({});

    // Funktion til at validere inputfelterne
    const validateField = (name, value) => {
        // regular expression til at validere input
        const nameRegex = /^[A-Za-z]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{8}$/;

        // Validerer hvert felt baseret på dets navn
        switch (name) {
            case 'firstName':
            case 'lastName':
                return nameRegex.test(value); // Tjekker om navnet kun indeholder bogstaver
            case 'email':
                return emailRegex.test(value); // Tjekker om emailen er gyldig
            case 'phone':
                return phoneRegex.test(value); // Tjekker om telefonnummeret består af præcis 8 cifre
            case 'message':
                return value.trim() !== ''; // Tjekker om beskeden ikke er tom
            default:
                return true; // Hvis feltet ikke kræver validering, returneres true
        }
    };

    // håndtere ændringer i inputfelterne
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        // Validerer feltet og opdaterer fejl-state
        if (!validateField(name, value)) {
            setErrors({
                ...errors,
                [name]: true // Markerer feltet som ugyldigt
            });
        } else {
            const { [name]: removedError, ...rest } = errors;
            setErrors(rest); // Fjerner fejlen, hvis inputtet er gyldigt
        }
    };

    // Funktion til at håndtere forms submit
    const handleSubmit = (e) => {
        e.preventDefault(); // Forhindrer standard sideopdatering
        const newErrors = {};

        // check alle felter for at validere dem
        Object.keys(formData).forEach((field) => {
            if (!validateField(field, formData[field])) {
                newErrors[field] = true;
            }
        });

        setErrors(newErrors); // Opdaterer fejl-state

        // Hvis ingen fejl, håndteres submit
        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted', formData); // Logger data

            // Nulstiller formularens efter submit
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
        }
    };

    // Funktion til kantfarve på inputfelter baseret på validering
    const getBorderStyle = (field) => {
        if (formData[field] === '') {
            return { borderLeft: '0.25rem solid transparent' }; // tom = ingen border
        }
        return errors[field]
            ? { borderLeft: '0.25rem solid red' } // Rød kant ved fejl
            : { borderLeft: '0.25rem solid lime' }; // Grøn kant ved gyldigt input
    };

    // Funktion til at tjekke, om hele formularen er gyldig
    const isFormValid = () => {
        return Object.keys(formData).every((field) => validateField(field, formData[field]));
    };

    return (
        <Main>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        style={getBorderStyle('firstName')}
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        style={getBorderStyle('lastName')}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={getBorderStyle('email')}
                    />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={getBorderStyle('phone')}
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={getBorderStyle('message')}
                    />
                </div>
                <div className="button-container">
                    <button
                        type="submit"
                        className={isFormValid() ? 'active' : ''} // Form valid = gør knap aktiv
                    >
                        Submit
                    </button>
                </div>
            </form>
        </Main>
    );
};
