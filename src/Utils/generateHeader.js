import { league_teams } from "Data/data";

export const getHeaderTitle = ({ playerName, leagueName }) =>
  `${playerName}'s Batting and Bowling Averages in ${leagueName.toUpperCase()}`;

export const getHeaderDescription = ({
  playerName,
  leagueName,
}) => `Get Details of ${playerName}'s batting and bowling averages in any season of ${leagueName.toUpperCase()} against teams like${humanifyLeagueTeams(
  leagueName
)} 
   as well.`;

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
