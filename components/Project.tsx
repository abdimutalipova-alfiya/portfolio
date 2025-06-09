import React from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  alpha,
} from "@mui/material";
import { CheckCircle, Launch } from "@mui/icons-material";
import { Project as ProjectType } from "@/types";

interface ProjectsPageProps {
  projects: ProjectType[];
  achievements: ProjectType[];
}

export default function Project({ projects, achievements }: ProjectsPageProps) {
  return (
    <Box
      sx={{ py: 8, minHeight: "100vh", backgroundColor: "#fafafa" }}
      id="projects"
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8, mt: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            color="text.primary"
            sx={{
              mb: 2,
            }}
          >
            Recent Projects
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: "auto", lineHeight: 1.6 }}
          >
            Explore my notable achievements in applied computer science,
            showcasing technical proficiency, creativity, and problem-solving
            skills. From web development to requirements analysis, each entry
            reflects dedication to innovation and excellence.
          </Typography>
        </Box>

        <Box sx={{ mb: 8 }}>
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <Box
                key={project.id}
                sx={{
                  mb: 6,
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                  overflow: "hidden",
                }}
              >
                <Grid container spacing={6}>
                  {/* Image Section */}
                  <Grid
                    size={{ xs: 12, md: 5 }}
                    sx={{ order: { xs: 1, md: isEven ? 1 : 2 } }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          borderRadius: "12px",
                        }}
                      />
                    </Box>
                  </Grid>

                  {/* Content Section */}
                  <Grid
                    size={{
                      xs: 12,
                      md: 7,
                    }}
                    sx={{
                      order: { xs: 2, md: isEven ? 2 : 1 },
                    }}
                  >
                    <Box sx={{ p: { xs: 3, md: 4 }, height: "100%" }}>
                      {/* Project Header */}
                      <Box sx={{ mb: 3 }}>
                        <Box
                          component="a"
                          href={project.link} // make sure this is defined
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            textDecoration: project.link ? "underline" : "none", // <-- conditional underline
                            color: "inherit",
                            mb: 0.5,
                            gap: 1,
                          }}
                        >
                          {project.link && <Launch color="primary" />}{" "}
                          <Typography
                            variant="h4"
                            component="h2"
                            sx={{ fontWeight: 700 }}
                          >
                            {project.title}
                          </Typography>
                        </Box>
                        <Typography
                          color="text.secondary"
                          sx={{ fontSize: "1rem" }}
                        >
                          {project.subtitle}
                        </Typography>

                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <Chip
                            color="primary"
                            label={project.period}
                            sx={{
                              fontWeight: 500,
                              my: 2,
                              fontSize: "0.75rem",
                            }}
                          />
                          {/* <Button
                            variant="outlined"
                            startIcon={<Launch />}
                            sx={{
                              fontWeight: 500,
                              height: 32, // match Chip height

                              fontSize: "0.75rem",
                            }}
                          >
                            View Details
                          </Button> */}
                        </Box>

                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ lineHeight: 1.7 }}
                        >
                          {project.description}
                        </Typography>
                      </Box>

                      {/* Key Highlights */}
                      <Box sx={{ mb: 3 }}>
                        <Typography
                          variant="h6"
                          sx={{ mb: 2, fontWeight: 600 }}
                        >
                          Key Highlights
                        </Typography>
                        <List sx={{ py: 0 }}>
                          {project.highlights
                            .slice(0, 4)
                            .map((highlight, idx) => (
                              <ListItem key={idx} sx={{ py: 0.25, px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 28 }}>
                                  <CheckCircle sx={{ fontSize: 16 }} />
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
                        <Typography
                          variant="h6"
                          sx={{ mb: 2, fontWeight: 600 }}
                        >
                          Technologies Used
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                          {project.technologies.map((tech, idx) => (
                            <Chip
                              key={idx}
                              label={tech}
                              variant="outlined"
                              size="small"
                            />
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            );
          })}
        </Box>

        {/* Skills Summary */}
        <Paper
          elevation={3}
          sx={{
            mt: 8,
            p: 4,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Core Competencies
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
            Through these projects, I've developed expertise in full-stack
            development, requirement analysis, team leadership, and
            user-centered design.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {[
              "Full-Stack Development",
              "Requirements Analysis",
              "Team Leadership",
              "Database Design",
              "UI/UX Design",
              "Client Communication",
              "Agile Development",
            ].map((skill, idx) => (
              <Chip
                key={idx}
                label={skill}
                sx={{
                  backgroundColor: alpha("#fff", 0.2),
                  color: "white",
                  fontWeight: 500,
                }}
              />
            ))}
          </Box>
        </Paper>
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8, mt: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            color="text.primary"
            sx={{
              mb: 2,
            }}
          >
            Achievements
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: "auto", lineHeight: 1.6 }}
          >
            Explore my notable achievements in applied computer science,
            showcasing technical proficiency, creativity, and problem-solving
            skills. From web development to requirements analysis, each entry
            reflects dedication to innovation and excellence.
          </Typography>
        </Box>

        <Box sx={{ mb: 8 }}>
          {achievements.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <Box
                key={project.id}
                sx={{
                  mb: 6,
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                  overflow: "hidden",
                }}
              >
                <Grid container spacing={6}>
                  {/* Image Section */}
                  <Grid
                    size={{ xs: 12, md: 5 }}
                    sx={{ order: { xs: 1, md: isEven ? 1 : 2 } }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          borderRadius: "12px",
                        }}
                      />
                    </Box>
                  </Grid>

                  {/* Content Section */}
                  <Grid
                    size={{
                      xs: 12,
                      md: 7,
                    }}
                    sx={{
                      order: { xs: 2, md: isEven ? 2 : 1 },
                    }}
                  >
                    <Box sx={{ p: { xs: 3, md: 4 }, height: "100%" }}>
                      {/* Project Header */}
                      <Box sx={{ mb: 3 }}>
                        <Typography
                          variant="h4"
                          component="h2"
                          sx={{ fontWeight: 700, mr: 2 }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          color="text.secondary"
                          sx={{ fontSize: "1rem" }}
                        >
                          {project.subtitle}
                        </Typography>

                        <Chip
                          color="primary"
                          label={project.period}
                          sx={{
                            fontWeight: 500,
                            my: 2,
                            fontSize: "0.75rem",
                          }}
                        />

                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ lineHeight: 1.7 }}
                        >
                          {project.description}
                        </Typography>
                      </Box>

                      {/* Key Highlights */}
                      <Box sx={{ mb: 3 }}>
                        <Typography
                          variant="h6"
                          sx={{ mb: 2, fontWeight: 600 }}
                        >
                          Key Highlights
                        </Typography>
                        <List sx={{ py: 0 }}>
                          {project.highlights
                            .slice(0, 4)
                            .map((highlight, idx) => (
                              <ListItem key={idx} sx={{ py: 0.25, px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 28 }}>
                                  <CheckCircle sx={{ fontSize: 16 }} />
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
                        <Typography
                          variant="h6"
                          sx={{ mb: 2, fontWeight: 600 }}
                        >
                          Technologies Used
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                          {project.technologies.map((tech, idx) => (
                            <Chip
                              key={idx}
                              label={tech}
                              variant="outlined"
                              size="small"
                            />
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
