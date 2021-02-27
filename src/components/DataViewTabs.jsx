import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TableChart, BarChart } from "@material-ui/icons";
import TableView from "./common/TableView";
import ChartView from "./common/ChartView";
import TabPanel from "./common/TabPanel";
import SwipeableViews from "react-swipeable-views";

const useStyles = makeStyles((theme) => ({
  root: {},
  tab: {
    minHeight: 0,
    "& .MuiTab-wrapper": {
      flexDirection: "row !important",
    },
  },
  content: {
    boxShadow: "1px 1px 5px gray;",
    paddingTop: 8,
    borderRadius: 10,
  },
}));

export default function DataViewTabs({
  data,
  chartData,
  firstPlayer,
  secondPlayer,
}) {
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
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Table" icon={<TableChart />} className={classes.tab} />
          <Tab label="Chart" icon={<BarChart />} className={classes.tab} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        className={classes.content}
      >
        <TabPanel value={value} index={0}>
          <TableView
            data={data}
            excludedKeys={["player_id", "match_type", "stumpings_made"]}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ChartView
            chartData={{
              ...chartData,
              first_player_name: firstPlayer.player_name,
              second_player_name: secondPlayer.player_name,
            }}
          />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
