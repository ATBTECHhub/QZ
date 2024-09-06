const InputField = ({
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
    <div className="flex flex-col mb-4 w-full">
      <label
        htmlFor={name}
        className="text-base font-extrabold text-[#231F20CC]"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        className={`border rounded-[10px] w-full py-3 px-[10px] border-[#231F204F] outline-none ${
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

export default InputField;
