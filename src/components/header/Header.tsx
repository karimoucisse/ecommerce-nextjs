import { Box, Stack } from "@mui/material";

const Header = () => {
  const navItems = [
    { title: "Homme", url: "/men" },
    { title: "Femme", url: "/women" },
    { title: "Enfant", url: "/children" },
    { title: "Nouveautés", url: "/novolties" },
  ] as const;

  return (
    <Box sx={{ backgroundColor: "red", height: "3 rem", width: "100%" }}>
      <Stack></Stack>
    </Box>
  );
};

export default Header;
