import { useMediaQuery } from "@mui/material";
import ContactUs from "./ContactUs";
import ForStudents from "./ForStudents";
import ForAdmins from "./ForAdmins";
import ForDivisions from "./ForDivisions";
import Benefits from "./Benefits";
import TopPart from "./TopPart";
import Header from "./Header";

export default function LandingPage() {
    const isDesktop = useMediaQuery("(min-width:900px)");

    return (
        <div style={{ fontFamily: "'Montserrat', sans-serif", backgroundColor: "#fff" }}>
            <Header isDesktop={isDesktop} />
            <TopPart isDesktop={isDesktop} />
            <Benefits isDesktop={isDesktop} />
            <ForStudents isDesktop={isDesktop} />
            <ForAdmins isDesktop={isDesktop} />
            <ForDivisions isDesktop={isDesktop} />
            <ContactUs />

            <footer style={{
                background: "#0A2540",
                color: "rgba(255,255,255,0.6)",
                textAlign: "center",
                padding: "2rem",
                fontSize: "0.9rem",
                fontFamily: "'Montserrat', sans-serif",
            }}>
                © 2025 PatchUp. All rights reserved.
            </footer>
        </div>
    );
}
