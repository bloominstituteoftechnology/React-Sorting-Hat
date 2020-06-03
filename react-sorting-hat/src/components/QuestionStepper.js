import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import hat from "../assets/images/hat.jpg";
import theme from "../ui/Theme";
import Sorting from "../components/Sorting";

const GreenRadio = withStyles({
  root: {
    color: "#A69F69",
    "&$checked": {
      color: "#A69F69",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  stepper: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${hat})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
  },
}));

function getSteps() {
  return [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5",
    "Question 6",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `What color most appeals to you?`;
    case 1:
      return `What do you hold at the highest value?`;
    case 2:
      return `Where are you most comfortable?`;
    case 3:
      return `What is your preferred magical practice?`;
    case 4:
      return `Which of these would you prefer as a pet?`;
    case 5:
      return `Which of these is your worst nightmare?`;
    default:
      return "Unknown step";
  }
}

function getStepQuestions(step) {
  switch (step) {
    case 0:
      return [
        { title: "Instinct" },
        { a1: "Scarlet", house: "Griffendor" },
        { a2: "Yellow", house: "Hufflepuff" },
        { a3: "Blue", house: "Ravenclaw" },
        { a4: "Emerald Green", house: "Slytherin" },
      ];
    case 1:
      return [
        { title: "Values" },
        { a1: "Love", house: "Hufflepuff" },
        { a2: "Power", house: "Slytherin" },
        { a3: "Wisdom", house: "Ravenclaw" },
        { a4: "Glory", house: "Griffendor" },
      ];
    case 2:
      return [
        { title: "Comfort" },
        { a1: "At home", house: "Hufflepuff" },
        { a2: "At sea", house: "Slytherin" },
        { a3: "In the library", house: "Ravenclaw" },
        { a4: "Around a fire", house: "Griffendor" },
      ];
    case 3:
      return [
        { title: "Practice" },
        { a1: "Apparition/Disapparition", house: "Slytherin" },
        { a2: "Broom Flying", house: "Griffendor" },
        { a3: "Magical Creatures", house: "Hufflepuff" },
        { a4: "Transfiguration", house: "Ravenclaw" },
      ];
    case 4:
      return [
        { title: "Companions" },
        { a1: "Ghost", house: "Griffendor" },
        { a2: "Centuar", house: "Ravenclaw" },
        { a3: "Warewolf", house: "Hufflepuff" },
        { a4: "Goblin", house: "Slytherin" },
      ];
    case 5:
      return [
        { title: "Fears" },
        { a1: "No one knows you", house: "Hufflepuff" },
        { a2: "You have a silly voice", house: "Slytherin" },
        { a3: "You're stuck up high with no handholds", house: "Ravenclaw" },
        { a4: "Someone spying though your keyhole", house: "Griffendor" },
      ];
    default:
      return "Unknown step";
  }
}

export default function VerticalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const [value, setValue] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleNext = (e) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setUserAnswers([...userAnswers, value]);
    setValue('')
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleResults = () => {
      props.handleAnswers(userAnswers);
      setUserAnswers([]);
  }
  
  return (
    <div className={classes.root}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        className={classes.stepper}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel></StepLabel>
            <StepContent>
              <Typography variant="h6">{getStepContent(index)}</Typography>
              <FormControl component="fieldset">
                <FormLabel
                  component="legend"
                  style={{
                    fontStyle: "italic",
                    color: theme.palette.common.olive,
                  }}
                >
                  {getStepQuestions(index)[0].title}
                </FormLabel>
                <RadioGroup
                  aria-label={label}
                  name={label}
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value={getStepQuestions(index)[1].house}
                    control={<GreenRadio />}
                    label={getStepQuestions(index)[1].a1}
                  />
                  <FormControlLabel
                    value={getStepQuestions(index)[2].house}
                    control={<GreenRadio />}
                    label={getStepQuestions(index)[2].a2}
                  />
                  <FormControlLabel
                    value={getStepQuestions(index)[3].house}
                    control={<GreenRadio />}
                    label={getStepQuestions(index)[3].a3}
                  />
                  <FormControlLabel
                    value={getStepQuestions(index)[4].house}
                    control={<GreenRadio />}
                    label={getStepQuestions(index)[4].a4}
                  />
                </RadioGroup>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                      color="primary"
                      variant="outlined"
                    >
                      Back
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </div>
              </FormControl>
            </StepContent>
          </Step>
        ))}
        {activeStep === steps.length && (
          // <Paper square elevation={0} className={classes.resetContainer}>
          <>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button
            //   component={Link}
            //   to="/"
              onClick={handleResults}
              className={classes.button}
              variant="outlined"
              color="primary"
              style={{ maxWidth: 200 }}
            >
              Get results
            </Button>
            <Button
              onClick={handleReset}
              className={classes.button}
              variant="outlined"
              color="primary"
              style={{ maxWidth: 200 }}
            >
              Start Over
            </Button>
          </>
          // </Paper>
        )}
      </Stepper>
    </div>
  );
}
