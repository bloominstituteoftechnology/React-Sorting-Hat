import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import sortingHat from "../assets/images/Sorting-hat.jpg";
import theme from "../ui/Theme";

const useStyles = makeStyles((theme) => ({
  welcomeContainer: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${sortingHat})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
  },
}));

export default function Welcome() {
  const classes = useStyles();

  return (
    <Grid container className={classes.welcomeContainer}>
      <Grid
        item
        container
        direction="column"
        className={classes.welcomeHeadlineContainer}
        alignItems="center"
      >
        <Grid item style={{ margin: "5em" }}>
          <Typography variant="h1">This is the Sorting Hat Ceremony</Typography>
          <Typography variant="body2">
            Today you will find out what house the sorting hat has chosen for
            you.
          </Typography>
        </Grid>
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <Typography variant="body2">Let the process begin!</Typography>
          </Grid>
          <Grid item style={{ margin: "2em" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: theme.palette.common.olive,
                fontSize: "1.8rem",
              }}
              component={Link}
              to="/sort"
            >
              Enter
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
