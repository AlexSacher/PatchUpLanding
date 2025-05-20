import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

const TopPart = ({ isDesktop }) => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "4rem 2rem",
                gap: "3rem",
            }}
        >
            {/* Full-width heading */}
            <Typography
                variant="h4"
                style={{
                    fontSize: "3rem",
                    marginBottom: "1rem",
                    textAlign: isDesktop ? "left" : "center",
                    width: "100%",
                    maxWidth: "900px",
                }}
            >
                Supporting <span style={{ color: '#00A2E8' }}> students</span>
                <br />
                Empowering <span style={{ color: '#00A2E8' }}> educators </span>
            </Typography>

            {/* Content + image in row if desktop, stacked if not */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: isDesktop ? "row" : "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "3rem",
                    width: "100%",
                    maxWidth: "900px",
                }}
            >
                <motion.div
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{ maxWidth: "600px" }}
                >
                    <Typography variant="h4" style={{ fontSize: "1.5rem", marginBottom: "4rem", textAlign: isDesktop ? "left" : "center" }}>
                        Bridge the gap between classroom disruption and <span style={{ color: '#00A2E8' }}>student support </span>and transform behavioral intervention with <span style={{ color: '#00A2E8' }}>data-driven insights</span>.
                    </Typography>
                    {/* <Typography variant="h5" style={{ fontSize: "1.2rem", marginBottom: "1rem", textAlign: isDesktop ? "left" : "center" }}>
                        PatchUp empowers schools to respond faster, act smarter, and lighten the administrative burden.
                    </Typography> */}
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() =>
                            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
                        }
                        sx={{
                            textTransform: "none",
                            backgroundColor: "#00A2E8",
                            color: "white",
                            fontSize: "1.2rem",
                            display: "block",        // Ensures it respects horizontal margin
                            mx: isDesktop ? "1px" : "auto",              // Horizontally centers it
                        }}
                    >
                        Contact Us
                    </Button>
                </motion.div>

                {isDesktop && (
                    <motion.img
                        src="/landing trans.png"
                        alt="Illustration"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        style={{ width: "400px", borderRadius: "12px" }}
                    />
                )}
            </Box>
        </motion.section>
    );
};

export default TopPart;