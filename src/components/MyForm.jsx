import { useEffect, useState } from "react";
import TextField from "./TextField";
import { validate } from "../utils/validator";

const MyForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    description: "",
  });
  const [error, setError] = useState({});

  const isValid = Object.keys(error).length === 0;

  const onSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      console.log(data);
    }
  };

  //   const onEmailChange = ({ target }) => {
  //     setEmail(target.value);
  //   };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validationSchema = {
    email: {
      isEmail: {
        message: "Email введён некорректно",
      },
      isRequired: {
        message: "Электронаая почта обязательна к заполнению",
      },
    },
    password: {
      isContainDigit: {
        message: " в пароле должна быть хоть одна цифра ",
      },
      min: {
        message: "Пароль должен состоять минимум из 8 символов",
        value: 8,
      },
      isRequired: {
        message: "password обязателен к заполнению",
      },
    },
    description: {
      isRequired: {
        message: "description обязателен к заполнению",
      },
    },
  };

  useEffect(() => {
    const error = validate(data, validationSchema);
    setError(error);
  }, [data]);

  const { email, password, description } = data;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <form onSubmit={onSubmit}>
            <TextField
              name="email"
              value={email}
              label="Email"
              onChange={handleChange}
              id="email"
              type="text"
              placeholder="enter email"
              error={error.email}
            />

            <TextField
              name="password"
              value={password}
              label="Password"
              onChange={handleChange}
              id="password"
              type="password"
              placeholder="enter password"
              error={error.password}
            />
            <TextField
              name="description"
              value={description}
              label="description"
              onChange={handleChange}
              id="description"
              type="text"
              placeholder="enter description"
              error={error.description}
            />

            <button
              disabled={!isValid}
              type="submit"
              className="btn btn-primary w-100 mx-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
