import ReactSearchBox from "react-search-box";

const InstructorBase = () => {
  return (
    <section className="bg-light font-fustat">
      <div className="flex justify-between items-center gap-[700px] container ">
        <p className="justify-center items-center text-sm ">
          Welcome Back, Adejare
        </p>
        <ReactSearchBox />
      </div>
      <div className="grid lg:grid-cols-[30%_30%_30%] gap-8  ">

      </div>
    </section>
  );
};

export default InstructorBase;
