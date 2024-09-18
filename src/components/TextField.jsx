const TextField = ({
  label,
  name,
  type,
  placeholder,
  value,
  error,
  onChange,
  onBlur,
}) => {
  return (
    <div className="bg-white gap-[9px] flex flex-col pl-[23px] pr-[51px] pb-[33px] pt-4 rounded-xl shadow-formShadow mb-[64px]">
      <label
        htmlFor={name}
        className="text-base font-fustat leading-6 text- darkPrimary font-extrabold"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        className={`border border-[#E6E6E9] px-5 py-3 rounded-[8px] outline-none w-[636px] ${
          error ? "border border-red-500" : ""
        }`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
    </div>
  );
};

export default TextField;