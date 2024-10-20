import { styled as muiStyled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

// Progesso do banco de dados
const Root = muiStyled(Box)(({ theme }) => ({
  display: "flex",
  "& > * + *": {
    // Não sei
    marginLeft: theme.spacing(3),
  },
  justifyContent: "center",
}));

const CircularProgressBar = ({ size }) => {
  if (size) {
    return (
      <Root>
        <CircularProgress size={size} />
      </Root>
    );
  } else {
    return (
      <Root>
        <CircularProgress />
      </Root>
    );
  }
};

export default CircularProgressBar;
