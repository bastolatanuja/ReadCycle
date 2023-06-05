import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({

  half_half: {
    display : "flex",
  },
  home_img:{
    backgroundColor: "#EAE7DC",
    width: "802px",
    display: "flex",
    alignItems: "center",
  },
  paper: {
    border: "5px solid #000WWW",
    //backgroundSize: "cover",
    height: "100vh",
    
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    marginLeft: "0px",
    marginRight: "0px",
    overflow: "none",
    width: "100%",
    zIndex: "-1",
    
    transform: "translateY(10%,0%)",
    "@media (max-width : 700px)": {
      height: "600px",
    },
  },
  content: {
    textAlign: "left",
    zIndex: "6",
    fontSize: "5px",
    fontWeight: "400",
    fontFamily: "'Poppins', sans-serif",
    position: "absolute",
    top: "52%",
    left: "15%",
    transform: "translate(-2%,-60%)",
    color: "#2F4858",
    "@media (max-width : 700px)": {
      fontSize: "30px",
    },
  },

  text: {
    "@media (max-width : 700px)": {
      fontSize: "25px",
      
    },
  },

  smallText: {
    "@media (max-width : 700px)": {
      fontSize: "12px",
      
    },
  },

  contentBold: {
    background: "-webkit-linear-gradient(#e73426, #e85a4f)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",

    "@media (max-width : 700px)": {
      textAlign: "center",
      top: "30%",
      left: "50%",
      fontSize: "30px",
    },
  },
  parent: {
   
    width: "100%",
  },
}));

export default styles;
