import React from "react";
import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Benefits = ({ isDesktop }) => {
    const benefitTitle = [
        "Regulation Activities",
        "Administrative Support",
        "Data-Driven Insights"
    ];
    const benefitDescription = [
        "Tailored regulating activities that deliver consistent + reliable support",
        "Streamlines reports, action plans, and data sharing to ease admin workload",
        "Actionable insights at every level—student, classroom, or school"
    ];
    return (
        <section style={{ backgroundColor: '#fff', padding: '4rem 2rem' }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: isDesktop ? 'row' : 'column',
                    justifyContent: 'space-between',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    gap: '2rem'
                }}
            >
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{ flex: 1, padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '12px', boxShadow: '0 2px 2px rgba(0,0,0,0.1)' }}
                    >

                        <Typography variant="h6" style={{ marginBottom: '1rem' }}>
                            {benefitTitle[i]}
                        </Typography>
                        <Typography variant="body2" >
                            {benefitDescription[i]}
                        </Typography>

                    </motion.div>
                ))}
            </div>
        </section>
    );
}
export default Benefits;