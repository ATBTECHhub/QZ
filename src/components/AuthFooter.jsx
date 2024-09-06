import { Link } from "react-router-dom";

const AuthFooter = () => {
  return (
    <div className="container flex flex-col gap-5 lg:flex-row text-[13px] pb-16 font-fustat justify-between">
      <h6>
        QZ Platform - Licensed by the National Authority of Technology
        Development, Nigeria.
      </h6>
      <div className="flex justify-between lg:gap-16">
        <Link to="/privacy-policy" className="hover:text-primary">
          Privacy policy
        </Link>
        <Link to="/terms" className="hover:text-primary">
          Terms and conditions
        </Link>
      </div>
    </div>
  );
};

export default AuthFooter;
