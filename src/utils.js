export function formatDay(timestamp) {
  const date = new Date(timestamp * 1000);
  const day = date.toLocaleDateString("en-US", { weekday: "short" });
  return day;
}
