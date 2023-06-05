import React from "react";
import descBuyer from "./descBuyer.js";
import descSeller from "./descSeller.js";
import useStyles from "./styles.js";
import Carousel from "react-material-ui-carousel";

import { Typography } from "@material-ui/core";

const HowToSell = () => {
  const classes = useStyles();
  const Buyer = (props) => {
    return (
      <div className={classes.parent}>
        <div>
          <Typography align="center">
            <img
              alt="buyer"
              src={props.buyer.img}
              className={classes.image}
             // loading="lazy"
            />
          </Typography>

          <div>
            <Typography variant="h6" align="center">
            <h6 style={{color:'#2f4858'}}>  {props.buyer.heading}</h6>
             
            </Typography>
            <Typography variant="body1" align="center">
              <h6 style={{color:'#2f4858'}}> {props.buyer.subHeading}</h6>
             
            </Typography>
          </div>
        </div>
      </div>
    );
  };

  const Seller = (props) => {
    return (
      <div className={classes.parent}>
        <div>
          <Typography align="center">
            <img
              alt="seller"
              src={props.seller.img}
              className={classes.image}
             loading="lazy"
            />
          </Typography>

          <div>
            <Typography variant="h6" align="center">
              <h6 style={{color:'#2f4858'}}> {props.seller.heading}</h6>
             
            </Typography>
            <Typography variant="body1" align="center">
            <h6 style={{color:'#2f4858'}}> {props.seller.subHeading}</h6>
              
            </Typography>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div style={{ background: "rgb(234,231,220)" }}>
        <Typography
          variant="h6"
          style={{
            textAlign: "center",
          
            background: "rgb(234,231,220)",
            paddingTop: "10px",
            
          }}
        >
          
          <h4 style={{color:'#2f4858'}}>How to Use Read-Cycle</h4>
          
        </Typography>
        <hr
          style={{
            border: "1.5px solid #8e8d8a",
            width: "300px",
            background: "#2F4858",
            margin: "0px auto",
          }}
        />
      </div>

      <div className={classes.main}>
        <div className={classes.buy}>
          <div>
            <Typography variant="h6" align="center" className={classes.heading}>
              For Buyers
            </Typography>
          </div>
          <div>
            {<Carousel
             animation="fade"
              autoPlay={true}
              interval={6000}
              stopAutoPlayOnHover={false}
              navButtonsAlwaysInvisible={true}
            >
              {descBuyer.map((buyer, index) => (
                <Buyer key={index} buyer={buyer} />
              ))}
            </Carousel> }
          </div>
        </div>
        <div className={classes.sell}>
          <div>
            <Typography variant="h6" align="center" className={classes.heading}>
              For Sellers
            </Typography>
          </div>
          <div>
            <Carousel
              animation="fade"
              autoPlay={true}
              interval={6000}
             stopAutoPlayOnHover={false}
              navButtonsAlwaysInvisible={true}
            >
              {descSeller.map((seller, index) => (
                <Seller key={index} seller={seller}  />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToSell;
