import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textDecoration: "none",
    height: "25rem",
    marginBottom: "10px",
    width: "auto",
    cursor: "pointer",
    transition: ".5s",
    "&:hover": {
      color: "black",
      textShadow: "0 0 2px #e85a4f",
    },
    "@media (max-width : 700px)": {
      height: "70vh",
    },
  },
  frontCard: {
    backgroundColor: "#F5F5DC",
    padding: "1rem 0rem 1rem 0rem",
  },
  backCard: {
    padding: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  backCardContent: {
    backgroundColor: "#E8AA42",
    height: "100%",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  socialLink: {
    display: "inline",
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
      color: "#ffffff",
      transform: "scale(1.3)",
      textShadow: "0 0 5px #ffffff",
    },
    "@media (max-width : 700px)": {
      margin: "0px 10px 10px 10px",
    },
  },

  img: {
    width: "100%",
    height: "80%",
    padding: "5px",
    border: "5px solid #E8AA42",
    borderRadius: "50%",
    objectFit: "cover",
    margin: "0 1rem 1rem 1rem",
    alignSelf: "center",
    textAlign: "center",
    lineHeight: "25rem",
  },
}));
