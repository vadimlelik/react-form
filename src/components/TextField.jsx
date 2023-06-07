import PropTypes from "prop-types";
import { useState } from "react";
const TextField = ({
  value,
  name,
  type,
  onChange,
  label,
  placeholder,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const getInputClass = () => {
    return "form-control" + (error ? " is-invalid" : "");
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
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
          type={showPassword ? "text" : type}
          onChange={onChange}
          className={getInputClass()}
        />
        {type === "password" && (
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={toggleShowPassword}
          >
            {showPassword ? "Cкрыть" : "Показать"} пароль
          </button>
        )}

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
