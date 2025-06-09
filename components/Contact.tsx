import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Fade,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  Email as EmailIcon,
  Place as PlaceIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const GradientBox = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color: "white",
}));

const GlassCard = styled(Card)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  color: "white",
  textAlign: "center",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.15)",
    transform: "translateY(-4px)",
  },
}));

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}

export default function Contact() {
  const contactInfo: ContactInfo[] = [
    {
      icon: <PlaceIcon sx={{ fontSize: 40, mb: 2 }} />,
      title: "Place",
      content: "Mechelen 2800, Belgium",
      href: "https://www.google.com/maps/place/Mechelen,+2800+Mechelen,+Belgium",
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40, mb: 2 }} />,
      title: "Email",
      content: "alfiyaabdimutalipova@gmail.com",
      href: "mailto:alfiyaabdimutalipova@gmail.com",
    },

    {
      icon: <LinkedInIcon sx={{ fontSize: 40, mb: 2 }} />,
      title: "LinkedIn",
      content: "Alfiya Abdimutalipova",
      href: "https://www.linkedin.com/in/alfiya-abdimutalipova/",
    },
  ];

  const handleGetInTouch = (): void => {
    // Implement contact form or email logic here
    window.location.href = "mailto:alfiyaabdimutalipova@gmail.com";
  };

  return (
    <GradientBox id="contact" sx={{ pt: 10, pb: 2 }}>
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box textAlign="center" mb={8}>
            <Typography variant="h2" component="h2" gutterBottom>
              Connect with Me
            </Typography>
            <Typography
              variant="h6"
              sx={{ maxWidth: 600, mx: "auto", opacity: 0.9 }}
            >
              I'm always interested in discussing new opportunities,
              collaborations, or just connecting with fellow tech enthusiasts.
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4} mb={6}>
          {contactInfo.map((info: ContactInfo, index: number) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Fade in timeout={1200 + index * 200}>
                <GlassCard>
                  <CardContent sx={{ p: 3 }}>
                    {info.icon}
                    <Typography variant="h6" gutterBottom>
                      {info.title}
                    </Typography>
                    {info.href ? (
                      <Typography
                        variant="body2"
                        component="a"
                        href={info.href}
                        sx={{
                          color: "inherit",
                          textDecoration: "none",
                          "&:hover": { textDecoration: "underline" },
                        }}
                      >
                        {info.content}
                      </Typography>
                    ) : (
                      <Typography variant="body2">{info.content}</Typography>
                    )}
                  </CardContent>
                </GlassCard>
              </Fade>
            </Grid>
          ))}
        </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 4, opacity: 0.7 }}>
          All rights reserved © 2025 Alfiya Abdimutalipova
        </Typography>
      </Container>
    </GradientBox>
  );
}
