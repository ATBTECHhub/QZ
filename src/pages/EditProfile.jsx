import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'

const EditProfile = () => {
  return (
    <section className="font-fustat bg-light container">
      <Navbar className="container" />
      <div className=" bg-light pt-32 ">
        <div className="container max-w-md p-94 bg-white w-[270px] lg:w-[717px] h-[500px]  items-center justify-center ">

        </div>
      </div>

      <div className="flex text-[13px] pl-10 lg:gap-[300px] gap-10 pt-10 font-fustat lg:h-24 bg-light container ">
        <h6>
          QZ Platform - Licensed by the National Authority of Technology
          Development, Nigeria.
        </h6>
        <div className="flex gap-4 lg:gap-20">
          <Link to="policy">
            <p>Privacy policy</p>
          </Link>
          <Link to="terms and conditions">
            <p>Terms and conditions</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default EditProfile