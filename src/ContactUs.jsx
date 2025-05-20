import React from "react";
import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";


const ContactUs = () => {
    return (
        <section style={{ backgroundColor: '#fff', padding: '1rem 2rem' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    background: '#f9f9f9',
                    padding: '1rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    boxSizing: 'border-box'
                }}
            >
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Get in Touch</h2>
                <form
                    action="https://formspree.io/f/xvgayygr"
                    method="POST">
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="name" style={{ display: 'block', marginBottom: '.5rem' }}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '8px',
                                border: '1px solid #ccc',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="email" style={{ display: 'block', marginBottom: '.5rem' }}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '8px',
                                border: '1px solid #ccc',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="message" style={{ display: 'block', marginBottom: '.5rem' }}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '8px',
                                border: '1px solid #ccc',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ textTransform: 'none' }}>
                        Submit
                    </Button>
                </form>
            </motion.div>
        </section>
    );
}
export default ContactUs;