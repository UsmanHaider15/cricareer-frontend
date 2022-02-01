import capitalizeFirstLetter from "Utils/capitalizeFirstLetter";
import humanify from "Utils/humanify";

export default function getFormattedPageName({ leagueName, type }) {
  const formatted_type = leagueName.includes("_")
    ? humanify(leagueName)
    : leagueName.toUpperCase();

  return `${formatted_type} ${capitalizeFirstLetter(type)}`;
}
