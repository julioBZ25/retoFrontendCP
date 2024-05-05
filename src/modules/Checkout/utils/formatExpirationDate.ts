export const formatExpirationDate = (fecha: string) => {
  const currentDate = new Date();
  const [month, year] = fecha.split('/');
  const currentYear = currentDate.getFullYear().toString().slice(0, 2);
  const fullYear = currentYear + year;
  return `${fullYear}/${month.padStart(2, '0')}`;
}