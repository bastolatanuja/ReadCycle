import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  footer: {
    position: "center",
    background: "#FFFFCC",
  },

  flexContainer: {
    display: "flex",
    flexFlow: "row nowrap",
    background:
     "#FFFFCC",
    padding: "30px 0px 0px 0px",
    justifyContent: "center",
    alignItems: "ceter",
  },

  flexbox: {
    width: "33%",
    "@media (max-width : 700px)": {
      width: "100%",
    },
  },

  image1: {
    width: "300px",
    margin: "5px 0px 15px 0px ",
    position: "centre",
    transition: ".5s",
    "&:hover": {
      transform: "scale(1.3)",
     
    },
  },

  link: {
    listStyleType: "none",
    textAlign: "center",
    paddingInlineStart: "0px",
    transition: "1s",
    "&:hover": {
      color: "black",
     // textShadow: "0 0 5px #E2F0F9",
    },
  },

  linkName: {
    color: "#2F4858",
    transition: "0.5s",
    "&:hover": {
      color: "black",
      textShadow: "0 0 5px #E2F0F9",
    },
  },

  name: {
    color: "#E85A4F",
    "&:hover": {
      color: "green",
    },
  },

  touch: {
    fontSize: "25px",
    fontWeight: "bold",
    padding: "0 0 30px 0",
    "@media (max-width : 700px)": {
      padding: "10px 0 5px 0",
    },
  },

  Icon: {
    margin: "10px 10px 10px 10px",
    fontSize: "40px",
    transform: "scale(.9)",
    zIndex: "-1",
    transition: ".5s",
    "&:hover::before": {
      transform: "scale(1.1)",
    },

    "&:hover": {
      color: "#eae7dc",
      textShadow: "0 0 5px #eae7dc",
      transform: "scale(1.3)",
    },
    "@media (max-width : 700px)": {
      margin: "0px 10px 10px 10px",
    },
  },

  displayInline:{
    display: 'inline'
  }
}));
export default styles;
