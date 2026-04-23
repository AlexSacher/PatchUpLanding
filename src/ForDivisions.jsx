import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const Badge = ({ label, color = "#0080CC" }) => (
    <div style={{
        display: "inline-block",
        background: `${color}18`,
        color,
        padding: "0.35rem 1rem",
        borderRadius: "999px",
        fontSize: "0.78rem",
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: "0.75rem",
    }}>
        {label}
    </div>
);

const cards = [
    {
        title: "New Data & Insights",
        description: "Capture day-to-day patterns at all levels and yield insights from new, meaningful data.",
    },
    {
        title: "Identify Systemic Needs",
        description: "Leverage trends across schools to proactively identify issues, allocate resources, and shape policy.",
    },
];

const ForDivisions = ({ isDesktop }) => {
    return (
        <section style={{ backgroundColor: "#F7FBFF", padding: "5rem 2rem" }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "4rem",
                maxWidth: "1100px",
                margin: "0 auto",
                flexDirection: isDesktop ? "row" : "column",
            }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <div>
                        <Badge label="For Divisions" color="#0080CC" />
                        <Typography variant="h3" style={{ fontSize: "2.2rem", color: "#0A2540", lineHeight: 1.2 }}>
                            District-wide visibility
                        </Typography>
                    </div>
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            style={{
                                background: "#fff",
                                padding: "1.5rem 1.75rem",
                                borderRadius: "14px",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                                borderLeft: "4px solid #0080CC",
                            }}
                        >
                            <Typography variant="h6" style={{ marginBottom: "0.5rem", color: "#0A2540", fontSize: "1rem" }}>
                                {card.title}
                            </Typography>
                            <Typography variant="body2" style={{ color: "#546E7A", lineHeight: 1.75 }}>
                                {card.description}
                            </Typography>
                        </motion.div>
                    ))}
                </div>

                {isDesktop && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        style={{ flex: 1, display: "flex", justifyContent: "center" }}
                    >
                        <img
                            src="division trans2.png"
                            alt="Divisions"
                            style={{
                                width: "420px",
                                maxWidth: "100%",
                                filter: "drop-shadow(0 10px 30px rgba(0,128,204,0.18))",
                            }}
                        />
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default ForDivisions;
