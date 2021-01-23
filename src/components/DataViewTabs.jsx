import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TableChart, BarChart } from "@material-ui/icons";
import IccBattingFormatAveragesComparisonTable from "./IccBattingFormatAveragesComparisonTable";
import IccBattingFormatAveragesComparisonChart from "./IccBattingFormatAveragesComparisonChart";
import TabPanel from "./common/TabPanel";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    backgroundColor: "white",
    boxShadow: "none",
    "& .MuiTabs-root": {
      minHeight: "0px",
    },
  },
  tab: {
    padding: "0px !important",
    minHeight: "0px",
    "& .MuiTab-wrapper": {
      padding: "10px 10px 10px 10px",
      backgroundColor: " #f3f1f1",
      flexDirection: "row !important",
    },
  },
  tabPanel: {
    boxShadow: "2px 2px 6px 0px #888888",
    borderRadius: "0px 10px 10px 10px",
    "& .MuiBox-root": {
      padding: 8,
    },
  },
}));

export default function DataViewTabs({
  data,
  chartData,
  firstPlayer,
  secondPlayer,
}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Table" icon={<TableChart />} className={classes.tab} />
          <Tab label="Chart" icon={<BarChart />} className={classes.tab} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.tabPanel}>
        <IccBattingFormatAveragesComparisonTable data={data} />
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabPanel}>
        <IccBattingFormatAveragesComparisonChart
          chartData={chartData}
          firstPlayer={firstPlayer}
          secondPlayer={secondPlayer}
        />
      </TabPanel>
    </div>
  );
}
