import React from "react";
//import Carousel from "react-material-ui-carousel";
import { Typography, Box, Icon } from "@material-ui/core";
import Back from "../../../asset/Back.png";

import useStyles from "./styles.js";
import descData from "./descData.js";



const Description = () => {
  const classes = useStyles();
  const Item = (props) => {
    return (
      <div className={classes.parent}>
        <div
          className={classes.paper}
          style={{
            backgroundColor:"#EAE7DC",
            
          }}
        >
          <div className={classes.content}>
            <Typography variant="h6">
              <div className={classes.text}> {props.item.heading}</div>
             
            </Typography>
            <Typography variant="h1" className={classes.smallText}>
              {props.item.subHeading}
              <Box
                fontWeight="fontWeightBold"
                letterSpacing={1}
                className={classes.contentBold}
              >
            Read-Cycle
              </Box>
              
              
            </Typography>
            <Typography variant="h6" className={classes.smallText}>
              {props.item.description}
            </Typography>
           
          </div>
         
        </div>
        
      </div>

       
      
    );
  };
  return (
    <>
   
      <div
        // indicators={false}
        // animation="fade"
        // autoPlay={true}
        // interval={10000}
        // stopAutoPlayOnHover={false}
        // navButtonsAlwaysInvisible={true}
       className={classes.half_half}
        
      >
        {descData.map((item, index) => (
          <Item key={index} item={item} 
         />
        ))}
        
        <div className={classes.home_img}>
    <img src={Back} style={{ width: "800px", height: "600px" }} alt="Home" />
</div>
 
      </div>
      
    </>
  );
};

export default Description;
