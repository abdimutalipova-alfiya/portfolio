"use client";
import Image from "next/image";

import React from "react";
import { Box, Container, Typography, Button, Stack, Fade } from "@mui/material";
import { styled } from "@mui/material/styles";
import DownloadIcon from "@mui/icons-material/Download";
import WorkIcon from "@mui/icons-material/Work";
import { useRouter } from "next/navigation";

const GradientBox = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  minHeight: "100vh",
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

export default function Hero() {
  const router = useRouter();

  const routeToProjects = (): void => {
    router.push("/projects?scroll=projects");
  };

  const handleDownloadCV = (): void => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <GradientBox id="home">
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box textAlign="center" color="white">
            <Box
              sx={{
                width: 300,
                height: 300,
                mx: "auto",
                mb: 4,
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid rgba(255,255,255,0.3)",
              }}
            >
              <Image
                src={`/profile.jpg`}
                alt="Alfiya Abdimutalipova"
                width={300}
                height={300}
                style={{ objectFit: "cover", borderRadius: "50%" }}
                priority
              />
            </Box>

            <Typography variant="h1" component="h1" gutterBottom>
              Alfiya Abdimutalipova
            </Typography>

            <Typography
              variant="h5"
              component="p"
              sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: "auto" }}
            >
              Applied Computer Science Student
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<WorkIcon />}
                onClick={routeToProjects}
                sx={{
                  bgcolor: "white",
                  color: "primary.main",
                  "&:hover": {
                    bgcolor: "grey.100",
                  },
                }}
              >
                View Projects
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<DownloadIcon />}
                onClick={handleDownloadCV}
                sx={{
                  borderColor: "white",
                  color: "white",
                  "&:hover": {
                    borderColor: "white",
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Download CV
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Container>
    </GradientBox>
  );
}
