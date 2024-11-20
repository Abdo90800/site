"use client";

import Link from "../atoms/Link";
import Buttonn from "../Atoms/Buttonn";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isDesktop = useMediaQuery("(min-width:700px)");
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="NAVBAR">
      <div className="navbar-content">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="logo" />
        </Link>
        {isDesktop && (
          <>
            <Link href="#services">Services</Link>
            <Link href="#work">Work</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#faqs">FAQs</Link>
          </>
        )}
        <Buttonn>We're here</Buttonn>

        <IconButton
          sx={{
            display: { xs: "block", lg: "none",  },
          }}
          onClick={toggleDrawer("bottom", true)}
        >
          <CiMenuFries className="w-[27px] h-[23px] text-[#121212] font-[700]"/>
        </IconButton>
      </div>

      {isMobile && (
        <Drawer
          anchor="bottom" // استخدم القيمة الصحيحة "bottom"
          open={state["bottom"]} // تأكد من استخدام المفتاح الصحيح
          onClose={toggleDrawer("bottom", false)}
          sx={{
            "& .MuiPaper-root": {
              height: "60%",
              borderRadius: "24px 24px 0px 0px",
              backgroundColor: "#182A48",
              color: "#E0E0E0",
              padding: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "64px",
            },
          }}
        >
          <Box
            sx={{
              backgroundColor: "#243551",
              width: "100%",
              height: "36px",
              padding: "16px",
              position: "absolute",
              top: "0",
              left: "0",
              borderRadius: "24px 24px 0px 0px ",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: "#E0E0E0",
                width: "32px",
                height: "4px",
                borderRadius: "100px",
              }}
            ></div>
          </Box>
          <Link href="#services">
            <Typography
              component="a"
              sx={{ fontSize: "24px", fontWeight: "400", lineHeight: "37px" }}
            >
              Services
            </Typography>
          </Link>
          <Link href="#work">
            <Typography
              component="a"
              sx={{ fontSize: "24px", fontWeight: "400", lineHeight: "37px" }}
            >
              Work
            </Typography>
          </Link>
          <Link href="#pricing">
            <Typography
              component="a"
              sx={{ fontSize: "24px", fontWeight: "400", lineHeight: "37px" }}
            >
              Pricing
            </Typography>
          </Link>
          <Link href="#faqs">
            <Typography
              component="a"
              sx={{ fontSize: "24px", fontWeight: "400", lineHeight: "37px" }}
            >
              FAQs
            </Typography>
          </Link>
        </Drawer>
      )}
    </div>
  );
};

export default Navbar;
