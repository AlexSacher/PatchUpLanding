import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Header = ({ isDesktop }) => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ padding: "1rem", backgroundColor: "#00A2E8", color: "white" }}
        >
            <Box component="img" src={'patchup white.png'} alt="Logo" sx={{ height: '4rem', marginTop: '2px', alignItems: 'center' }} />
        </motion.header>
    )
}
export default Header;