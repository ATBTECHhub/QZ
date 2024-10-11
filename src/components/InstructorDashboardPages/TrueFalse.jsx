const TrueFalse = ({ values, setFieldValue }) => {
  return (
 
      <section>
        <div className="bg-white gap-[22px] flex flex-col pl-[23px] pr-[51px] pb-[33px] pt-4 rounded-xl shadow-formShadow mb-[64px]">
          <p className="text-base leading-6 text-darkPrimary font-extrabold">
            Enter Answer options
          </p>
          <div className="flex flex-col gap-[15px]">
            <div>
              <input
                type="radio"
                id="true"
                name="questionAnswers"
                value="true"
                checked={values.questionAnswers[0] === true}
                onChange={() => setFieldValue("questionAnswers", [true])}
              />
              <label
                htmlFor="true"
                className="text-base text-darkPrimary leading-[22px] ml-2"
              >
                True
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="false"
                name="questionAnswers"
                value="false"
                checked={values.questionAnswers[0] === false}
                onChange={() => setFieldValue("questionAnswers", [false])}
              />
              <label
                htmlFor="false"
                className="text-base text-darkPrimary leading-[22px] ml-2"
              >
                False
              </label>
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default TrueFalse;
