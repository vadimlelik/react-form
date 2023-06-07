import { useState } from "react";

const MyForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    description: "",
  });

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

  const { email, password, description } = data;

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">Email </label>
        <input
          id="email"
          name="email"
          value={email}
          placeholder="enter email"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          placeholder="enter password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Описание</label>
        <input
          id="description"
          name="description"
          placeholder="enter description"
          value={description}
          onChange={handleChange}
        />
      </div>

      <button type="submit"> Submit </button>
    </form>
  );
};

export default MyForm;
