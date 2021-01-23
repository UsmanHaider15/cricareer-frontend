import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IccBattingFormatAveragesComparison from "./IccBattingFormatAveragesComparison";
import IccBattingAveragesComparison from "./IccBattingAveragesComparison";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      style={{ marginBottom: 400 }}
    >
      {value === index && (
        <Box p={0}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  tab: {
    "& .MuiBox-root": {
      padding: "8px",
    },
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));

export default function IccCareerComparisons({ firstPlayer, secondPlayer }) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Batting" {...a11yProps(0)} />
          <Tab label="Bowling" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          value={value}
          index={0}
          dir={theme.direction}
          className={classes.tab}
        >
          <IccBattingAveragesComparison
            firstPlayer={firstPlayer}
            secondPlayer={secondPlayer}
          />
          <IccBattingFormatAveragesComparison
            firstPlayer={firstPlayer}
            secondPlayer={secondPlayer}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Bowling
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
