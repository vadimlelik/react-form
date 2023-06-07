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
  return (
    <div>
      <label htmlFor={name}>{label} </label>
      <input
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />

      {error && <p>{error}</p>}
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
