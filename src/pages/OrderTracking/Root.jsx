import React from "react";
import { Box, Container, Stack, useTheme, useMediaQuery } from "@mui/material";

import Tracker from "./Tracker";
import DeliveryInfo from "./DeliveryInfo";
import OrderSummary from "./OrderSummary";
import ProductDetail from "./ProductDetail";
import BreadCrumbs from "./BreadCrumbs";

const OrderTracking = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "100vh",
        py: { xs: 2, md: 3 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Stack spacing={{ xs: 2, md: 3 }}>
        <BreadCrumbs />

        {isMobile ? (
          // Mobile Layout
          <Stack spacing={2}>
            <ProductDetail />
            <Tracker />
            <DeliveryInfo />
            <OrderSummary />
          </Stack>
        ) : (
          // Desktop Layout
          <Box
            sx={{
              display: "flex",
              gap: { md: 2, lg: 3 },
            }}
          >
            {/* LeftSection */}
            <Box
              sx={{
                width: { md: "35%", lg: "30%" },
                minWidth: { md: "300px" },
              }}
            >
              <ProductDetail />
            </Box>

            {/* RightSection */}
            <Stack
              spacing={2}
              sx={{
                flex: 1,
              }}
            >
              <Tracker />
              <DeliveryInfo />
              <OrderSummary />
            </Stack>
          </Box>
        )}
      </Stack>
    </Container>
  );
};

export default OrderTracking;
