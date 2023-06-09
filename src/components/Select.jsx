import PropTypes from "prop-types";

const Select = ({
  onChange,
  name,
  value,
  options,
  error,
  defaultValue,
  label,
}) => {
  return (
    <div className="mb-4">
      <label>{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={"form-select " + (error ? "is-invalid" : "")}
      >
        <option value="" disabled>
          {defaultValue}
        </option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.string.isRequired,
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default Select;
