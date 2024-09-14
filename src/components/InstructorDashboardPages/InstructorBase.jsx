import useAuthStore from "../../store/authStore";
import Sidenav from "../Sidenav";

const InstructorBase = () => {
  const user = useAuthStore((state) => state.user);
  return <>
  {/* <p>{user}</p> */}
  </>
};

export default InstructorBase;
