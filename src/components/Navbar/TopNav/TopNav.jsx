import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Divider,
  Stack,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Search,
  ShoppingCart,
  PersonOutline,
  ChevronRight,
  TurnLeft,
  NorthEast,
} from "@mui/icons-material";
import styles from "./TopNav.module.scss";
import { useEffect, useRef, useState } from "react";
import { topNavItem } from "../../../data";
import DesktopDrawer from "../../../pages/Drawers/DesktopDrawer";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
  const containerRef = useRef(null);
  const menuRef = useRef(null);
  const firstItemRef = useRef(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [subDrawerOpen, setSubDrawerOpen] = useState(false);
  const [nestedDrawerOpen, setNestedDrawerOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [activeNestedSubMenu, setActiveNestedSubMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const isMobile = useMediaQuery("(max-width:450px)");
  const isDesktop = useMediaQuery("(min-width:991px)");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerOpen = () => {
    setDrawerOpen((prev) => !prev);
    setSubDrawerOpen(false);
    setNestedDrawerOpen(false);
  };

  const handleSubDrawerOpen = (menuItem) => {
    setActiveSubMenu(menuItem);
    setSubDrawerOpen(true);
  };
  const handleSubDrawerClose = () => {
    setActiveSubMenu(null);
    setSubDrawerOpen(false);
  };

  const handleNestedDrawerOpen = (menuItem) => {
    if (menuItem.url) {
      navigate(menuItem.url, { replace: true });
      setSubDrawerOpen(false);
      return;
    }
    if (menuItem.hasUpArrow) {
      return window.open(menuItem.url, "_blank");
    }
    setActiveNestedSubMenu(menuItem);
    setNestedDrawerOpen(true);
  };

  const handleNestedDrawerClose = () => {
    setActiveNestedSubMenu(null);
    setNestedDrawerOpen(false);
  };

  const handleDesktopDrawerOpen = (menu) => {
    setSubMenu(menu);
    setOpenDesktopMenu(true);
  };

  const handleDesktopDraweClose = () => {
    setOpenDesktopMenu(false);
  };

  const handleLogoClick = () => {
    if (drawerOpen) {
      setDrawerOpen(false);
    }
    navigate("/");
  };

  return (
    <>
      <Box
        className={`${styles.container} ${
          isScrolled && isDesktop ? styles.hidden : ""
        }`}
        ref={containerRef}
        boxShadow={5}
      >
        <Box
          className={styles.topNav}
          style={{
            paddingInline: drawerOpen
              ? "0.25rem"
              : isMobile
              ? "0.25rem"
              : undefined,
          }}
        >
          <Box
            display="flex"
            gap={1}
            justifyContent="center"
            alignItems="center"
          >
            <Box className={styles.hamburger}>
              <IconButton onClick={handleDrawerOpen}>
                {drawerOpen ? (
                  <CloseIcon htmlColor="var(--color-primary-light)" />
                ) : (
                  <MenuIcon htmlColor="var(--color-primary-light)" />
                )}
              </IconButton>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                backgroundColor: "var(--color-primary-light)",
                width: "1px",
                height: "24px",
                alignSelf: "center",
                marginRight: "5px",
              }}
              className={styles.hamburger}
            />
            <Box className={styles.logo} onClick={handleLogoClick}></Box>
          </Box>
          {/* <Box className={styles.icons}>
            <IconButton>
              <Search htmlColor="var( --color-primary-light)" />
            </IconButton>
            <Typography className={styles.lang}>EN</Typography>
            <IconButton>
              <ShoppingCart
                variant="outlined"
                htmlColor="var( --color-primary-light)"
              />
            </IconButton>
            <IconButton>
              <PersonOutline htmlColor="var( --color-primary-light)" />
              <Typography
                className={styles.login}
                color="var(--color-primary-light)"
              >
                Log in
              </Typography>
            </IconButton>
          </Box> */}
          {/* </Box> */}
          <Box className={styles.menu}>
            {topNavItem.map((item, index) => (
              <Typography
                key={index}
                component="span"
                className={`${item.isActive ? styles.active : ""}`}
                onClick={() =>
                  item.title === "Home"
                    ? navigate("/")
                    : item.url
                    ? navigate(item.url, { replace: true })
                    : handleDesktopDrawerOpen(item)
                }
              >
                {item.title}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        className={`${styles.scrollNav} ${!isScrolled ? styles.hidden : ""}`}
        boxShadow={5}
      >
        <Box className={`${styles.menuWrapper} ${isScrolled ? styles.activess : ""}`}>
          <Box
            className={styles.menu}
            ref={menuRef}
          >
            {topNavItem.map((item, index) => (
              <Typography
                key={index}
                component="span"
                ref={index === 0 ? firstItemRef : null}
                className={index === 0 ? styles.active : ""}
                onClick={() =>
                  item.title === "Home"
                    ? navigate("/")
                    : item.url
                    ? navigate(item.url, { replace: true })
                    : handleDesktopDrawerOpen(item)
                }
              >
                {item.title}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>

      {/* main drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerOpen}
        PaperProps={{
          sx: {
            width: "100%",
            height: "100%",
            backgroundColor: "var(--color-primary-light)",
            color: "var(--color-secondary-light)",
            marginTop: "74px",
          },
        }}
      >
        <List sx={{ paddingBottom: "6rem", paddingTop: "1.5rem" }}>
          {topNavItem.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={
                item.hasSubMenu
                  ? () => handleSubDrawerOpen(item)
                  : item.url
                  ? () => navigate(item.url, { replace: true })
                  : undefined
              }
            >
              <ListItemText
                primary={item.title}
                className={item.className ? item.className : ""}
                sx={`${
                  item.hasBorder
                    ? "border-bottom: 1px solid var(--color-primary); padding-bottom: 1.5rem;"
                    : ""
                }`}
              />
              {item.hasSubMenu && (
                <IconButton
                  edge="end"
                  size="small"
                  sx={{ alignSelf: "flex-start" }}
                >
                  <ChevronRight htmlColor="var(--color-primary)" />
                </IconButton>
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Sub Drawer */}
      <Drawer
        anchor="right"
        open={subDrawerOpen}
        PaperProps={{
          sx: {
            width: "100%",
            height: "100%",
            backgroundColor: "var(--color-primary-light)",
            color: "var(--color-secondary-light)",
            marginTop: "74px",
          },
        }}
      >
        <Box sx={{ px: 1.5, pt: 3, pb: 1 }}>
          <Stack direction="row" alignItems="center" gap={2} pb={2}>
            <TurnLeft htmlColor="white" onClick={handleSubDrawerClose} />
            <Typography variant="h6" color="var(--color-primary)">
              {activeSubMenu?.title}
            </Typography>
          </Stack>
          <Divider
            orientation="horizontal"
            flexItem
            sx={{ backgroundColor: "var(--color-primary)" }}
          />
        </Box>
        <List sx={{ paddingBottom: "6rem", pt: 0 }}>
          {activeSubMenu?.subMenu.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={
                item.hasSubMenu || item.hasUpArrow
                  ? () => handleNestedDrawerOpen(item)
                  : undefined
              }
            >
              <ListItemText
                primary={item.title}
                sx={`${
                  item.hasBorder
                    ? "border-bottom: 1px solid var(--color-primary); padding-bottom: 1.5rem;"
                    : ""
                }`}
              />
              {item.hasSubMenu && (
                <IconButton
                  edge="end"
                  size="small"
                  sx={{ alignSelf: "flex-start" }}
                >
                  <ChevronRight htmlColor="var(--color-primary)" />
                </IconButton>
              )}
              {item.hasUpArrow && (
                <IconButton edge="start" size="small">
                  <NorthEast htmlColor="var(--color-primary-light)" />
                </IconButton>
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Nested Sub Drawer */}
      {activeNestedSubMenu?.subMenu && (
        <Drawer
          anchor="left"
          open={nestedDrawerOpen}
          PaperProps={{
            sx: {
              width: "100%",
              height: "100%",
              backgroundColor: "var(--color-interactive-coral-8-db)",
              color: "var(--color-primary-light)",
              marginTop: "74px",
            },
          }}
        >
          <Box sx={{ px: 1.5, pt: 3, pb: 1 }}>
            <Stack direction="row" alignItems="center" gap={2} pb={2}>
              <TurnLeft htmlColor="white" onClick={handleNestedDrawerClose} />
              <Typography variant="h6">{activeNestedSubMenu?.title}</Typography>
            </Stack>
            <Divider
              orientation="horizontal"
              flexItem
              sx={{ backgroundColor: "var(--color-interactive-coral-50-db)" }}
            />
          </Box>
          <List sx={{ paddingBottom: "6rem", pt: 0 }}>
            {activeNestedSubMenu?.subMenu.map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={
                  item.hasSubMenu
                    ? () => handleNestedDrawerOpen(item)
                    : undefined
                }
              >
                <ListItemText
                  primary={item.title}
                  className={item.className ? item.className : ""}
                  sx={`${
                    item.hasBorder
                      ? "border-bottom: 1px solid var(--color-interactive-coral-50-db); padding-bottom: 1.5rem;"
                      : ""
                  }`}
                />
                {item.hasSubMenu && (
                  <IconButton edge="end" size="small">
                    <ChevronRight htmlColor="var(--color-primary-light)" />
                  </IconButton>
                )}
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}

      {/* Desktop Drawer */}
      {subMenu && (
        <DesktopDrawer
          open={openDesktopMenu}
          subMenu={subMenu}
          close={handleDesktopDraweClose}
          isScrolled={isScrolled}
        />
      )}
    </>
  );
};

export default TopNav;
