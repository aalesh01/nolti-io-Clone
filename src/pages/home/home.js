import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";
import TdCards from "../../components/3dCards/tdCards";

const HomePage = () => {
  return (
    <Box sx={{ width: "80%", margin: "5% auto" }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Feedback boards your users will love.
      </Typography>
      <Typography
        sx={{ width: "50%", margin: "5% auto" }}
        variant="body1"
        display="block"
        gutterBottom
      >
        Nolt is a beautiful, collaborative place for all your user requests – no
        more outdated spreadsheets or chaotic Trello boards. Give your customers
        a voice and gain priceless insights. Everything for just $25/month per
        board.
      </Typography>
      <TdCards/>
      <Typography variant="h4" component="h2" gutterBottom>
        Nolt powers user research at thousands <br/> of companies around the globe.{" "}
      </Typography>
      <Typography
        sx={{ width: "50%", margin: "5% auto" }}
        variant="body1"
        display="block"
        gutterBottom
      >
        Teams that switch to Nolt have a better understanding of what their
        customers really care about. They make strategic decisions faster and
        build better customer relationships while saving hundreds of hours of
        unnecessary work.{" "}
      </Typography>
    </Box>
  );
};

export default HomePage;
