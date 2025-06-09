"use client";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { NavItem, SectionId } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const GradientAppBar = styled(AppBar)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  backdropFilter: "blur(10px)",
  height: 64,
}));

interface NavigationProps {
  activeSection?: SectionId; // Make optional since not all pages will have sections
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About me", href: "/#about" }, // Include both route and hash
    { name: "Internship", href: "/#internship" },
    { name: "Projects", href: "/projects" },
  ];

  const handleNavigation = (href: string): void => {
    // Close mobile menu
    setMobileOpen(false);

    // If we're already on the home page and it's a hash link
    if (pathname === "/" && href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    // If it's a hash link but we're not on home page
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      window.location.href = `${path}#${hash}`;
    } else {
      window.location.href = href;
    }
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        {navItems.map((item: NavItem) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href ||
                (pathname === "/" && activeSection === item.href.split("#")[1]);

          return (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(item.href)}
                selected={isActive}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <GradientAppBar position="fixed" elevation={0}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            E-Portfolio
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 1 }}>
              {navItems.map((item: NavItem) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href ||
                      (pathname === "/" &&
                        activeSection === item.href.split("#")[1]);

                return (
                  <Button
                    key={item.name}
                    color="inherit"
                    onClick={() => handleNavigation(item.href)}
                    sx={{
                      backgroundColor: isActive
                        ? "rgba(255,255,255,0.2)"
                        : "transparent",
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.1)",
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                );
              })}
            </Box>
          )}
        </Toolbar>
      </GradientAppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
