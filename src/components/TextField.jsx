import PropTypes from "prop-types";
const TextField = ({
  value,
  name,
  type,
  onChange,
  label,
  placeholder,
  error,
}) => {
  const getInputClass = () => {
    return "form-control" + (error ? " is-invalid" : "");
  };

  return (
    <div className="mb-4">
      <label htmlFor={name}>{label} </label>
      <div className="input-group has-validation">
        <input
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          className={getInputClass()}
        />

        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default TextField;
