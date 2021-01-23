import React from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import IccBattingFormatAveragesComparison from "./IccBattingFormatAveragesComparison";
import IccBattingAveragesComparison from "./IccBattingAveragesComparison";
import TabPanel from "./common/TabPanel";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  tabPanel: {
    "& .MuiBox-root": {
      padding: 8,
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
          className={classes.tabPanel}
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
        <TabPanel
          value={value}
          index={1}
          dir={theme.direction}
          className={classes.tabPanel}
        >
          Bowling
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
