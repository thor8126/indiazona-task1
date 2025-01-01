import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import img from "./image.png";

function ProductDetail() {
  return (
    <Paper
      elevation={0}
      sx={{
        flex: "0 0 396px",
        p: 3,
        backgroundColor: "#EEF5FA",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box
          sx={{
            padding: 2.5,
            height: 350,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={img} alt="product" style={{ height: "100%" }} />
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "column", paddingX: 1, gap: 1 }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
            SAMSUNG
          </Typography>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "medium", lineHeight: "24px" }}
          >
            SAMSUNG Galaxy F05 - Twilight Blue (64 GB, 4 GB RAM)
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "baseline", gap: 2, paddingX: 1 }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "28px" }}>
            ₹ 11,139.33
          </Typography>
          <Typography sx={{ color: "#FF944E" }}>35% off</Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 1 }}
        >
          <Button
            variant="contained"
            fullWidth
            sx={{
              textTransform: "none",
              bgcolor: "#FF944E",
              height: 48,
              fontSize: "18px",
            }}
          >
            View Product
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              textTransform: "none",
              color: "#E57329",
              height: 48,
              fontSize: "18px",
              fontWeight: "medium",
            }}
          >
            Reorder Product
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default ProductDetail;
