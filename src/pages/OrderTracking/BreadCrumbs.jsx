import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function BreadCrumbs() {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize={isMobile ? "small" : "large"} />}
      sx={{
        mb: 1,
        "& .MuiBreadcrumbs-separator": {
          mx: isMobile ? 0.6 : 1,
        },
      }}
    >
      <Link
        sx={{ fontSize: "0.9rem" }}
        underline="hover"
        color="inherit"
        href="#"
      >
        Home
      </Link>
      <Link
        sx={{ fontSize: "0.9rem" }}
        underline="hover"
        color="inherit"
        href="#"
      >
        Orders
      </Link>
      <Typography sx={{ fontSize: "0.9rem" }} color="inherit">
        Order Tracking
      </Typography>
    </Breadcrumbs>
  );
}

export default BreadCrumbs;
