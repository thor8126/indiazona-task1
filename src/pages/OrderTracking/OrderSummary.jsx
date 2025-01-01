import React from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";

function OrderSummary() {
  return (
    <Paper elevation={0} sx={{ p: 3 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h6">Order Summary</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>MRP</Typography>
            <Typography>₹ 13,349.54</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Discount</Typography>
            <Typography color="error.main">(20%)</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Delivery</Typography>
            <Typography color="success.main">FREE</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Tax</Typography>
            <Typography>₹ 149.54</Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography fontWeight="bold">Total</Typography>
            <Typography fontWeight="bold">₹ 11,139.33</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default OrderSummary;
