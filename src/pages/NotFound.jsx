import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-white text-dark text-center flex flex-col gap-2 mt-64">
      <h1 className="text-[32px]">404</h1>
      <p className="text-xl">Page not found</p>
      <Link to="/" className="underline text-primary">
        Go back Home
      </Link>
    </div>
  );
};

export default NotFound;
