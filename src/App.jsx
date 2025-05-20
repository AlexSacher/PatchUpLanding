import React from "react";
import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useMediaQuery } from '@mui/material';
import ContactUs from "./ContactUs";
import ForStudents from "./ForStudents";
import ForAdmins from "./ForAdmins";
import ForDivisions from "./ForDivisions";
import Benefits from "./Benefits";
import TopPart from "./TopPart";
import Header from "./Header";
export default function LandingPage() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(min-width:600px) and (max-width:900px)');
  const isDesktop = useMediaQuery('(min-width:900px)');
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f5f5f5' }}>


      <Header isDesktop={isDesktop} />
      <TopPart isDesktop={isDesktop} />
      <Benefits isDesktop={isDesktop} />
      <ForStudents isDesktop={isDesktop} />
      <ForAdmins isDesktop={isDesktop} />
      <ForDivisions isDesktop={isDesktop} />
      <ContactUs />


      <footer style={{ textAlign: "center", padding: "2rem", backgroundColor: "#eee" }}>
        <p>&copy; 2025 PatchUp. All rights reserved.</p>
      </footer>
    </div>
  );
}
