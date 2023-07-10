import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  topContainer: {
    position: "relative",
    width: "100%",
    textAlign: "center",
    color: "white",
    height: "400px",
    backgroundImage:
      "url(https://foundr.com/wp-content/uploads/2022/08/Best-business-books.png)",
    "@media (max-width : 700px)": {
      height: "225px",
      paddingTop: "40px",
    },
  },

  head: {
    color: "#2F4858",
    fontSize: "60px",
    paddingLeft: "20%",
    position: "absolute",
    bottom: "10px",
    left: "16px",
    "@media (max-width : 700px)": {
      fontSize: "30px",
      paddingLeft: "4%",
    },
  },

  middleContainer: {
    padding: "0px 70px",
    "@media (max-width : 700px)": {
      padding: "0px 10px",
    },
  },

  searchboxes: {
    padding: "30px 25px",
  },

  text: {
    color: "#e85a4f",
  },

  root: {
    flexGrow: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  input: {
    padding: theme.spacing(2),
  },
  button: {
    justifyContent: "center",
    margin: "25px 0px",
    backgroundColor: "#E8AA42",
    "&:hover": {
      backgroundColor: "#FFA500",
    },
    "@media (max-width : 700px)": {
      marginBottom: "10px",
    },
  },

  advance: {
    backgroundColor: "#e85a4f",
    float: "right",
    marginBottom: "10px",
    marginRight: "60px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    justifyContent: "center",
    textAlign: "center",
  },
  accordian: {
    width: "400px",
    position: "relative",
    display: "flex",
    AlignItems: "center",
    justifyContent: "center",
  },

  gridItem: {
    border: "1px solid orange",
    borderRadius: "10px",
  },
  formControl: {
    backgroundColor: "white",
    border: "1 px solid orange",
    borderRadius: "8px",
  },

  paper: {
    textAlign: "center",
  },
}));

export default styles;
