import { Box, Button, Slider, Switch, Typography } from "@mui/material";
import { useState } from "react";

import "./AutoTopUp.css";

const AutoTopUp = () => {
  // State variables to manage auto top-up status and slider value
  const [autoTopUp, setAutoTopUp] = useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState<Number>(10);

  // Function to toggle auto top-up status
  const handleAutoTopUpToggle = () => {
    setAutoTopUp((prevAutoTopUp: boolean) => !prevAutoTopUp);
  };

  const handleSliderChange = (e: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  // Function to handle confirm button click
  const handleConfirmClick = () => {
    console.log(`Selected credit amount: ${sliderValue}`);
  };

  const calculateCredits = (amount: number) => {
    switch (amount) {
      case 5:
        return 500;
      case 10:
        return 1200;
      case 15:
        return 1700;
      case 20:
        return 2500;
      case 25:
        return 3900;
      case 30:
        return 5000;
      default:
        return 0;
    }
  };

  // Function to render custom labels for slider marks
  function renderSliderLabel(mark: any) {
    return (
      <Box display="flex" flexDirection="column">
        <Typography>{mark.value}$</Typography>
        <Typography variant="body2">
          {calculateCredits(mark.value)} credits
        </Typography>
      </Box>
    );
  }

  // Array of marks for the slider with custom labels
  const marks = [
    { value: 5, label: renderSliderLabel({ value: 5 }) },
    { value: 10, label: renderSliderLabel({ value: 10 }) },
    { value: 15, label: renderSliderLabel({ value: 15 }) },
    { value: 20, label: renderSliderLabel({ value: 20 }) },
    { value: 25, label: renderSliderLabel({ value: 25 }) },
    { value: 30, label: renderSliderLabel({ value: 30 }) },
  ];

  // JSX representing the UI of the component
  return (
    <Box className="auto-top-up-container">
      <Box>
        <Box style={{ display: "flex" }}>
          <Typography variant="h6">Setup Auto Top-up</Typography>
          <Switch onClick={handleAutoTopUpToggle} />
        </Box>

        {!autoTopUp ? (
          <Typography variant="body2">
            Once the credit goes below the threshold value, credits can be auto
            purchased. Setup auto top-up to enjoy uninterrupted services. You
            can disable this anytime to stop auto top-up.
          </Typography>
        ) : (
          <Typography variant="body2" className="description-text" gutterBottom>
            Once the credit goes below a minimum threshold
            <Box
              component="span"
              fontWeight="700"
              color="#9747FF"
              marginLeft="4px"
            >
              50
            </Box>
            , we will auto-purchase
            <Box
              component="span"
              fontWeight="700"
              color="#9747FF"
              marginLeft="4px"
            >
              1200
            </Box>
            credits and add them to your account. Learn more
          </Typography>
        )}
      </Box>

      {/* Render slider and confirm button only if auto top-up is enabled */}
      {autoTopUp && (
        <>
          <Box className="settings-container" marginBottom="40px">
            <Slider
              valueLabelDisplay="auto"
              value={sliderValue}
              min={5}
              max={30}
              step={5}
              onChange={handleSliderChange}
              marks={marks}
              aria-labelledby="discrete-slider"
            />
          </Box>
          <Button
            variant="contained"
            className="confirm-auto-purchase"
            onClick={handleConfirmClick}
          >
            Confirm auto-purchase
          </Button>
        </>
      )}
    </Box>
  );
};

export default AutoTopUp;
