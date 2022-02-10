// import IccPlayerComparison from "./Components/Comparisons/IccPlayerComparison";
// import IccPlayerProfile from "./Components/Profiles/IccPlayerProfile";
import LeaguePlayerProfile from "./Components/Profiles/LeaguePlayerProfile";
import LeaguePlayersComparison from "./Components/Comparisons/LeaguePlayersComparison";
import LeagueStats from "./Components/Leagues/LeagueStats";

export const comparisonsLinks = [
  {
    Component: LeaguePlayersComparison,
    link: "/comparison/ipl_comparison",
    leagueName: "ipl",
    firstPlayerID: "59",
    secondPlayerID: "94",
  },
  {
    Component: LeaguePlayersComparison,
    link: "/comparison/bbl_comparison",
    leagueName: "bbl",
    firstPlayerID: "137",
    secondPlayerID: "28",
  },
  {
    Component: LeaguePlayersComparison,
    link: "/comparison/t20_blast_comparison",
    leagueName: "t20_blast",
    firstPlayerID: "110",
    secondPlayerID: "123",
  },
  {
    Component: LeaguePlayersComparison,
    link: "/comparison/cpl_comparison",
    leagueName: "cpl",
    firstPlayerID: "19",
    secondPlayerID: "115",
  },
  {
    Component: LeaguePlayersComparison,
    link: "/comparison/lpl_comparison",
    leagueName: "lpl",
    firstPlayerID: "47",
    secondPlayerID: "62",
  },
  {
    Component: LeaguePlayersComparison,
    link: "/comparison/super_smash_comparison",
    leagueName: "super_smash",
    firstPlayerID: "12",
    secondPlayerID: "5",
  },
];

export const profileLinks = [
  {
    Component: LeaguePlayerProfile,
    link: "/profile/ipl_profile",
    leagueName: "ipl",
    playerID: "59",
  },
  {
    Component: LeaguePlayerProfile,
    link: "/profile/bbl_profile",
    leagueName: "bbl",
    playerID: "137",
  },
  {
    Component: LeaguePlayerProfile,
    link: "/profile/t20_blast_profile",
    leagueName: "t20_blast",
    playerID: "110",
  },
  {
    Component: LeaguePlayerProfile,
    link: "/profile/cpl_profile",
    leagueName: "cpl",
    playerID: "19",
  },
  {
    Component: LeaguePlayerProfile,
    link: "/profile/lpl_profile",
    leagueName: "lpl",
    playerID: "47",
  },
  {
    Component: LeaguePlayerProfile,
    link: "/profile/super_smash_profile",
    leagueName: "super_smash",
    playerID: "12",
  },
];

export const LeagueLinks = [
  {
    Component: LeagueStats,
    link: "/league/ipl_league",
    leagueName: "ipl",
  },
  {
    Component: LeagueStats,
    link: "/league/bbl_league",
    leagueName: "bbl",
  },
  {
    Component: LeagueStats,
    link: "/league/t20_blast_league",
    leagueName: "t20_blast",
  },
  {
    Component: LeagueStats,
    link: "/league/cpl_league",
    leagueName: "cpl",
  },
  {
    Component: LeagueStats,
    link: "/league/lpl_league",
    leagueName: "lpl",
  },
  {
    Component: LeagueStats,
    link: "/league/super_smash_league",
    leagueName: "super_smash",
  },
];
