export function formatDateTime(date = new Date()) {
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHour = hours % 12 || 12;

  return {
    date: `${day} ${month},${year}`,
    time: `${formattedHour}:${minutes} ${ampm}`,
    full: `${day} ${month} ${year}, ${formattedHour}:${minutes} ${ampm}`,
  };
}
