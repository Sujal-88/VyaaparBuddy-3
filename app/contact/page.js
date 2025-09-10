// app/contact/page.js
'use client';

import { useState } from 'react';
import styles from '@/styles/Contact.module.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function ContactPage() {

    const [status, setStatus] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const data = {
        ...formData,
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        subject: `New Message from ${formData.name}`,
    };

    // 👇 This is the new, more robust part
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (result.success) {
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' }); // Reset form
        } else {
            console.log("Error from Web3Forms:", result);
            setStatus(result.message);
        }
    } catch (error) {
        console.error("Submission Error:", error);
        setStatus('Something went wrong. Please try again.');
    }
};
    return (
            <main className={styles.contactContainer}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Get in Touch</h1>
                    <p className={styles.subtitle}>
                        Have a project in mind or just want to say hello? We&apos;d love to hear from you.
                    </p>
                </div>

                <div className={styles.contactLayout}>
                    {/* Left Side: Contact Details */}
                    <div className={styles.contactDetails}>
                        <h2 className={styles.detailsTitle}>Contact Information</h2>
                        <p className={styles.detailsText}>
                            Fill up the form and our team will get back to you within 24 hours.
                        </p>
                        <div className={styles.infoItem}>
                            <FaPhoneAlt className={styles.icon} />
                            <span>+91 9420916671</span>
                        </div>
                        <div className={styles.infoItem}>
                            <FaEnvelope className={styles.icon} />
                            <span>thevyapaarbuddy@gmail.com</span>
                        </div>
                        <div className={styles.infoItem}>
                            <FaMapMarkerAlt className={styles.icon} />
                            <span>Chh. Sambhajinagar, Maharashtra, India</span>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={styles.inputField}
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={styles.inputField}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className={styles.textareaField}
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className={styles.submitButton}>
                            Send Message
                        </button>
                    </form>
                    {status && <p className={styles.statusMessage}>{status}</p>} {/* Display status message */}
                </div>
            </main>
    );
}
