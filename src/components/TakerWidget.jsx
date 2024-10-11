import { takerDashboardWidget } from "../constants/data";

const TakerWidget = () => {
  return (
    <div className="flex items-center gap-8">
      {takerDashboardWidget.map((widget, index) => (
        <div
          key={index}
          className="bg-white flex items-center py-[22px] pl-[27px] pr-10 rounded-[12px] gap-[18px]"
        >
          <div
            className={`w-[56px] h-[56px] rounded-[19px] flex justify-center items-center ${widget.color}`}
          >
            <img src={widget.icon} alt="" />
          </div>
          <div>
            <p className="font-semibold text-2xl">20</p>
            <p>{widget.title}</p>
          </div>
        </div>
      ))}
      {/* <div className="bg-white flex items-center py-[22px] px-[27px] rounded-[12px] gap-[18px]">
        <div className="bg-primary w-[56px] h-[56px] rounded-[19px] flex justify-center items-center">
          <img src={widgetOne} alt="" />
        </div>
        <div>
          <p className="font-semibold text-2xl">45</p>
          <p>Number of Tests</p>
        </div>
      </div> */}
    </div>
  );
};

export default TakerWidget;
