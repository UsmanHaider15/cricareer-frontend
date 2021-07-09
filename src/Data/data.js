export const battingAverageOptions = [
  "matches_played",
  "innings_played",
  "not_outs",
  "runs_scored",
  "highest_inns_score",
  "batting_average",
  "balls_faced",
  "batting_strike_rate",
  "hundreds_scored",
  "fifties_scored",
  "boundary_fours",
  "boundary_sixes",
  "catches_taken",
];

export const bowingAverageOptions = [
  "matches_played",
  "innings_played",
  "balls_bowled",
  "runs_conceded",
  "wickets_taken",
  "best_innings_bowling",
  "best_match_bowling",
  "bowling_average",
  "economy_rate",
  "bowling_strike_rate",
  "four_wkts_in_an_inns",
  "five_wkts_in_an_inns",
  "ten_wkts_in_an_inns",
];

export const league_batting_table_column_name_lookup = {
  opposition_team: "Teams",
  innings_played: "Innings",
  not_outs: "Not Outs",
  runs_scored: "Runs",
  highest_inns_score: "Highest Score",
  batting_average: "Batting Average",
  balls_faced: "Balls Faced",
  batting_strike_rate: "Strike Rate",
  hundreds_scored: "Hundreds",
  fifties_scored: "Fifties",
  boundary_fours: "Fours",
  boundary_sixes: "Sixes",
};

export const icc_batting_table_column_name_lookup = {
  format_type: "Formats",
  // opposition_team: "Teams",
  matches_played: "Matches",
  innings_played: "Innings",
  not_outs: "Not Outs",
  runs_scored: "Runs",
  highest_inns_score: "Highest Score",
  batting_average: "Batting Average",
  balls_faced: "Balls Faced",
  batting_strike_rate: "Strike Rate",
  hundreds_scored: "Hundreds",
  fifties_scored: "Fifties",
  ducks_scored: "Duck Scored",
  boundary_fours: "Fours",
  boundary_sixes: "Sixes",
};

export const icc_bowling_table_column_name_lookup = {
  format_type: "Formats",
  matches_played: "Matches",
  innings_played: "Innings",
  wickets_taken: "Wickets Taken",
  // balls_bowled: "Balls Bowled",
  best_innings_bowling: "Best Inns Bowling",
  best_match_bowling: "Best Match Bowling",
  bowling_average: "Bowling Average",
  bowling_strike_rate: "Batting Strike Rate",
  economy_rate: "Economy Rate",
  maidens_earned: "Maidens Earned",
  overs_bowled: "Overs Bowled",
  runs_conceded: "Runs Conceded",
  four_wkts_in_an_inns: "4 Wkts in Inns",
  five_wkts_in_an_inns: "5 Wkts in Inns",
  ten_wkts_in_an_inns: "10 Wkts in Inns",
};

export const league_bowling_table_column_to_label_lookup = {
  opposition_team: "Teams",
  innings_played: "Innings",
  balls_bowled: "Balls Bowled",
  runs_conceded: "Runs Conceded",
  wickets_taken: "Wickets Taken",
  best_innings_bowling: "Best Inns Bowling",
  bowling_average: "Bowling Average",
  economy_rate: "Economy Rate",
  bowling_strike_rate: "Strike Rate",
  four_wkts_in_an_inns: "4 Wkts Match",
  five_wkts_in_an_inns: "5 Wkts Match",
  ten_wkts_in_an_inns: "10 Wkts Match",
};

export const icc_teams_lookup = {
  all_teams: "All Teams",
  england: "England",
  australia: "Australia",
  southafrica: "South Africa",
  westindies: "West Indies",
  newzealand: "New Zealand",
  india: "India",
  pakistan: "Pakistan",
  srilanka: "Sri Lanka",
  zimbabwe: "Zimbabwe",
  bangladesh: "Bangladesh",
  ireland: "Ireland",
  afghanistan: "Afghanistan",
};

export const icc_format_lookup = {
  odi: "ODIs",
  all_formats: "All Formats",
  t201: "T20Is",
  test: "Tests",
};

export const league_teams = {
  ipl: [
    "All Teams",
    "Chennai Super Kings",
    "Delhi Capitals",
    "Punjab Kings",
    "Kolkata Knight Riders",
    "Mumbai Indians",
    "Rajasthan Royals",
    "Royal Challengers Bangalore",
    // "Sunrisers Hyderabad",
    // "Deccan Chargers",
    // "Kochi Tuskers Kerala",
    // "Pune Warriors India",
    // "Rising Pune Supergiant",
    // "Gujarat Lions",
  ],
  psl: [
    "All Teams",
    "Islamabad United",
    "Karachi Kings",
    "Lahore Qalandars",
    "Multan Sultans",
    "Peshawar Zalmi",
    "Quetta Gladiators",
  ],

  bbl: [
    "All Teams",
    "Adelaide Strikers",
    "Brisbane Heat",
    "Hobart Hurricanes",
    "Melbourne Renegades",
    "	Melbourne Stars",
    "Perth Scorchers",
    "Sydney Sixers",
    "Sydney Thunder",
  ],
};

export const league_seasons = { psl: 6, ipl: 13, bbl: 10 };
