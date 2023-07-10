import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  button: {
    margin: "2px",
    backgroundColor: "#E8AA42",
    "&:hover": {
      backgroundColor: "#FFA500",
    },
    width: theme.spacing(3),
    height: theme.spacing(4),
  },
}));
