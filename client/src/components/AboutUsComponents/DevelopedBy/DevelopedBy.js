import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography, Grid, Container } from "@material-ui/core";
import Profile from "./Profile";
import { profiles } from "./descProfile";
const DevelopedBy = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 460 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 460, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div style={{ background: "#FFFFCC" }}>
        <Typography
          variant="h6"
          style={{
            textAlign: "center",
            background: "#FFFFCC",
            paddingTop: "10px",
          }}
        >
           <h4 style={{color:'#2f4858'}}>Developed By</h4>
        </Typography>
        <hr
          style={{
            border: "1.5px solid #2F4858",
            width: "300px",
            background: "black",
            margin: "0px auto",
          }}
        />
      </div>

      <Carousel
        responsive={responsive}
        arrows={false}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={6000}
      >
        {profiles.map((profile, index) => (
          <div style={{ background: "#FFFFE0", padding: " 20px 0px" }}>
            <Grid>
              <Container>
                <Profile
                  key={index}
                  name={profile.name}
                  subHeading={profile.subHeading}
                  img={profile.img}
                  github={profile.github}
                  linkedin={profile.linkedin}
                />
              </Container>
            </Grid>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default DevelopedBy;
