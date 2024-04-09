export function getActualDate() {
  const dateString = new Date().toLocaleString("en-US", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const parts = dateString.split('/');
const formattedDate = `${parts[2]}-${parts[0].padStart(2, '0')}-${parts[1].padStart(2, '0')}`;

return formattedDate
}