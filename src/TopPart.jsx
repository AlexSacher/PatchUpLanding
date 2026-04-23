import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

const gradientText = {
    background: "linear-gradient(90deg, #00C8FF, #00A2E8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
};

const TopPart = ({ isDesktop }) => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
                background: "linear-gradient(135deg, #0A2540 0%, #003d6e 60%, #005a9e 100%)",
                padding: isDesktop ? "7rem 2rem 8rem" : "4rem 2rem 5rem",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Decorative glow blobs */}
            <div style={{
                position: "absolute", width: "700px", height: "700px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(0,162,232,0.12) 0%, transparent 70%)",
                top: "-200px", right: "-150px", pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute", width: "400px", height: "400px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(0,200,255,0.08) 0%, transparent 70%)",
                bottom: "-100px", left: "-80px", pointerEvents: "none",
            }} />

            <Box sx={{
                display: "flex",
                flexDirection: isDesktop ? "row" : "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "4rem",
                maxWidth: "1100px",
                margin: "0 auto",
                position: "relative",
            }}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    style={{ flex: 1 }}
                >
                    <Typography
                        variant="h1"
                        style={{
                            fontSize: isDesktop ? "4rem" : "2.6rem",
                            color: "white",
                            lineHeight: 1.15,
                            marginBottom: "1.5rem",
                        }}
                    >
                        Supporting{" "}
                        <span style={gradientText}>students</span>
                        <br />
                        Empowering{" "}
                        <span style={gradientText}>educators</span>
                    </Typography>

                    <Typography
                        style={{
                            color: "rgba(255,255,255,0.75)",
                            fontSize: isDesktop ? "1.15rem" : "1rem",
                            lineHeight: 1.8,
                            marginBottom: "2.5rem",
                            maxWidth: "520px",
                            fontFamily: "Montserrat, sans-serif",
                            fontWeight: 500,
                        }}
                    >
                        Bridge the gap between classroom disruption and{" "}
                        <span style={{ color: "#00C8FF", fontWeight: 700 }}>student support</span>
                        {" "}— transform behavioral intervention with{" "}
                        <span style={{ color: "#00C8FF", fontWeight: 700 }}>data-driven insights</span>.
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                        onClick={() =>
                            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
                        }
                        sx={{
                            textTransform: "none",
                            background: "white",
                            color: "#0066B3",
                            fontWeight: 700,
                            fontSize: "1rem",
                            borderRadius: "50px",
                            px: 4,
                            py: 1.5,
                            boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                            "&:hover": {
                                background: "#00A2E8",
                                color: "white",
                                transform: "translateY(-2px)",
                                boxShadow: "0 8px 30px rgba(0,162,232,0.45)",
                            },
                            transition: "all 0.25s ease",
                        }}
                    >
                        Get in Touch →
                    </Button>
                </motion.div>

                {isDesktop && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        style={{ flex: 1, display: "flex", justifyContent: "center" }}
                    >
                        <img
                            src="landing trans.png"
                            alt="PatchUp Illustration"
                            style={{
                                width: "460px",
                                maxWidth: "100%",
                                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.35))",
                            }}
                        />
                    </motion.div>
                )}
            </Box>
        </motion.section>
    );
};

export default TopPart;
