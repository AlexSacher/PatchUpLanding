import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

const ContactUs = () => {
    return (
        <section style={{
            background: "linear-gradient(135deg, #0A2540 0%, #0066B3 100%)",
            padding: "6rem 2rem",
        }}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{
                    maxWidth: "600px",
                    margin: "0 auto",
                    background: "white",
                    padding: "3rem",
                    borderRadius: "20px",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.28)",
                }}
            >
                <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                    <div style={{
                        display: "inline-block",
                        background: "rgba(0,162,232,0.1)",
                        color: "#00A2E8",
                        padding: "0.35rem 1rem",
                        borderRadius: "999px",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "0.75rem",
                    }}>
                        Contact
                    </div>
                    <Typography variant="h4" style={{ color: "#0A2540", fontSize: "1.9rem", marginBottom: "0.5rem" }}>
                        Get in Touch
                    </Typography>
                    <Typography variant="body2" style={{ color: "#546E7A", lineHeight: 1.7 }}>
                        Ready to transform behavioral support at your school? Reach out.
                    </Typography>
                </div>

                <form action="https://formspree.io/f/xvgayygr" method="POST">
                    {[
                        { id: "name", label: "Name", type: "text" },
                        { id: "email", label: "Email", type: "email" },
                    ].map(({ id, label, type }) => (
                        <div key={id} style={{ marginBottom: "1.25rem" }}>
                            <label htmlFor={id} style={{
                                display: "block",
                                marginBottom: "0.4rem",
                                fontSize: "0.88rem",
                                fontWeight: 600,
                                color: "#0A2540",
                                fontFamily: "Montserrat, sans-serif",
                            }}>
                                {label}
                            </label>
                            <input
                                type={type}
                                id={id}
                                name={id}
                                style={{
                                    width: "100%",
                                    padding: "0.85rem 1rem",
                                    borderRadius: "10px",
                                    border: "1.5px solid #e0e0e0",
                                    fontSize: "0.95rem",
                                    fontFamily: "Montserrat, sans-serif",
                                    outline: "none",
                                    boxSizing: "border-box",
                                    transition: "border-color 0.2s",
                                    color: "#0A2540",
                                }}
                                onFocus={e => (e.target.style.borderColor = "#00A2E8")}
                                onBlur={e => (e.target.style.borderColor = "#e0e0e0")}
                            />
                        </div>
                    ))}
                    <div style={{ marginBottom: "1.75rem" }}>
                        <label htmlFor="message" style={{
                            display: "block",
                            marginBottom: "0.4rem",
                            fontSize: "0.88rem",
                            fontWeight: 600,
                            color: "#0A2540",
                            fontFamily: "Montserrat, sans-serif",
                        }}>
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            style={{
                                width: "100%",
                                padding: "0.85rem 1rem",
                                borderRadius: "10px",
                                border: "1.5px solid #e0e0e0",
                                fontSize: "0.95rem",
                                fontFamily: "Montserrat, sans-serif",
                                outline: "none",
                                boxSizing: "border-box",
                                resize: "vertical",
                                transition: "border-color 0.2s",
                                color: "#0A2540",
                            }}
                            onFocus={e => (e.target.style.borderColor = "#00A2E8")}
                            onBlur={e => (e.target.style.borderColor = "#e0e0e0")}
                        />
                    </div>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            textTransform: "none",
                            background: "linear-gradient(135deg, #00A2E8 0%, #0066B3 100%)",
                            color: "white",
                            fontWeight: 700,
                            fontSize: "1rem",
                            py: 1.5,
                            borderRadius: "10px",
                            boxShadow: "0 4px 20px rgba(0,162,232,0.3)",
                            "&:hover": {
                                background: "linear-gradient(135deg, #008FD0 0%, #0055A0 100%)",
                                boxShadow: "0 8px 30px rgba(0,162,232,0.5)",
                                transform: "translateY(-1px)",
                            },
                            transition: "all 0.2s ease",
                        }}
                    >
                        Send Message
                    </Button>
                </form>
            </motion.div>
        </section>
    );
};

export default ContactUs;
