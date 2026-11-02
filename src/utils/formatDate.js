// Converts an ISO date string (YYYY-MM-DD) into UK format (DD/MM/YYYY).
export function formatDate(isoDate) {
  if (!isoDate) return '';
  const [year, month, day] = isoDate.split('-');
  return `${day}/${month}/${year}`;
}
