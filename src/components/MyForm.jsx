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

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(data);
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
      isRequired: {
        message: "Электронаая почта обязательна к заполнению",
      },
    },
    password: {
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
    <div>
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

        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default MyForm;
