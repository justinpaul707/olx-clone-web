import BuyChat from "@app/features/chats/components/buyChat";
import { Box, Container, Paper, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { blue } from "@mui/material/colors";
import SellChat from "@app/features/chats/components/sellChat";

const Chats: React.FC = () => {
  return (
    <>
      <Container>
        <Box
          sx={{ bgcolor: "#f5f6fa", minHeight: "100vh", p: { xs: 0, md: 2 } }}
        >
          <Paper
            elevation={0}
            sx={{ bgcolor: "#fff", borderRadius: 3, mb: 3, p: 2 }}
          >
            <Typography variant="h5" fontWeight={700} align="center" mb={2}>
              Inbox
            </Typography>
            <Tabs
              value={1}
              centered
              sx={{
                mb: 2,
                "& .MuiTabs-flexContainer": { justifyContent: "center" },
                "& .MuiTab-root": {
                  minWidth: 120,
                  fontWeight: 600,
                  fontSize: 18,
                },
              }}
            >
              <Tab label="All" value={0} />
              <Tab
                label="Buying"
                value={1}
                sx={{
                  bgcolor: blue[600],
                  color: "#fff",
                  borderRadius: 2,
                  mx: 2,
                }}
              />
              <Tab label="Selling" value={2} />
            </Tabs>
          </Paper>
          <SellChat />
          <BuyChat />
        </Box>
      </Container>
    </>
  );
};

export default Chats;
