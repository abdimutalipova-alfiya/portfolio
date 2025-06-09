import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  Fade,
  Avatar,
  Stack,
  Chip,
  Grow,
  LinearProgress,
} from "@mui/material";
import {
  Code as CodeIcon,
  School as SchoolIcon,
  Lightbulb as LightbulbIcon,
  Public as PublicIcon,
  Computer as ComputerIcon,
  Psychology as PsychologyIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  height: "100%",
  transition: "all 0.3s ease-in-out",
  border: `1px solid ${theme.palette.divider}`,
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[8],
  },
}));

const TechHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(2),
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  fontSize: "0.75rem",
  height: "24px",
}));

const techStack = [
  {
    name: "Node.js",
    proficiency: 75,
    description:
      "Backend development with Express, API design, and database integration. Experience with microservices architecture.",
    category: "Backend",
    yearsOfExperience: "4y",
  },
  {
    name: "Python",
    proficiency: 70,
    description:
      "Data analysis, ML and automation scripts. Strong foundation in OOP principles.",
    category: "Language",
    yearsOfExperience: "4y",
  },
  {
    name: "NLP",
    proficiency: 70,
    description:
      "Text processing, sentiment analysis, and transformer models. Built document processing pipelines with HuggingFace transformers.",
    category: "AI/ML",
    yearsOfExperience: "1y",
  },
  {
    name: "Database Systems",
    proficiency: 90,
    description:
      "Design and optimization of both relational (PostgreSQL, MySQL) and NoSQL (MongoDB) databases. Skilled in writing complex queries and aggregation pipelines.",
    category: "Database",
    yearsOfExperience: "4y",
  },
  {
    name: "React",
    proficiency: 85,
    description:
      "Proficient in hooks, state management, and component architecture. Experience with Next.js and modern React patterns.",
    category: "Frontend",
    yearsOfExperience: "4m",
  },
  {
    name: "TypeScript",
    proficiency: 80,
    description:
      "Strong understanding of type systems, interfaces, and generics. Focus on type-safe development practices.",
    category: "Language",
    yearsOfExperience: "4m",
  },
];

export default function About() {
  return (
    <Box id="about" sx={{ py: 10, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              color="text.primary"
              sx={{ fontWeight: "bold" }}
            >
              About Me
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 900, mx: "auto", lineHeight: 1.6 }}
            >
              Currently studying Applied Computer Science at Thomas More
              Hogeschool, I'm on a journey to transform ideas into digital
              reality. My path combines technical excellence with a genuine
              curiosity about how technology can make life better for people
              around the world.
            </Typography>
          </Box>
        </Fade>

        <Box mb={8}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
            mb={3}
          >
            <ComputerIcon color="primary" fontSize="large" />
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 0,
              }}
            >
              Technology Expertise
            </Typography>
          </Box>

          {/* <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              mb: 6,
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
            }}
          >
            A comprehensive overview of my technical skills and the technologies
            I'm passionate about
          </Typography> */}

          <Grid container spacing={3}>
            {techStack.map((tech, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                <Grow in timeout={800 + index * 150}>
                  <StyledPaper elevation={0}>
                    <TechHeader>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          fontSize: "1.1rem",
                        }}
                      >
                        {tech.name}
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        <CategoryChip
                          label={tech.category}
                          size="small"
                          variant="outlined"
                        />
                        <CategoryChip
                          label={`${tech.yearsOfExperience} exp`}
                          size="small"
                          sx={{
                            border: "none",
                          }}
                        />
                      </Stack>
                    </TechHeader>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 3,
                        lineHeight: 1.6,
                        minHeight: "60px",
                      }}
                    >
                      {tech.description}
                    </Typography>
                  </StyledPaper>
                </Grow>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Typography variant="body1" color="text.secondary">
              Always eager to learn new technologies and expand my skill set.
              Currently exploring <strong>AI/ML frameworks</strong> and{" "}
              <strong>cloud technologies</strong>.
            </Typography>
          </Box>
        </Box>

        {/* <Grid container spacing={6} alignItems="stretch">
          <Grid size={{ xs: 12, lg: 7 }}>
            <Typography
              variant="h3"
              component="h3"
              gutterBottom
              color="text.primary"
              mb={4}
              sx={{ fontWeight: "bold" }}
            >
              What Drives Me
            </Typography>

            <Grid container spacing={3}>
              {values.map((value, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <Fade in timeout={1000 + index * 150}>
                    <Card
                      sx={{
                        height: "100%",
                        transition: "transform 0.2s",
                      }}
                    >
                      <CardContent
                        sx={{
                          p: 3,
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Box display="flex" alignItems="center" gap={2} mb={2}>
                          <Box color="primary.main">{value.icon}</Box>
                          <Typography
                            variant="h6"
                            component="h4"
                            color="primary.main"
                            sx={{ fontWeight: "bold" }}
                          >
                            {value.title}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ flexGrow: 1 }}
                        >
                          {value.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid> */}
      </Container>
    </Box>
  );
}
