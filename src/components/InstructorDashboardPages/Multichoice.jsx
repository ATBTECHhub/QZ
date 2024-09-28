import React from 'react'

const Multichoice = () => {
  return (
    <>
      <div className="bg-white gap-[9px] flex flex-col pl-[23px] pr-[51px] pb-[33px] pt-4 rounded-xl shadow-formShadow mb-[64px]">
        <p className="text-base  leading-6 text-darkPrimary font-extrabold">
          Enter Answer options
        </p>
        {values.questionOptions.map((option, index) => (
          <div key={index} className="flex gap-[10px]">
            <label
              htmlFor={`option-${index}`}
              className="text-base font-extrabold leading-[22px]"
            >
              {String.fromCharCode(65 + index)}
            </label>
            <div className="w-full">
              <textarea
                type="text"
                name={`questionOptions[${index}].optionText`}
                placeholder={`Enter option ${String.fromCharCode(65 + index)}`}
                id={`option-${index}`}
                className={`border border-[#E6E6E9] px-5 w-full py-3 rounded-[8px] outline-none h-[80px] resize-none ${
                  getError(`questionOptions[${index}].optionText`)
                    ? "border-red-500"
                    : ""
                }`}
                value={values.questionOptions[index]?.optionText || ""}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <div>
                <input
                  id={`isCorrect-${index}`}
                  type="checkbox"
                  name={`questionOptions[${index}].isCorrect`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={option.isCorrect}
                />
                <label
                  htmlFor={`isCorrect-${index}`}
                  className="text-base text-[#231F20CC] ml-1 cursor-pointer"
                >
                  Correct Answer
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </>
  );
}

export default Multichoice