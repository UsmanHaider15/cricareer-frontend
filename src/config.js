// import IccPlayerComparison from "./Components/Comparisons/IccPlayerComparison";
// import IccPlayerProfile from "./Components/Profiles/IccPlayerProfile";
import LeaguePlayerProfile from "./Components/Profiles/LeaguePlayerProfile";
import LeaguePlayersComparison from "./Components/Comparisons/LeaguePlayersComparison";
import LeagueStats from "./Components/Leagues/LeagueStats";

export const comparisonsLinks = [
  //   {
  //     Component: IccPlayerComparison,
  //     link: "/comparisons/icc_comparison",
  //     leagueName: "icc",
  //     firstPlayerID: "253802",
  //     secondPlayerID: "28081",
  //   },
  {
    Component: LeaguePlayersComparison,
    link: "/comparison/psl_comparison",
    leagueName: "psl",
    firstPlayerID: "1",
    secondPlayerID: "2",
  },
  {
    Component: LeaguePlayersComparison,
    link: "/comparison/ipl_comparison",
    leagueName: "ipl",
    firstPlayerID: "46",
    secondPlayerID: "177",
  },
  {
    Component: LeaguePlayersComparison,
    link: "/comparison/bbl_comparison",
    leagueName: "bbl",
    firstPlayerID: "16",
    secondPlayerID: "17",
  },
  {
    Component: LeaguePlayersComparison,
    link: "/comparison/cpl_comparison",
    leagueName: "cpl",
    firstPlayerID: "5",
    secondPlayerID: "17",
  },
  {
    Component: LeaguePlayersComparison,
    link: "/comparison/super_smash_comparison",
    leagueName: "super_smash",
    firstPlayerID: "12",
    secondPlayerID: "17",
  },
  {
    Component: LeaguePlayersComparison,
    link: "/comparison/t20_blast_comparison",
    leagueName: "t20_blast",
    firstPlayerID: "2",
    secondPlayerID: "13",
  },
];

export const profileLinks = [
  //   {
  //     Component: IccPlayerProfile,
  //     link: "/profiles/icc_profile",
  //     leagueName: "icc",
  //     playerID: "253802",
  //   },
  {
    Component: LeaguePlayerProfile,
    link: "/profile/psl_profile",
    leagueName: "psl",
    playerID: "1",
  },
  {
    Component: LeaguePlayerProfile,
    link: "/profile/ipl_profile",
    leagueName: "ipl",
    playerID: "46",
  },
  {
    Component: LeaguePlayerProfile,
    link: "/profile/bbl_profile",
    leagueName: "bbl",
    playerID: "17",
  },
  {
    Component: LeaguePlayerProfile,
    link: "/profile/cpl_profile",
    leagueName: "cpl",
    playerID: "17",
  },
  {
    Component: LeaguePlayerProfile,
    link: "/profile/super_smash_profile",
    leagueName: "super_smash",
    playerID: "17",
  },
  {
    Component: LeaguePlayerProfile,
    link: "/profile/t20_blast_profile",
    leagueName: "t20_blast",
    playerID: "2",
  },
];

export const LeagueLinks = [
  {
    Component: LeagueStats,
    link: "/league/psl_league",
    leagueName: "psl",
  },
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
    link: "/league/cpl_league",
    leagueName: "cpl",
  },
  {
    Component: LeagueStats,
    link: "/league/super_smash_league",
    leagueName: "super_smash",
  },
  {
    Component: LeagueStats,
    link: "/league/t20_blast_league",
    leagueName: "t20_blast",
  },
];
