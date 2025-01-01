import React from "react";
import { Box, Container, Stack } from "@mui/material";

import Tracker from "./Tracker";
import DeliveryInfo from "./DeliveryInfo";
import OrderSummary from "./OrderSummary";
import ProductDetail from "./ProductDetail";
import BreadCrumbs from "./BreadCrumbs";

const OrderTracking = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{ minHeight: "100vh", py: 3, border: "1px solid red" }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <BreadCrumbs />

        <Box sx={{ display: "flex", gap: 2 }}>
          {/* LeftSection */}
          <ProductDetail />

          {/* RightSection */}
          <Stack sx={{ flex: 1 }}>
            <Tracker />
            <DeliveryInfo />
            <OrderSummary />
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default OrderTracking;
