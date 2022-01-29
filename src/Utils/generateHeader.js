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

const humanifyLeagueTeams = (leagueName) =>
  Object.values(league_teams[leagueName])
    .slice(1)
    .map((team) => ` ${team}`);
