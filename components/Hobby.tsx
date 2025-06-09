"use client";

import React from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Grid,
  Stack,
  List,
  ListItem,
  Fade,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const GradientBox = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-50%",
    right: "-50%",
    width: "100%",
    height: "100%",
    background:
      "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 50%)",
    animation: "float 6s ease-in-out infinite",
  },
  "@keyframes float": {
    "0%, 100%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-20px)" },
  },
}));

export default function Hobby() {
  return (
    <GradientBox>
      <Container maxWidth="lg" sx={{ py: 10, position: "relative", zIndex: 1 }}>
        <Fade in timeout={1000}>
          <Box textAlign="center">
            <Box
              sx={{
                color: "white",
              }}
            >
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                Beyond the Code
              </Typography>

              <Typography variant="h6" sx={{ mx: "auto", lineHeight: 1.7 }}>
                I believe that the best developers are well-rounded individuals
                who bring diverse perspectives to their work.
              </Typography>
            </Box>

            <Grid container alignItems="center" spacing={8} mt={6}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Box
                  sx={{
                    lineHeight: 1.7,
                    textAlign: "left",
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h3"
                    color="white"
                    gutterBottom
                    sx={{ fontWeight: 700, mb: 2 }}
                  >
                    My Passion for Cultural Exchange
                  </Typography>
                  <Typography
                    component="div"
                    variant="body1"
                    sx={{
                      color: "white",
                      mb: 2,
                    }}
                  >
                    As an active member of the Erasmus Student Network (ESN),
                    I’ve had the incredible opportunity to connect with students
                    from around the world, support international exchange
                    experiences, and contribute to a vibrant, multicultural
                    community. Being part of ESN has allowed me to:
                  </Typography>

                  <List
                    sx={{
                      listStyleType: "disc",
                      color: "white",
                      pl: 2,
                    }}
                    disablePadding
                  >
                    {[
                      "Develop strong interpersonal and teamwork skills",
                      "Improve my cross-cultural communication",
                      "Organize and participate in events that welcome and integrate international students",
                      "Build lasting friendships and professional networks across Europe",
                    ].map((item, idx) => (
                      <ListItem
                        key={idx}
                        disableGutters
                        sx={{ display: "list-item", p: 0 }}
                      >
                        <Typography>{item}</Typography>
                      </ListItem>
                    ))}
                  </List>
                  <Typography variant="body1" sx={{ color: "white", mt: 2 }}>
                    Being involved in ESN reflects my passion for learning
                    beyond the classroom, embracing diversity, and supporting
                    others in their journey — values that deeply resonate with
                    both my academic and career goals.
                  </Typography>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 5 }} display="flex">
                <Box
                  component="img"
                  src="/esn.JPG"
                  alt="Hobby or Personal Interest"
                  sx={{
                    width: 350,
                    height: 350,
                    objectFit: "cover",
                    borderRadius: "50%",
                    boxShadow: 3,
                    border: "8px solid white",
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Container>
    </GradientBox>
  );
}
