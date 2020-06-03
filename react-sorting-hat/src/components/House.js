import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import placeholderBG from "../assets/images/hogwarts.jpg";
import hufflepuff from "../assets/images/hufflepuff.png";
import griffendor from "../assets/images/griffendor.png";
import ravenclaw from "../assets/images/ravenclaw.jpg";
import slytherin from "../assets/images/slytherin.jpg";
import theme from "../ui/Theme";

const useStyles = makeStyles((theme) => ({
  welcomeContainer: {
    // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),url(${slytherin})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
  },
}));

export default function House(props) {
    console.log(props);
    

  const classes = useStyles();
  const [userHouse, setUserHouse] = useState({
    background: placeholderBG,

  });

  useEffect(() => {
    window.scrollTo(0, 0)

      if (props.house !== '') {
          console.log('test');
          console.log(props.house);
          
          

          let house = houses.filter((house) => {
            if (house.name === props.house) {
              return house;
            }
          });
          setUserHouse(house[0]);
      }
  }, []);

  console.log(userHouse);

  const houses = [
    {
      name: "Hufflepuff",
      background: hufflepuff,
      famous: "Newt Scamander",
    },
    {
      name: "Griffendor",
      background: griffendor,
      famous: "Harry Potter and Albus Dumbledor",
    },
    {
      name: "Ravenclaw",
      background: ravenclaw,
      famous: "Gilderoy Lockheart",
    },
    {
      name: "Slytherin",
      background: slytherin,
      famous: "Lord Voldemort",
    },
  ];

  return (
    <Grid
      container
      className={classes.welcomeContainer}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),url(${userHouse.background})`,
      }}
    >
      <Grid
        item
        container
        direction="column"
        className={classes.welcomeHeadlineContainer}
        alignItems="center"
      >
        <Grid item style={{ margin: "5em" }}>
          <Typography variant="h2" style={{ margin: "1em" }}>
            This Sorting Hat Has Chosen
          </Typography>
          <Typography variant="h3">
            You belong to house {userHouse.name}!
          </Typography>
        </Grid>
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <Typography variant="body2">
              Famous Wizzards from this house include {userHouse.famous}
            </Typography>
          </Grid>
          <Grid item style={{ margin: "2em" }}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
