// import IccPlayerComparison from "./Components/Comparisons/IccPlayerComparison";
// import IccPlayerProfile from "./Components/Profiles/IccPlayerProfile";
import LeaguePlayerProfile from "./Components/Profiles/LeaguePlayerProfile";
import LeaguePlayersComparison from "./Components/Comparisons/LeaguePlayersComparison";
import LeagueStats from "./Components/Leagues/LeagueStats";

export const comparisonsLinks = [
  {
    Component: LeaguePlayersComparison,
    link: "/comparisons/ipl_comparison",
    leagueName: "ipl",
    firstPlayerID: "59",
    secondPlayerID: "94",
  },
  {
    Component: LeaguePlayersComparison,
    link: "/comparisons/bbl_comparison",
    leagueName: "bbl",
    firstPlayerID: "137",
    secondPlayerID: "28",
  },
  {
    Component: LeaguePlayersComparison,
    link: "/comparisons/psl_comparison",
    leagueName: "psl",
    firstPlayerID: "63",
    secondPlayerID: "18",
  },
  {
    Component: LeaguePlayersComparison,
    link: "/comparisons/t20_blast_comparison",
    leagueName: "t20_blast",
    firstPlayerID: "110",
    secondPlayerID: "497",
  },
  {
    Component: LeaguePlayersComparison,
    link: "/comparisons/cpl_comparison",
    leagueName: "cpl",
    firstPlayerID: "19",
    secondPlayerID: "115",
  },
  {
    Component: LeaguePlayersComparison,
    link: "/comparisons/bpl_comparison",
    leagueName: "bpl",
    firstPlayerID: "62",
    secondPlayerID: "158",
  },
  {
    Component: LeaguePlayersComparison,
    link: "/comparisons/lpl_comparison",
    leagueName: "lpl",
    firstPlayerID: "47",
    secondPlayerID: "62",
  },
  {
    Component: LeaguePlayersComparison,
    link: "/comparisons/super_smash_comparison",
    leagueName: "super_smash",
    firstPlayerID: "12",
    secondPlayerID: "45",
  },
];

export const profileLinks = [
  {
    Component: LeaguePlayerProfile,
    link: "/profiles/ipl_profile",
    leagueName: "ipl",
    playerID: "59",
  },
  {
    Component: LeaguePlayerProfile,
    link: "/profiles/bbl_profile",
    leagueName: "bbl",
    playerID: "137",
  },
  {
    Component: LeaguePlayerProfile,
    link: "/profiles/psl_profile",
    leagueName: "psl",
    playerID: "63",
  },
  {
    Component: LeaguePlayerProfile,
    link: "/profiles/t20_blast_profile",
    leagueName: "t20_blast",
    playerID: "110",
  },
  {
    Component: LeaguePlayerProfile,
    link: "/profiles/cpl_profile",
    leagueName: "cpl",
    playerID: "19",
  },
  {
    Component: LeaguePlayerProfile,
    link: "/profiles/bpl_profile",
    leagueName: "bpl",
    playerID: "62",
  },
  {
    Component: LeaguePlayerProfile,
    link: "/profiles/lpl_profile",
    leagueName: "lpl",
    playerID: "47",
  },
  {
    Component: LeaguePlayerProfile,
    link: "/profiles/super_smash_profile",
    leagueName: "super_smash",
    playerID: "12",
  },
];

export const LeagueLinks = [
  {
    Component: LeagueStats,
    link: "/leagues/ipl_league",
    leagueName: "ipl",
  },
  {
    Component: LeagueStats,
    link: "/leagues/bbl_league",
    leagueName: "bbl",
  },
  {
    Component: LeagueStats,
    link: "/leagues/psl_league",
    leagueName: "psl",
  },
  {
    Component: LeagueStats,
    link: "/leagues/t20_blast_league",
    leagueName: "t20_blast",
  },
  {
    Component: LeagueStats,
    link: "/leagues/cpl_league",
    leagueName: "cpl",
  },
  {
    Component: LeagueStats,
    link: "/leagues/bpl_league",
    leagueName: "bpl",
  },
  {
    Component: LeagueStats,
    link: "/leagues/lpl_league",
    leagueName: "lpl",
  },
  {
    Component: LeagueStats,
    link: "/leagues/super_smash_league",
    leagueName: "super_smash",
  },
];
