import React from "react";
//import Carousel from "react-material-ui-carousel";
import { Typography, Box, Icon } from "@material-ui/core";
import Back from "../../../asset/Back.png";
import useStyles from "./styles.js";
import descData from "./descData.js";
import './floating-shape.css';
import './floating-shape.js';
import { useEffect } from "react";
import $ from 'jquery'; 


const Description = () => {
  useEffect(() => {
    var html = '';
    for (var i = 1; i <= 50; i ++) {
        html += '<div class="shape-container--'+i+' shape-animation"><div class="random-shape"></div></div>';
    }
      
    document.querySelector('.shape').innerHTML += html;
    
    var $allShapes = $("[class*='shape-container--']");

    
  }, []);
  
  const classes = useStyles();
  const my_class =  ' my_container';
  const my_inner_class =  ' inner-container';
  const my_shape_class =  ' shape';
  const Item = (props) => {

    return (
      <div className={classes.parent + my_class }>
        <div
          className={classes.paper + my_inner_class}
          style={{
            backgroundColor:"#E4D96F",
            
          }}
        >
          <div className={classes.content + my_shape_class }>
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
         <div className="banner-quote">

         <h6 class="MuiTypography-root MuiTypography-h6"><div class="makeStyles-text-18"> Hey, Want to Sell/Buy old books , don't know where to go. You have Come at the right place. </div></h6>
         <h1 class="MuiTypography-root makeStyles-smallText-19 MuiTypography-h1">Welcome to<div class="shop-name MuiBox-root MuiBox-root-22 makeStyles-contentBold-20">Read-Cycle</div></h1>
         <h6 class="MuiTypography-root makeStyles-smallText-19 MuiTypography-h6">Your personalized old books exchanging Store.</h6>
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
