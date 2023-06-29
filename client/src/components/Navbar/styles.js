import { makeStyles } from "@material-ui/core";
const styles = makeStyles((theme) => ({
  appBar: {
   // background:"#EDC253",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "@media (max-width : 900px)": {
      padding: 0,
     
      
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  menuButton: {
    fontWeight: 700,
    marginLeft: "30px",
    color: "#2F4858 !important",
    "&:hover": {
      borderBottom: "2px solid white",
      borderRadius: "0px !important",
      transform: "translateY(4px)",
    },
  },

  sellButtom: {
    fontWeight: 700,
    marginLeft: "30px",
    background: "#2F4858",
    color: "#2F4858 !important",
    "&:hover": {
      borderBottom: "2px solid #2F4858",
      borderRadius: "0px !important",
      transform: "translateY(4px)",
    },
  },
cus_container: {
  marginTop: "25px",  
  display: "flex",
  background: "#FFFFCC",
  width: "100%",
  marginLeft: "40px",
  justifyContent: "space-between",
  marginRight: "40px",
}
,
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "10px 10px",
    background:
    "#EFF2F5",
    borderRadius: "5px",
    margin: "7px",
    fontWeigth: "500",
  },
  logo_wrap : {
    maxHeight : "64px",
    maxWidth : "64px"
  },
  image1: {
    width: "100px",
    height: "100px",
    margin: "3px 5px 3px 5px",
    position: "center",
    transition: ".5s",
    "&:hover": {
      transform: "scale(1.1)",
    },
    "@media (max-width : 700px)": {
      width: "170px",
      margin: "2px",
    },
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    marginLeft: "15px",
  },
  midNavbar: {
    width: "650px",
    alignItems: "center",
  },
  mobileloginMenu: {
    float: "right",
    margin: "20px",
  },

  // dropbtn :  {
  //   backgroundColor: "#4CAF50",
  //   color: "white",
  //   padding: "16px",
  //   fontSize: "16px",
  //   border: "none",
  //   cursor: "pointer",
  // },

  // dropdown :  {
  //           position: "relative",
  //           display: "inline-block",
  //           "& : hover" :
  //             {
  //                 "& dropdownContent" :
  //                 {
  //                 display: "block",
  //                 },
  //                  "& dropbtn" :
  //                 {
  //               backgroundColor: "#3e8e41",
  //                 },
  //            },

  // },

  //  dropdownContent : {
  //       display:" none",
  //       position: "absolute",
  //       backgroundColor: "#f9f9f9",
  //       minWidth: "160px",
  //       boxShadow:" 0px 8px 16px 0px rgba(0,0,0,0.2)",
  //       zIndex: "1"
  // },

  // dropdownContent :{
  //     "& a" : {
  //       color: "black",
  //       padding: "12px 16px",
  //       textDecoration: "none",
  //       display: "block",
  //           "& : hover" : {
  //             backgroundColor:" #f1f1f1"
  //           },
  //     },
  // },
}));
export default styles;
