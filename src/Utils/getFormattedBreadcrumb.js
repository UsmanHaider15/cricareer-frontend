import capitalizeFirstLetter from "./capitalizeFirstLetter";

const getFormattedBreadcrumb = (value) => {
  const raw_text = value.match("[^/]+$")[0];
  const [league, type] = raw_text.split("_");
  return `${league.toUpperCase()} ${capitalizeFirstLetter(type)}`;
};

export default getFormattedBreadcrumb;
