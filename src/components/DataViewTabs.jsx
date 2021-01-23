import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TableChart, BarChart } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IccBattingFormatAveragesComparisonTable from "./IccBattingFormatAveragesComparisonTable";
import IccBattingFormatAveragesComparisonChart from "./IccBattingFormatAveragesComparisonChart";
import _ from "lodash";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
      style={{
        // borderStyle: "solid",
        // borderColor: "gray",
        // borderWidth: "0px 1px 1px 1px",
        boxShadow: "2px 2px 6px 0px #888888",
      }}
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
      backgroundColor: " #f5f5f5",
      flexDirection: "row !important",
    },
  },
}));

export default function DataViewTabs({ data }) {
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
      <TabPanel value={value} index={0} className={classes.tabpanel}>
        <IccBattingFormatAveragesComparisonTable data={data} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <IccBattingFormatAveragesComparisonChart
          chartData={_.cloneDeep(data)}
        />
      </TabPanel>
    </div>
  );
}
