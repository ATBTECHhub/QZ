import { format } from "date-fns";

const DateFormatter = ({ date }) => {
  const formattedDate = format(new Date(date), "do MMM yyyy");

  return <span>{formattedDate}</span>;
};

export default DateFormatter;
