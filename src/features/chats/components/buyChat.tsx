import React from "react";
import { Box, Paper, Typography, Stack, Avatar, Badge } from "@mui/material";
import { blue } from "@mui/material/colors";

const messages = [
  {
    id: 1,
    name: "John Doe",
    avatar: "JD",
    message: "Is this item still available?",
    product: { icon: "📱", label: "iPhone 13 Pro - 128GB" },
    unread: 2,
    status: ["✓✓"],
    time: "2m ago",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    avatar: "SW",
    message: "Thanks for the quick response!",
    product: { icon: "🚗", label: "Honda City 2019" },
    unread: 0,
    status: ["✓✓"],
    time: "1h ago",
  },
  {
    id: 3,
    name: "Mike Johnson",
    avatar: "MJ",
    message: "Can we meet tomorrow?",
    product: { icon: "🏠", label: "2BHK Apartment" },
    unread: 0,
    status: [],
    time: "3h ago",
  },
];

const BuyChat: React.FC = () => {
  return (
    <Stack spacing={2}>
      {messages.map((msg) => (
        <Paper
          key={msg.id}
          elevation={0}
          sx={{
            p: 2,
            borderRadius: 3,
            display: "flex",
            alignItems: "flex-start",
            position: "relative",
          }}
        >
          <Avatar
            sx={{
              bgcolor: blue[600],
              width: 56,
              height: 56,
              fontWeight: 700,
              fontSize: 24,
              mr: 2,
            }}
          >
            {msg.avatar}
          </Avatar>
          <Box flex={1} minWidth={0}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6" fontWeight={700}>
                {msg.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {msg.time}
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary" mb={1}>
              {msg.message}
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <Paper
                elevation={0}
                sx={{
                  bgcolor: "#23272f",
                  color: "#fff",
                  borderRadius: 2,
                  px: 1.5,
                  py: 0.5,
                  display: "flex",
                  alignItems: "center",
                  mr: 1,
                }}
              >
                <span style={{ fontSize: 20, marginRight: 8 }}>
                  {msg.product.icon}
                </span>
                <Typography variant="body2">{msg.product.label}</Typography>
              </Paper>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              {msg.unread > 0 && (
                <Badge
                  badgeContent={msg.unread}
                  color="primary"
                  sx={{
                    "& .MuiBadge-badge": { fontWeight: 700, fontSize: 14 },
                  }}
                />
              )}
              {msg.status.map((s, i) => (
                <Typography
                  key={i}
                  variant="body2"
                  color="success.main"
                  fontWeight={700}
                >
                  {s}
                </Typography>
              ))}
            </Box>
          </Box>
        </Paper>
      ))}
    </Stack>
  );
};

export default BuyChat;
