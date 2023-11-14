import { Box, Stack, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Height } from "@mui/icons-material";
import NavBar from "./NavBar";
import Menu from "./MenuBar";

const Header = () => {
  const navItems = [
    { name: "Homme", url: "/men" },
    { name: "Femme", url: "/women" },
    { name: "Enfant", url: "/children" },
    { name: "Nouveautés", url: "/novolties" },
  ] as const;

  return (
    <Box sx={{ backgroundColor: "red", height: "3rem", width: "100%" }}>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          paddingX: { xs: "40px" },
        }}
      >
        <Menu navItems={navItems} />
        <NavBar />
        <Box></Box>
        <Box>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon color="action" />
          </Badge>
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;
