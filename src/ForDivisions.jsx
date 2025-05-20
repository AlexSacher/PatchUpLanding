import React from "react";
import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

const ForStudents = ({ isDesktop }) => {
    const paragraphs = [
        "Capture day-to-day patterns at all levels and yield insights from new, meaningful data.",
        "Leverage trends across schools to proactively identify issues, allocate resources, and shape policy."
    ]
    return (
        <section
            style={{
                // height: '80vh', 
                backgroundColor: '#e3f2fd',
                padding: '1rem 2rem'
            }}
        >

            <div style={{ display: 'flex', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>

                {/* Left column */}

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <Typography
                        variant="h2"
                        style={{
                            fontSize: '2rem',
                            // marginBottom: '1rem'
                            textAlign: isDesktop ? 'left' : 'center'

                        }}
                    >
                        Divisions
                    </Typography>
                    {["New Data & Insights", "Identify Systemic Needs"].map((text, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.3, duration: 0.8 }}
                            viewport={{ once: true }}
                            style={{
                                background: '#ffffff',
                                padding: '2rem',
                                borderRadius: '12px',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                textAlign: 'center'
                            }}
                        >
                            <Typography variant="h6" style={{ marginBottom: '1rem' }}>
                                {text}
                            </Typography>
                            <Typography variant="body2" >
                                {paragraphs[index]}
                            </Typography>

                        </motion.div>
                    ))}
                </div>

                {/* Right column */}
                {isDesktop && (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3rem', justifyContent: 'center' }}>


                        <motion.img
                            src="/division trans2.png"
                            alt="Illustration"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1.0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            style={{ width: "400px", borderRadius: "12px" }}
                        />


                    </div>
                )}
            </div>
        </section>
    )
}
export default ForStudents;
