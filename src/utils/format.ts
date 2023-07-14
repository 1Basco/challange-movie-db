export const formatDateToLongMonth = (originalDate: string) => {
  const date = new Date(originalDate);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
};
