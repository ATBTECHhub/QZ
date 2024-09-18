import React, {useState, useEffect} from 'react'

const Timer = ({duration}) => {
    const [time, setTime] = useState(duration)

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000)
        },1000)
    },[time])
 
    const getformattedTime = (milliseconds) => {
        let total_seconds = parseInt(Math.floor(milliseconds / 1000));
        let total_minutes = parseInt(Math.floor(total_seconds / 60))
        let total_hours = parseInt(Math.floor(total_minutes / 60))
        let days = parseInt(Math.floor(total_hours / 24))

        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60);
        let hours = parseInt(total_hours % 24);

      return`${days} - ${hours} - ${minutes} - ${seconds}`  
    };

  return (
    // <div className="text-white gap-[100px] text-[32px] lg:text-[57px] justify-center items-center container ">
    //   {getformattedTime(time)}
    //   <div className="flex gap-4 lg:gap-[65px]  pl-4 lg:pl-28 text-white text-center text-[16px]">
    //     <p>Days</p>
    //     <p>Hours</p>
    //     <p>Minutes</p>
    //     <p>Seconds</p>
    //   </div>
    // </div>
    <div className="text-white gap-[15px] text-[32px] lg:text-[57px] justify-center items-center container flex flex-col">
      {getformattedTime(time)}
      <div className="flex gap-4 lg:gap-[68px] pl-4 lg:pl-12 text-white text-center text-[16px] justify-center">
        <p>Days</p>
        <p>Hours</p>
        <p>Minutes</p>
        <p>Seconds</p>
      </div>
    </div>
  );
  
}

export default Timer