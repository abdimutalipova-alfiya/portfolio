import React from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Grow,
  useTheme,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
interface ProjectFeature {
  title: string;
  description: string;
  technologies: string[];
}
export default function Internship() {
  const theme = useTheme();

  const projectFeatures: ProjectFeature[] = [
    {
      title: "Sidebar Chat AI Helper",
      description:
        "Real-time AI assistant integrated into the platform, providing contextual support without disrupting user workflow. Features model selection, persistent chat history, and secure session management.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Azure OpenAI",
        "LangChain",
        "Material UI",
      ],
    },
    {
      title: "Observations Improvement Feature",
      description:
        "AI-powered text enhancement tool for vulnerability reports. Provides summarization, rewriting, translation, and contextual suggestions while maintaining user control over final output.",
      technologies: [
        "React Hooks",
        "TypeScript",
        "Azure OpenAI",
        "Custom Prompts",
        "Material UI",
      ],
    },
    {
      title: "Automated Public Data Integration",
      description:
        "RAG pipeline integrating CVEs, EPSS scores, MITRE ATT&CK, CWEs, and CAPECs. Combines semantic search with structured filtering for enhanced AI responses.",
      technologies: [
        "RAG",
        "Qdrant",
        "PostgreSQL",
        "all-mpnet-base-v2",
        "Hybrid Search",
        "Prisma ORM",
      ],
    },
  ];
  const highlights: string[] = [
    "Advanced proficiency in full-stack AI application development",
    "Led requirement analysis for a platform fostering student engagement",
    "Collaborated on a responsive wedding events organization website",
    "Focused on user experience and performance optimization",
  ];

  const technologies: string[] = [
    "Next.js/React",
    "TypeScript",
    "PostgreSQL",
    "Vector Databases",
    "LangChain",
  ];

  const documentLinks = [
    { name: "Project Plan", url: "/project_plan.pdf" },
    { name: "Realization Document", url: "/realization_document.pdf" },
    { name: "Reflection Document", url: "/reflection_document.pdf" },
  ];

  return (
    <Box sx={{ py: 8, minHeight: "100vh", backgroundColor: "#fafafa" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            color="text.primary"
            sx={{ mb: 2 }}
          >
            Internship
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: "auto", lineHeight: 1.6 }}
          >
            I focused on integrating artificial intelligence solutions to
            enhance platform capabilities, improve user experience, and automate
            security assessment processes.
          </Typography>
        </Box>
        {/* Project Features */}
        <Box mb={6}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: 600, textAlign: "center", mb: 4 }}
          >
            Key Implementations
          </Typography>
          <Grid container spacing={4}>
            {projectFeatures.map((feature, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Grow in timeout={1000 + index * 200}>
                  <Card
                    elevation={3}
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: 600, textAlign: "center" }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                        sx={{ lineHeight: 1.6 }}
                      >
                        {feature.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 0.5,
                          mt: 2,
                        }}
                      >
                        {feature.technologies.map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: "0.75rem" }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Grid container spacing={6}>
          {/* Left Section - Image */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/internship.png" // replace with your actual image path
                alt="Internship"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: theme.shadows[3],
                }}
              />
            </Box>
          </Grid>

          {/* Right Section - Content */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box>
              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 1,
                    mb: 1,
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{ fontWeight: 700 }}
                  >
                    Enhancing Refracted Security Platform with AI Capabilities
                  </Typography>
                  <Chip
                    label={"February 2025 - May 2025"}
                    sx={{ fontWeight: 500, fontSize: "0.75rem" }}
                  />
                </Box>
              </Box>

              {/* Highlights */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Key Highlights
                </Typography>
                <List sx={{ py: 0 }}>
                  {highlights.map((highlight, idx) => (
                    <ListItem key={idx} sx={{ py: 0.25, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 28 }}>
                        <CheckCircle />
                      </ListItemIcon>
                      <ListItemText
                        primary={highlight}
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "0.9rem",
                            lineHeight: 1.5,
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>

              {/* Technologies */}
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Technologies Used
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {technologies.map((tech, idx) => (
                    <Chip
                      key={idx}
                      label={tech}
                      variant="outlined"
                      size="small"
                    />
                  ))}
                </Box>
              </Box>

              {/* Document Links */}
              <Box sx={{ mt: 4 }}>
                {/* <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  Documents
                </Typography> */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  {documentLinks.map((doc, idx) => (
                    <a
                      key={idx}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        color="primary"
                        sx={{
                          fontSize: "0.95rem",
                          "&:hover": { textDecoration: "underline" },
                        }}
                      >
                        {doc.name}
                      </Typography>
                    </a>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Project Features */}
        {/* <Box mb={6}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: 600, textAlign: "center", mb: 4 }}
          >
            Key Implementations
          </Typography>
          <Grid container spacing={4}>
            {projectFeatures.map((feature, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Grow in timeout={1000 + index * 200}>
                  <Card
                    elevation={3}
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: 600, textAlign: "center" }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                        sx={{ lineHeight: 1.6 }}
                      >
                        {feature.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 0.5,
                          mt: 2,
                        }}
                      >
                        {feature.technologies.map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: "0.75rem" }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Box> */}
      </Container>
    </Box>
  );
}
