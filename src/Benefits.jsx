import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const Badge = ({ label, color = "#00A2E8" }) => (
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

const benefits = [
    {
        icon: "🎯",
        title: "Regulation Activities",
        description: "Tailored regulating activities that deliver consistent and reliable support for every student.",
        color: "#00A2E8",
    },
    {
        icon: "📋",
        title: "Administrative Support",
        description: "Streamlines reports, action plans, and data sharing to meaningfully ease administrator workload.",
        color: "#0066B3",
    },
    {
        icon: "📊",
        title: "Data-Driven Insights",
        description: "Actionable insights at every level — student, classroom, or school-wide.",
        color: "#0080CC",
    },
];

const Benefits = ({ isDesktop }) => {
    return (
        <section style={{ backgroundColor: "#fff", padding: "5rem 2rem" }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{ textAlign: "center", marginBottom: "3rem" }}
            >
                <Badge label="What We Offer" />
                <Typography variant="h4" style={{ fontSize: "2rem", color: "#0A2540" }}>
                    Everything your school needs
                </Typography>
            </motion.div>

            <div style={{
                display: "flex",
                flexDirection: isDesktop ? "row" : "column",
                justifyContent: "center",
                maxWidth: "1100px",
                margin: "0 auto",
                gap: "2rem",
            }}>
                {benefits.map((benefit, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 0.6 }}
                        whileHover={{ y: -6 }}
                        style={{
                            flex: 1,
                            padding: "2rem",
                            backgroundColor: "#fff",
                            borderRadius: "16px",
                            boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                            border: "1px solid rgba(0,162,232,0.12)",
                            borderTop: `4px solid ${benefit.color}`,
                            cursor: "default",
                            transition: "box-shadow 0.3s ease",
                        }}
                    >
                        <div style={{ fontSize: "2.4rem", marginBottom: "1rem" }}>
                            {benefit.icon}
                        </div>
                        <Typography variant="h6" style={{ marginBottom: "0.75rem", color: "#0A2540", fontSize: "1.05rem" }}>
                            {benefit.title}
                        </Typography>
                        <Typography variant="body2" style={{ color: "#546E7A", lineHeight: 1.75 }}>
                            {benefit.description}
                        </Typography>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Benefits;
