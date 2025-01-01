import React from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

export default function DeliveryInfo() {
  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      <Paper elevation={0} sx={{ p: 3, flex: 1 }}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "80%",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">Delivery</Typography>
          <Button
            sx={{
              fontSize: "12px",
              fontWeight: "regular",
              padding: "4px 14px",
              textTransform: "none",
              borderColor: "#D1D5DB",
              color: "#6B7280",
              "&:hover": {
                borderColor: "#455F76",
              },
            }}
            variant="outlined"
          >
            Change
          </Button>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Address
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: "medium" }}>
            847 Jewess Bridge Apt.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: "medium" }}>
            174 London, UK
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: "medium" }}>
            474-769-3919
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: "medium" }}>
            Mob: 7766449345
          </Typography>
        </Box>
      </Paper>
      <Paper elevation={0} sx={{ p: 3, flex: 1 }}>
        <Typography variant="h6">Need Help</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Button
            startIcon={<ChatOutlinedIcon />}
            fullWidth
            sx={{
              justifyContent: "flex-start",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "medium",
            }}
          >
            Chat with us
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.18 13.2992C15.0946 13.2138 15.0406 13.0969 15.0406 12.9621L15.0406 7.98178L10.0604 7.98178C9.79966 7.98178 9.58391 7.76603 9.58391 7.50533C9.58391 7.24463 9.79966 7.02887 10.0604 7.02887L15.5171 7.02887C15.7778 7.02887 15.9935 7.24463 15.9935 7.50533L15.9935 12.9621C15.9935 13.2228 15.7778 13.4385 15.5171 13.4385C15.3867 13.443 15.2654 13.3846 15.18 13.2992Z"
                fill="#455F76"
              />
              <path
                d="M7.53875 15.4836C7.35446 15.2993 7.35446 14.9937 7.53875 14.8094L15.1036 7.24458C15.2878 7.0603 15.5935 7.0603 15.7778 7.24458C15.9621 7.42887 15.9621 7.73452 15.7778 7.91881L8.21297 15.4836C8.02868 15.6679 7.72303 15.6679 7.53875 15.4836Z"
                fill="#455F76"
              />
            </svg>
          </Button>
          <Button
            startIcon={<CancelOutlinedIcon />}
            fullWidth
            sx={{
              justifyContent: "flex-start",
              textTransform: "none",
              color: "error.main",
              borderColor: "error.main",
              fontSize: "16px",
              fontWeight: "medium",
            }}
          >
            Cancel Order
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8722 13.0681C14.7868 12.9827 14.7329 12.8658 14.7329 12.731L14.7329 7.7507L9.75262 7.7507C9.49192 7.7507 9.27617 7.53495 9.27617 7.27425C9.27617 7.01355 9.49192 6.79779 9.75262 6.79779L15.2094 6.79779C15.4701 6.79779 15.6858 7.01355 15.6858 7.27425L15.6858 12.731C15.6858 12.9917 15.4701 13.2074 15.2094 13.2074C15.079 13.2119 14.9576 13.1535 14.8722 13.0681Z"
                fill="#FF5252"
              />
              <path
                d="M7.23101 15.2525C7.04672 15.0683 7.04672 14.7626 7.23101 14.5783L14.7958 7.0135C14.9801 6.82922 15.2858 6.82922 15.47 7.0135C15.6543 7.19779 15.6543 7.50344 15.47 7.68773L7.90523 15.2525C7.72094 15.4368 7.4153 15.4368 7.23101 15.2525Z"
                fill="#FF5252"
              />
            </svg>
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
