import { league_teams, leagueNameLookup } from "Data/data";

export const getHeaderTitle = ({ playerName, leagueName }) => {
  const formattedLeagueName = `${
    leagueNameLookup[leagueName]
  } (${leagueName.toUpperCase()})`;

  return `${playerName}'s Batting and Bowling statistics in ${formattedLeagueName}`;
};

export const getHeaderDescription = ({ playerName, leagueName }) => {
  const formattedLeagueName = `${
    leagueNameLookup[leagueName]
  } (${leagueName.toUpperCase()})`;
  return `${playerName} total runs scored in ${formattedLeagueName}. ${playerName} batting strike rate in ${formattedLeagueName}. ${playerName} batting average in ${formattedLeagueName}. ${playerName} total wickets taken in ${formattedLeagueName}. ${playerName} bowling economy in ${formattedLeagueName}. ${playerName} bowling average in ${formattedLeagueName}. ${playerName} bowling strike rate in ${formattedLeagueName}.`;
};

export const generateComparisonHeaderTitle = ({
  firstPlayerName,
  secondPlayerName,
  leagueName,
}) =>
  `${firstPlayerName} vs ${secondPlayerName} in ${leagueName.toUpperCase()}`;

export const generateComparisonHeaderDescription = ({
  firstPlayerName,
  secondPlayerName,
  leagueName,
}) => `
Compare Batting and Bowling Averages of ${firstPlayerName} and ${secondPlayerName} in any season of ${leagueName.toUpperCase()}. You can also compare ${firstPlayerName} and ${secondPlayerName} batting and bowling averages against other teams like${Object.values(
  league_teams[leagueName]
)
  .slice(1)
  .map((team) => ` ${team}`)} as well.`;

const humanifyLeagueTeams = (leagueName) =>
  Object.values(league_teams[leagueName])
    .slice(1)
    .map((team) => ` ${team}`);
