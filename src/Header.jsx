import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const Header = ({ isDesktop }) => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: "sticky",
                top: 0,
                zIndex: 100,
                padding: "0.85rem 2rem",
                background: "linear-gradient(135deg, #0A2540 0%, #0066B3 100%)",
                boxShadow: "0 2px 20px rgba(0,0,0,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Box
                component="img"
                src={"patchup_blue_trans_lower.png"}
                alt="PatchUp Logo"
                sx={{ height: "3rem" }}
            />
        </motion.header>
    );
};

export default Header;
