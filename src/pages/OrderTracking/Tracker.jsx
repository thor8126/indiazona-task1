import React, { useState } from "react";
import { Box, Button, Paper, Typography, Collapse } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import ResponsiveStepper from "./ResponsiveStepper";

const steps = ["Order Confirmed", "Shipped", "Out For Delivery", "Delivered"];
const activeStep = 1;
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "0 24px",
  backgroundColor: "#fff",
  borderRadius: "12px",
}));

export default function Tracker() {
  const [expanded, setExpanded] = useState(false);

  return (
    <StyledPaper elevation={0}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontStyle: "normal",
            fontSize: "28px",
            fontWeight: "500",
            color: "#111827",
            lineHeight: "34px",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          Order ID: 3354-6546-5452
        </Typography>
        <Button
          variant="outlined"
          size="small"
          sx={{
            padding: "9px 14px",
            textTransform: "none",
            borderColor: "#455F76",
            color: "#6B7280",
            "&:hover": {
              borderColor: "#D1D5DB",
              backgroundColor: "transparent",
            },
          }}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8872 15.433H5.72763C3.37359 15.433 2.01921 14.0786 2.01921 11.7246V5.27519C2.01921 2.92115 3.37359 1.56677 5.72763 1.56677H10.8872C13.2412 1.56677 14.5956 2.92115 14.5956 5.27519V11.7246C14.5956 14.0786 13.2412 15.433 10.8872 15.433ZM5.72763 2.53418C3.88309 2.53418 2.98662 3.43065 2.98662 5.27519V11.7246C2.98662 13.5691 3.88309 14.4656 5.72763 14.4656H10.8872C12.7317 14.4656 13.6282 13.5691 13.6282 11.7246V5.27519C13.6282 3.43065 12.7317 2.53418 10.8872 2.53418H5.72763Z"
              fill="#455F76"
            />
            <path
              d="M12.4995 6.72638H11.2096C10.2293 6.72638 9.43604 5.9331 9.43604 4.95279V3.66291C9.43604 3.39848 9.65532 3.1792 9.91974 3.1792C10.1842 3.1792 10.4034 3.39848 10.4034 3.66291V4.95279C10.4034 5.3978 10.7646 5.75897 11.2096 5.75897H12.4995C12.7639 5.75897 12.9832 5.97825 12.9832 6.24267C12.9832 6.5071 12.7639 6.72638 12.4995 6.72638Z"
              fill="#455F76"
            />
            <path
              d="M8.3074 9.62855H5.72763C5.46321 9.62855 5.24393 9.40927 5.24393 9.14484C5.24393 8.88041 5.46321 8.66113 5.72763 8.66113H8.3074C8.57183 8.66113 8.79111 8.88041 8.79111 9.14484C8.79111 9.40927 8.57183 9.62855 8.3074 9.62855Z"
              fill="#455F76"
            />
            <path
              d="M10.8872 12.2083H5.72763C5.46321 12.2083 5.24393 11.989 5.24393 11.7246C5.24393 11.4601 5.46321 11.2408 5.72763 11.2408H10.8872C11.1516 11.2408 11.3709 11.4601 11.3709 11.7246C11.3709 11.989 11.1516 12.2083 10.8872 12.2083Z"
              fill="#455F76"
            />
          </svg>
          Invoice
        </Button>
      </Box>

      <Box sx={{ display: "flex", gap: 6 }}>
        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#6B7280",
              fontWeight: "regular",
              mb: 0.5,
            }}
          >
            Order date:{" "}
            <span
              style={{
                fontSize: "18px",
                color: "#111827",
                fontWeight: "semibold",
              }}
            >
              Dec 24, 2024
            </span>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            color: "#FF944E",
          }}
        >
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.375 13.4062H1.75C1.39125 13.4062 1.09375 13.1087 1.09375 12.7499V7.16743C1.09375 6.88743 1.26874 6.64242 1.52249 6.54617C1.78499 6.44992 2.07376 6.52869 2.24876 6.73869C2.78251 7.37744 3.61376 7.73618 4.43626 7.70993C5.13626 7.69243 5.78373 7.42995 6.27373 6.9662C6.50123 6.7737 6.68499 6.54618 6.82499 6.29243C7.09624 5.82868 7.2275 5.32117 7.21875 4.80492C7.20125 3.99992 6.85127 3.26493 6.25627 2.73118C6.04627 2.54743 5.97625 2.25866 6.0725 2.00491C6.16875 1.75116 6.41376 1.57617 6.68501 1.57617H13.125C13.4837 1.57617 13.7812 1.87367 13.7812 2.23242V10.9824C13.7812 12.3299 12.705 13.4062 11.375 13.4062Z"
              fill="#FF944E"
            />
            <path
              d="M16.625 18.6562H15.75C15.3912 18.6562 15.0937 18.3587 15.0937 18C15.0937 17.3962 14.6037 16.9062 14 16.9062C13.3962 16.9062 12.9062 17.3962 12.9062 18C12.9062 18.3587 12.6087 18.6562 12.25 18.6562H8.75C8.39125 18.6562 8.09375 18.3587 8.09375 18C8.09375 17.3962 7.60375 16.9062 7 16.9062C6.39625 16.9062 5.90625 17.3962 5.90625 18C5.90625 18.3587 5.60875 18.6562 5.25 18.6562H4.375C2.56375 18.6562 1.09375 17.1862 1.09375 15.375V12.75C1.09375 12.3912 1.39125 12.0937 1.75 12.0937H11.375C11.9787 12.0937 12.4687 11.6037 12.4687 11V4.875C12.4687 4.51625 12.7662 4.21875 13.125 4.21875H14.735C15.6013 4.21875 16.3975 4.68251 16.8262 5.43501L18.3225 8.05125C18.4363 8.2525 18.4363 8.50625 18.3225 8.7075C18.2088 8.90875 17.99 9.03125 17.7537 9.03125H16.625C16.5025 9.03125 16.4062 9.1275 16.4062 9.25V11.875C16.4062 11.9975 16.5025 12.0937 16.625 12.0937H19.25C19.6087 12.0937 19.9062 12.3912 19.9062 12.75V15.375C19.9062 17.1862 18.4362 18.6562 16.625 18.6562Z"
              fill="#FF944E"
            />
            <path
              d="M7 20.4062C5.67 20.4062 4.59375 19.33 4.59375 18C4.59375 16.67 5.67 15.5938 7 15.5938C8.33 15.5938 9.40625 16.67 9.40625 18C9.40625 19.33 8.33 20.4062 7 20.4062ZM7 16.9062C6.39625 16.9062 5.90625 17.3962 5.90625 18C5.90625 18.6037 6.39625 19.0937 7 19.0937C7.60375 19.0937 8.09375 18.6037 8.09375 18C8.09375 17.3962 7.60375 16.9062 7 16.9062Z"
              fill="#FF944E"
            />
            <path
              d="M14 20.4062C12.67 20.4062 11.5938 19.33 11.5938 18C11.5938 16.67 12.67 15.5938 14 15.5938C15.33 15.5938 16.4062 16.67 16.4062 18C16.4062 19.33 15.33 20.4062 14 20.4062ZM14 16.9062C13.3962 16.9062 12.9062 17.3962 12.9062 18C12.9062 18.6037 13.3962 19.0937 14 19.0937C14.6037 19.0937 15.0937 18.6037 15.0937 18C15.0937 17.3962 14.6037 16.9062 14 16.9062Z"
              fill="#FF944E"
            />
            <path
              d="M19.25 13.4062H16.625C15.785 13.4062 15.0938 12.715 15.0938 11.875V9.25C15.0938 8.41 15.785 7.71875 16.625 7.71875H17.7537C17.99 7.71875 18.2088 7.84125 18.3225 8.05125L19.8188 10.6763C19.8713 10.7725 19.9062 10.8862 19.9062 11V12.75C19.9062 13.1087 19.6087 13.4062 19.25 13.4062ZM16.625 9.03125C16.5025 9.03125 16.4062 9.1275 16.4062 9.25V11.875C16.4062 11.9975 16.5025 12.0937 16.625 12.0937H18.5937V11.175L17.3687 9.03125H16.625Z"
              fill="#FF944E"
            />
          </svg>

          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "medium",
                mb: 0.5,
              }}
            >
              Estimated delivery:{" "}
              <span style={{ fontSize: "16px", fontWeight: "medium" }}>
                Dec 30, 2024
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "100%", padding: 2 }}>
        <ResponsiveStepper steps={steps} activeStep={activeStep} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 2,
          paddingX: 4,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#6B7280",
              lineHeight: 1.5,
              fontWeight: "regular",
            }}
          >
            Tue, 24th Dec
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "regular",
              lineHeight: 1.5,
              color: "grey",
            }}
          >
            at 6:12 AM
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "14px",
            color: "#6B7280",
            lineHeight: 1.5,
          }}
        >
          Expected by, Mon 30th
        </Typography>
      </Box>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box sx={{ px: 4, pb: 2 }}>
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#111827",
                mb: 1,
              }}
            >
              Order Confirmed Tue, 24th Dec '24
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#6B7280",
                pl: 2,
                mb: 0.5,
              }}
            >
              • Your Order has been placed.
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#6B7280",
                pl: 2,
                mb: 0.5,
              }}
            >
              • Tue, 24th Dec '24 - 6:12 am, Seller has processed your order.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#111827",
                mb: 1,
              }}
            >
              Wed, 25th Dec '24 - 7:05pm
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#6B7280",
                pl: 2,
              }}
            >
              • Your item has been picked up by courier partner.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#111827",
                mb: 1,
              }}
            >
              Wed, 25th Dec '24 - 8:12pm
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#6B7280",
                pl: 2,
                mb: 0.5,
              }}
            >
              • Shipped Sun, 15th Sep '24
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#6B7280",
                pl: 2,
              }}
            >
              • Logistics - "Order ID or pick up ID" Your item has been shipped.
            </Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#111827",
                mb: 1,
              }}
            >
              Delivery Expected By Thu 19th Sep
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#6B7280",
                pl: 2,
              }}
            >
              • Item yet to be delivered. Expected by Thu, 19th Sep
            </Typography>
          </Box>
        </Box>
      </Collapse>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          px: 4,
          width: "100%",
          pb: 2,
        }}
      >
        <Button
          onClick={() => setExpanded(!expanded)}
          endIcon={expanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          sx={{
            textTransform: "none",
            color: "#6B7280",
            padding: 0,
            "&:hover": {
              backgroundColor: "transparent",
            },
            textDecoration: "underline",
          }}
        >
          {expanded ? "Hide detailed tracking" : "View detailed tracking"}
        </Button>
      </Box>
    </StyledPaper>
  );
}
