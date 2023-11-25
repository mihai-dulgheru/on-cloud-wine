const Input = ({ className, ...props }) => {
  return (
    <input
      type="text"
      inputMode="text"
      className={`form-input ${className && className}`}
      {...props}
    />
  );
};

export default Input;
