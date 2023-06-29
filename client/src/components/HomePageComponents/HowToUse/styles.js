import { makeStyles } from "@material-ui/core";



const styles = makeStyles((theme) => ({
  main: {
    display: "flex",
    background: "#FFFFE0",
    "@media (max-width : 700px)": {
      display: "inline",
    },
  },
  sell: {
    width: "50%",
    background: "#FFFFE0",
    "@media (max-width : 700px)": {
      width: "100%",
      
    },
  },
  buy: {
    width: "50%",
    background: "#FFFFE0",
    borderRight: "groove",
    "@media (max-width : 700px)": {
      width: "100%",
      borderRight: "none",
    },
  },

  heading: {
    paddingTop: "10px",
    color: "#2F4858",
    transition: ".5s",
    "&:hover::before": {
      transform: "scale(1.1)",
    },

    "&:hover": {
      color: "#black",
      transform: "scale(1.3)",
      textShadow: "0 0 5px #ffffff",
    },
  },

  image: {
    height: "400px",
    width: "400px",
    background: "#FFFFE0",
    "@media (max-width : 700px)": {
      height: "250px",
      width: "250px",
    },
  },

  paper: {
    border: "5px solid #000WWW",
    backgroundSize: "cover",
    background: "#FFFFE0",
    height: "400px",
    backgroundPosition: "center",
    width: "400px",
  },

  parent: {
    width: "80%",
    background: "#FFFFE0",
    padding: "20px auto",
    margin: "0px auto",
  },
}));
export default styles;
